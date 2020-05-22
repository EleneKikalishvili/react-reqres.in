import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthProtected from "./context/authContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProtected>
      <App />
    </AuthProtected>
  </React.StrictMode>,
  document.getElementById("root")
);
