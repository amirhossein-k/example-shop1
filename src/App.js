import {createContext, useEffect, useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import axios from "axios";
import SingleProduct from "./pages/singleproduct/SingleProduct";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState();

  // component did mount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const response = res.data;
      setProducts(response);
    });
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<p>Error 404 not found this page</p>} path="*" />
        <Route element={<Products />} path="/product" />
        <Route element={<SingleProduct />} path="/product/:productId" />
      </Routes>
    </ProductContext.Provider>
  );
}

export default App;
