import React from "react";
import "./App.css";
import BestsellerProducts from "./components/BestsellerProducts";
import ProductsOfWeek from "./components/ProductsOfWeek";
import FeaturedProducts from "./components/FeaturedProducts";
import Navbar from "./layout/Navbar";
import Clients from "./components/Clients";
import BestServices from "./components/BestServices";

function App() {
  return (
    <div className="">
      <BestsellerProducts />
      <ProductsOfWeek />
      <FeaturedProducts />
      <Navbar />
      <Clients />
      <BestServices />
    </div>
  );
}

export default App;
