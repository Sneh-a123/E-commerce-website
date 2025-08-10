import React from "react";
import Carosel_section from "../component/carosel_section";
import Products from "../layout/Products";


// Parent.jsx
const Parent = () => {
  const products = [{ id: 1, name: "Red Saree", price: 1050 }];

  return (
    <>
      <Carosel_section products={products} />
      <Products products={products} />
    </>
  );
};

export default Parent;