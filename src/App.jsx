import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import User from "./components/user/User";
import { HomePage, ShopPage } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/user">
        <User />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
    </Switch>
  );
}

export default App;
