import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";

function Cards({ product }) {
  const { cartItems, addToCart } = useContext(cartContext);
  const cartItemsAmount = cartItems[product.id];
  return (
    <div className=" mt-20">
      <Card className=" bg-transparent rounded-none" style={{ width: "14rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          className=" h-48 object-cover"
        />
        <Card.Body className="">
          <Card.Title>{product.name}</Card.Title>
          <p>{product.desc}</p>
          <Card.Text>Price : ${product.price}</Card.Text>
          <Button
            variant="primary"
            className="hover:bg-zinc-700 text-sm mr-4 bg-neutral-900 text-white border-0"
            onClick={(e) => addToCart(product.id)}
          >
            Add to cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}
          </Button>
          <Link to={`/products/${product.id}`}>
            <Button className="text-sm absolute right-4 bg-neutral-900 text-white border-0 hover:bg-zinc-700">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
