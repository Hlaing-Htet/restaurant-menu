import React, { useContext } from "react";
import { MenuContext, categories } from "../App";

const ProductForm = ({ selectedProduct }) => {
  const { handleProductDataChange } = useContext(MenuContext);
  const handleInputChange = (e) => {
    handleProductDataChange(selectedProduct.id, {
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className=" w-2/3">
      <div className="form-control  w-full ">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input text-gray-400 input-bordered w-full "
          value={selectedProduct.name}
          onChange={handleInputChange}
          name="name"
        />
      </div>
      <div className="form-control  w-full ">
        <label className="label">
          <span className="label-text">Product Price</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          className="input text-gray-400 input-bordered w-full "
          value={selectedProduct.price}
          onChange={handleInputChange}
          name="price"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Cagatory</span>
        </label>
        <select
          name="category"
          value={selectedProduct.category}
          onChange={(e) => {
            handleProductDataChange(selectedProduct.id, {
              ...selectedProduct,
              [e.target.name]: parseInt(e.target.value),
            });
          }}
          className="select text-gray-400 select-bordered select-sm w-full "
        >
          <option disabled>Who shot first?</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              selected={category.id == selectedProduct.category}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button className=" bg-gray-700 hover:bg-gray-600 mt-5 btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default ProductForm;
