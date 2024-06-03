import React from "react";
import products from "../data";
import Cards from "./Cards";
import Carousel from "./Carousel";

function Product() {
  return (
    <>
      <div className="">
        <Carousel />
      </div>
      <h1 className=" text-center text-6xl font-bold mt-32 tracking-wider">Products</h1>
      <div className=" mt-24 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 place-items-center">
        {products.map((product) => {
          return <Cards key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Product;
