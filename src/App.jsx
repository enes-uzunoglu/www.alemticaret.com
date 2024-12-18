import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
/*React-Toastify-Css*/
import "react-toastify/dist/ReactToastify.css";
import { PrimaryLayout } from "./layout";
import { LoginForm } from "./components";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <PrimaryLayout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
