import React from "react";
import ProductRow from "./ProductRow";
const PoductGroup = () => {
  return (
    <div className=" text-black mt-4">
      <div className="flex justify-between  text-lg font-bold ">
        <h2>Fresh Juice</h2>
        <h2>Price</h2>
      </div>
      <ProductRow />
      <ProductRow />
    </div>
  );
};

export default PoductGroup;
