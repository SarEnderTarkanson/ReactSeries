import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="*" Component={App} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
