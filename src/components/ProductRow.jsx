import React, { useContext } from "react";
import { MenuContext } from "../App";
const ProductRow = ({ product }) => {
  const { handleProductDelete, handleProductSelect } = useContext(MenuContext);
  return (
    <div className="collapse-title text-xl font-medium">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <div className=" flex text-lg font-normal justify-between ">
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
          </div>
        </div>
        <div className="collapse-content">
          <button
            onClick={() => handleProductSelect(product.id)}
            className="btn btn-primary btn-xs mr-1"
          >
            Edit
          </button>
          <button
            onClick={() => handleProductDelete(product.id)}
            className="btn btn-error btn-xs"
          >
            Del
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
