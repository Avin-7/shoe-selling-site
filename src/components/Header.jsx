import React from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "./Carousel";

function Header() {
  let { link } = useParams();
  return (
    <>
      <div className=" bg-white text-black flex gap-12 justify-end  p-3 text-xl">
        <Link
          className=" px-4 py-1 hover:bg-black hover:rounded-3xl hover:text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" px-4 py-1 hover:bg-black hover:rounded-3xl hover:text-white"
          to="/cart"
        >
          Cart
        </Link>
        <Link
          className="px-4 py-1 hover:bg-black hover:rounded-3xl hover:text-white"
          to="/login"
        >
          Login
        </Link>
        <br />
      </div>
    </>
  );
}

export default Header;
