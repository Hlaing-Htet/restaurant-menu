import React from "react";

const AddForm = () => {
  return (
    <form>
      <div className="form-control  w-full max-w-xs">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control  w-full max-w-xs">
        <label className="label">
          <span className="label-text">Product Price</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Cagatory</span>
        </label>
        <select className="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <button className=" mt-5 btn btn-primary">Save</button>
    </form>
  );
};

export default AddForm;
