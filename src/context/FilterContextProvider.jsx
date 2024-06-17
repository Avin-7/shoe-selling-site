import React, { useState } from "react";
import filterContext from "./filterContext";
import products from "../data";
import Cards from "../components/Cards";
const FilterContextProvider = ({ children }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState(-1);
  const [popular, setPopular] = useState("all");
  const [color, setColor] = useState("all");

  const clearSelectedFields = (cname) => {
    if (cname == "radio") {
      let ele = document.getElementsByClassName(cname);
      for (let i in ele) {
        if (ele[i].checked) {
          ele[i].checked = false;
          console.log(ele + "unchekced");
        }
      }
    } else {
      let ele = document.getElementsByClassName(cname);
      if (cname == "type") {
        for (let i in ele) {
          if (ele[i].checked) {
            ele[i].checked = false;
          }
        }
      } else if (cname == "price") {
        for (let i in ele) {
          if (ele[i].checked) {
            ele[i].checked = false;
          }
        }
      }
    }
  };

  // const shoeTypeHandler = () => {
  //   if (type != "") {
  //     return products.map((product) => {
  //       if (product.type == type) {
  //         return <Cards key={product.id} product={product} />;
  //       }
  //     });
  //   }
  // };
  const context = {
    type,
    setType,
    price,
    setPrice,
    popular,
    setPopular,
    color,
    setColor,
    clearSelectedFields,
  };

  return (
    <filterContext.Provider value={context}>{children}</filterContext.Provider>
  );
};
export default FilterContextProvider;
