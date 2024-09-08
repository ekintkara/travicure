import React from "react"; // React'i ekle
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './i18n.jsx'; // i18n desteğini ekliyoruz

// React 18'de render işlemi createRoot ile yapılır.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
