import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { PrimaryLayout } from "./layout";
import { LoginForm } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <LoginForm />
          <PrimaryLayout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
