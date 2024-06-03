import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import Card from "react-bootstrap/Card";

function CartCard({ cartItemsAmount, product }) {
  const { updateCartItems, addToCart, removeFromCart } =
    useContext(cartContext);
  return (
    <div className=" w-52 rounded-xl">
      {/* <div className="flex">
        <div className=" pl-20">
          <img className=" w-40 rounded-xl" src={product.image} alt="" />
        </div>
        <div className=" text-black py-12 px-14">
          <h1 className="text-2xl ">{product.name}</h1>
          <h2 className="text-xl">{product.price}</h2>
          <button className=" " onClick={() => addToCart(product.id)}>
            +
          </button>
          <input
            type="text"
            id={product.id}
            value={cartItemsAmount}
            onChange={(e) =>
              updateCartItems(Number(e.target.value), product.id)
            }
            className=" text-black w-10"
          />
          <button
            className=" text-black  text-lg"
            onClick={() => removeFromCart(product.id)}
          >
            -
          </button>
        </div>
      </div> */}
      <Card className=" m-4" style={{ width: "14rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          className=" h-48 object-cover"
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price : ${product.price}</Card.Text>
          <button className=" " onClick={() => addToCart(product.id)}>
            +
          </button>
          <input
            type="text"
            id={product.id}
            value={cartItemsAmount}
            onChange={(e) =>
              updateCartItems(Number(e.target.value), product.id)
            }
            className=" text-black w-10"
          />
          <button
            className=" text-black  text-lg"
            onClick={() => removeFromCart(product.id)}
          >
            -
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CartCard;
