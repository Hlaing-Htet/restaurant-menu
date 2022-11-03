import React, { createContext, useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const sampleProducts = [
  {
    id: 1,
    name: "Latte",
    price: "4000",
    category: 1,
  },
  {
    id: 2,
    name: "Apple Ju",
    price: "5000",
    category: 1,
  },
  {
    id: 3,
    name: "Orange Ju",
    price: "6000",
    category: 1,
  },
  {
    id: 4,
    name: "Apple Cake",
    price: "4000",
    category: 2,
  },
];
export const categories = [
  {
    id: 1,
    name: "Drinks",
  },
  {
    id: 2,
    name: "Cake",
  },
  {
    id: 3,
    name: "Pizza ",
  },
];
const STORE_KEY = "menuapp.products";
export const MenuContext = createContext();

const App = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [showError, setShowError] = useState(false);

  const menuContextValue = {
    handleProductDelete,
    handleProductAdd,
    handleProductSelect,
    handleProductDataChange,
  };
  useEffect(() => {
    let productsJSON = localStorage.getItem(STORE_KEY);
    if (productsJSON !== null) {
      setProducts(JSON.parse(productsJSON));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(products));
  }, [products]);

  const [selectedProductId, setSelectedProductId] = useState();
  const selectedProduct = products.find(
    (product) => product.id == selectedProductId
  );
  function handleProductSelect(id) {
    setSelectedProductId(id);
  }

  function handleProductAdd() {
    const newProduct = {
      id: uuid(),
      name: "",
      price: "",
      category: "",
    };
    setProducts([...products, newProduct]);
    setSelectedProductId(newProduct.id);
  }

  function handleProductDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
    setShowError(true);
    setTimeout(() => setShowError(false), 1500);
  }

  function handleProductDataChange(id, productData) {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id == id);
    newProducts[productIndex] = productData;
    setProducts(newProducts);
  }

  return (
    <MenuContext.Provider value={menuContextValue}>
      <main className=" text-gray-700 bg-gray-100 ">
        <div className="container min-h-screen flex bg-white mx-auto">
          {/* add form */}
          <div className=" w-1/2 p-4 flex justify-center">
            {selectedProduct && (
              <ProductForm selectedProduct={selectedProduct} />
            )}
          </div>
          {/* previw UI */}
          <div className="preview w-1/2 flex justify-center p-4">
            <ProductList products={products} />
          </div>
        </div>
      </main>
      {showError && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error">
            <div>
              <span>Product deleted 🗑</span>
            </div>
          </div>
        </div>
      )}
    </MenuContext.Provider>
  );
};

export default App;
