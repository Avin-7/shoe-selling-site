import React, { useContext } from "react";
import CartCard from "./CartCard";
import products from "../data";
import Button from "react-bootstrap/Button";
import cartContext from "../context/cartContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, getTotalAmount } = useContext(cartContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-4 gap-x-11 ml-14">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            console.log(cartItems[product.id]);
            return (
              <CartCard
                key={product.id}
                cartItemsAmount={cartItems[product.id]}
                product={product}
              />
            );
          } else {
            console.log(cartItems[product.id]);
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="container">
          <h1>Subtotal : ${totalAmount}</h1>
          <Button
            variant="primary"
            className=" bg-blue-600 rounded-md mr-6 text-md"
            onClick={(e) => navigate("/")}
          >
            continue shopping
          </Button>
          <Button variant="primary" className=" bg-blue-600 rounded-md text-md">
            checkout
          </Button>
        </div>
      ) : (
        <h1 className="flex  justify-center align-middle">
          Your cart is empty
        </h1>
      )}
    </>
  );
}

export default Cart;
