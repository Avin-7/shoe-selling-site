import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data";
import Button from "react-bootstrap/esm/Button";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";
function ProductInfo() {
  const { productId } = useParams();
  const product = products.filter((product) => product.id == productId);
  const { cartItems, addToCart } = useContext(cartContext);
  console.log(product);
  const cartItemsAmount = cartItems[product[0].id];
  return (
    <div>
      {product &&
        product.map((i) => {
          return (
            <div
              key={i.id}
              className=" flex gap-12  justify-center align-middle text-2xl"
            >
              <div>
                <img
                  className=" h-60 w-64 object-cover"
                  src={i.image}
                  alt="product_image"
                />
              </div>
              <div>
                <h1 className="mb-4">{i.name}</h1>
                <h2>{i.desc}</h2>
                <h2 className="mb-4">{i.price}$</h2>
                <Button
                  variant="primary"
                  id={product.id}
                  className="mt-4 mr-4 hover:bg-zinc-700 text-sm bg-neutral-900 text-white border-0"
                  onClick={(e) => addToCart(product[0].id)}
                >
                  Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
                </Button>
                <Button className="mt-4 hover:bg-zinc-700 text-sm mr-4 bg-neutral-900 text-white border-0">Buy</Button>
                <Link to="/">
                  <Button className="mt-4 text-sm"> Continue shopping </Button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductInfo;
