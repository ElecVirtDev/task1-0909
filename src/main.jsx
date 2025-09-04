import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./js/modernizr.min.js";
import "./js/jquery-3.6.3.min.js";
import "./js/popper.min.js";
import "./js/mixitup.min.js";
import "./js/glightbox.min.js";
import "./js/jquery.waypoints.min.js";
import "./js/jquery.counterup.min.js";
import "./js/vanilla-tilt.min.js";
import "./js/swiper-bundle.js";
import "./js/scrollCue.min.js";
import "./js/wow.js";
import "./js/mobile-menu.js";
import "./js/main.js";
import "./assets/css/index.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/task1-0909/">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
