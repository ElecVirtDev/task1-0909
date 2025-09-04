import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import Swiper from "swiper/bundle";

//CSS 불러오기
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/animate.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/scrollCue.css";
import "./assets/css/spacing.css";
import "./assets/css/responsive.css";

//JS 불러오기
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "./components/js/jquery.waypoints.min.js";
import "./components/js/jquery.counterup.min.js";
import "./components/js/modernizr.min.js";
import "./components/js/mixitup.min.js";
import "./components/js/glightbox.min.js";
import "./components/js/vanilla-tilt.min.js";
import "./components/js/scrollCue.min.js";
import "./components/js/wow.js";
import "./components/js/mobile-menu.js";
import "./components/js/main.js";

//JSX 불러오기
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/task1-0909/">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <App />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
