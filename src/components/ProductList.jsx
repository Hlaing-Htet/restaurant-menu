import React, { useContext } from "react";
import ProductGroup from "./ProductGroup";
import logo from "../images/brand-logo.jpg";
import { MenuContext } from "../App";

const ProductList = ({ products }) => {
  const { handleProductAdd } = useContext(MenuContext);
  return (
    <div className=" w-2/3 mx-auto">
      <div className=" flex justify-center">
        <img src={logo} alt="logo" />
      </div>

      {/* Product group */}
      {products.map((product) => (
        <ProductGroup key={product.id} product={product} />
      ))}
      <button className=" btn btn-sm" onClick={handleProductAdd}>
        Add Product
      </button>
    </div>
  );
};

export default ProductList;
