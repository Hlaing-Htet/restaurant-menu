import React from "react";
import AddForm from "./components/AddForm";
import ProductGroup from "./components/ProductGroup";
import logo from "./images/brand-logo.jpg";
const App = () => {
  return (
    <main className=" bg-gray-100 h-screen">
      <div className="container h-full flex bg-white mx-auto">
        {/* add form */}
        <div className=" w-1/2 p-4">
          <AddForm />
        </div>
        {/* previw UI */}
        <div className="preview w-1/2 flex justify-center p-4">
          <div className=" w-2/3 mx-auto">
            <div className=" flex justify-center">
              <img src={logo} alt="logo" />
            </div>

            {/* Product group */}
            <ProductGroup />
            <ProductGroup />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
