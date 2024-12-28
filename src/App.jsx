import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Sayfa bileşenleri
import User from "./components/user/User";
import { HomePage, ShopPage } from "./pages";
import ProductDetail from "./components/ProductDetail"; // ProductDetail bileşenini import ediyoruz.

function App() {
  return (
    <Switch>
      <Route path="/user" exact>
        <User />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shop" exact>
        <ShopPage />
      </Route>
      <Route path="/product/:id" exact>
        {/* ProductDetail sayfasına yönlendirecek olan Route */}
        <ProductDetail />
      </Route>
    </Switch>
  );
}

export default App;
