import products from "../data";
import cartContext from "./cartContext";
import { useState } from "react";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        console.log(itemInfo.price);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    // console.log("totalAmount "+ totalAmount);
    return totalAmount;
  };

  const addToCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };
  const removeFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const updateCartItems = (value, itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: value }));
  };

  const context = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItems,
    getTotalAmount,
  };
  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};
export default CartContextProvider;
