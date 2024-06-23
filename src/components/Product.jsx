import React, { useState, useContext, useEffect } from "react";
import products from "../data";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Filter from "./Filter";
import filterContext from "../context/filterContext";

function Product() {
  const [searchItem, setSearchItem] = useState("");
  const {
    type,
    setType,
    price,
    setPrice,
    popular,
    setPopular,
    color,
    setColor,
    clearSelectedFields,
  } = useContext(filterContext);

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    setType("");
    setPrice(-1);
    setPopular("all");
    setColor("all");
    clearSelectedFields("type");
    clearSelectedFields("price");
  };
  const handleSearch = (product) => {
    if (product.name == searchItem) {
      return <Cards key={product.id} product={product} />;
    } else {
      let itemLowerCase = searchItem.toLowerCase();
      let productNameLowerCase = product.name.toLowerCase();
      if (itemLowerCase == productNameLowerCase) {
        return <Cards key={product.id} product={product} />;
      }
    }
  };
  const handleFilter = () => {
    if (type == "" && price == -1 && popular == "all" && color == "all") {
      if (searchItem == "") {
        return products.map((product) => {
          return <Cards key={product.id} product={product} />;
        });
      } else if (searchItem != "") {
        return products.map((product) => {
          return handleSearch(product);
        });
      }
    } else if (type != "") {
      return products.map((product) => {
        if (product.type == type) {
          return <Cards key={product.id} product={product} />;
        }
      });
    } else if (price != -1) {
      return products.map((product) => {
        if (product.price <= price) {
          return <Cards key={product.id} product={product} />;
        }
      });
    } else if (popular != "all") {
      return products.map((product) => {
        if (product.name == popular) {
          return <Cards key={product.id} product={product} />;
        }
      });
    } else if (color != "all") {
      let count = 0;

      return products.map((product) => {
        if (product.id == products.length && count == 0) {
          return (
            <h1 className=" text-center my-20 " key={product.id}>
              No results found
            </h1>
          );
        }
        if (product.color == color) {
          count = count + 1;

          return <Cards key={product.id} product={product} />;
        }
      });
    }
  };
  return (
    <>
      <div className="">
        <Carousel />
      </div>

      <h1 className=" text-center text-3xl font-bold mt-10 md:text-6xl tracking-wider">
        Products
      </h1>
      <div className="flex gap-0 md:gap-4">
        <div className=" mr-1">
          <Filter />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search products "
            className="rounded-xl outline-none pl-2 lg:pr-40 pr-1 py-2 mt-4 border-t-2 border-l-2 border-b-2 border-r-0 "
            onChange={handleChange}
          />
          <div className="inline p-2 bg-gray-200 rounded-xl border-r-2 border-b-2 border-t-2">
            <ion-icon name="search"></ion-icon>
          </div>
          <div
            className=" mt-18 grid grid-cols-1 sm:grid-cols-2 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-8"
            id="product-div"
          >
            {handleFilter()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
