import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import "bulma/css/bulma.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wraps the whole app with routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
