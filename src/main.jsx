import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/task1-0909/">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
