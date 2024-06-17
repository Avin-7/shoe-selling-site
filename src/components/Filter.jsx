import React, { useState, useContext } from "react";
import filterContext from "../context/filterContext";

function Filter() {
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

  const shoeTypeHandler = (e) => {
    clearSelectedFields("price");
    setPrice(-1);
    setColor("all");
    setPopular("all");
    setType(e.target.id);
  };

  const shoePriceHandler = (e) => {
    clearSelectedFields("type");
    setColor("all");
    setPopular("all");
    setType("");
    setPrice(Number(e.target.id));
  };
  const shoeColorHandler = (e) => {
    clearSelectedFields("radio");
    setPopular("all");
    setType("");
    setPrice(-1);
    setColor(e.target.value);
  };
  const popularShoeHandler = (e) => {
    clearSelectedFields("radio");
    setType("");
    setPrice(-1);
    setColor("all");
    setPopular(e.target.value);
  };
  const handleClearFilters = () => {
    clearSelectedFields("radio");
    setType("");
    setPrice(-1);
    setColor("all");
    setPopular("all");
  };
  return (
    <div>
      <aside className="ml-3 mt-32 float-left w-52 h-96 ">
        <div className=" ">
          <h2 className=" text-lg font-bold">Type</h2>
          <input
            type="radio"
            id="high-top"
            name="type"
            className="type radio"
            value="High top"
            onClick={(e) => shoeTypeHandler(e)}
          />
          <label htmlFor="high-top"> High Top</label>
          <br />
          <input
            type="radio"
            id="low-top"
            name="type"
            className="type radio"
            value="Low top"
            onClick={(e) => shoeTypeHandler(e)}
          />
          <label htmlFor="low-top"> Low Top</label>
          <br />
        </div>
        <div>
          <br />
          <h2 className="text-lg font-bold">Price</h2>
          <input
            type="radio"
            value="1000"
            id="1000"
            name="price"
            className="price radio"
            onClick={(e) => shoePriceHandler(e)}
          />
          <label htmlFor="1000">1000</label>
          <br />
          <input
            type="radio"
            value="2500"
            id="2500"
            name="price"
            className="price radio"
            onClick={(e) => shoePriceHandler(e)}
          />
          <label htmlFor="2500">2500</label>
          <br />
          <input
            type="radio"
            value="5000"
            id="5000"
            name="price"
            className="price radio"
            onClick={(e) => shoePriceHandler(e)}
          />
          <label htmlFor="5000">5000</label>
          <br />
        </div>
        <div>
          <br />
          <h2 className="text-lg font-bold">Popular</h2>
          <input
            type="button"
            value="Atom"
            className="hover:shadow-4xl hover:bg-gray-200 outline-none border p-2  w-14 rounded-xl popular"
            onClick={(e) => popularShoeHandler(e)}
          />
          <input
            type="button"
            value="Wave"
            className="hover:shadow-4xl hover:bg-gray-200 outline-none border p-2 w-14 rounded-xl popular"
            onClick={(e) => popularShoeHandler(e)}
          />
        </div>
        <div>
          <br />
          <h2 className="text-lg font-bold">Color</h2>
          <input
            type="button"
            value="red"
            className=" m-1 hover:shadow-4xl hover:bg-gray-200 outline-none border p-2  w-14 rounded-xl color"
            onClick={(e) => shoeColorHandler(e)}
          />
          <input
            type="button"
            value="white"
            className="hover:shadow-4xl hover:bg-gray-200 outline-none border p-2  w-14 rounded-xl color"
            onClick={(e) => shoeColorHandler(e)}
          />
          <input
            type="button"
            value="blue"
            className="hover:shadow-4xl hover:bg-gray-200 outline-none border p-2  w-14 rounded-xl color"
            onClick={(e) => shoeColorHandler(e)}
          />
          <input
            type="button"
            value="black"
            className="hover:shadow-4xl hover:bg-gray-200 outline-none border p-2  w-14 rounded-xl color"
            onClick={(e) => shoeColorHandler(e)}
          />
        </div>
        <button
          className="ml-24 rounded-lg p-2 bg-slate-300 text-black "
          onClick={(e) => handleClearFilters()}
        >
          Clear
        </button>
      </aside>
    </div>
  );
}

export default Filter;
