import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { PrimaryLayout } from "./layout";
import User from "./components/user/User";

function App() {
  return (
    <Switch>
      <Route path="/user">
        <User />
      </Route>

      <Route path="/">
        <PrimaryLayout />
      </Route>
    </Switch>
  );
}

export default App;
