import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WOW from "wow.js";

// CSS 불러오기
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/font-awesome-pro.css";
import "animate.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/scrollCue.css";
import "./assets/css/spacing.css";
import "./assets/css/responsive.css";
import "./assets/css/main.css";

// JS 불러오기
import "./components/js/jquery-3.6.3.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/js/mixitup.min.js";
import "./components/js/glightbox.min.js";
import "./components/js/jquery.waypoints.min.js";
import "./components/js/jquery.counterup.min.js";
import "./components/js/vanilla-tilt.min.js";
import "./components/js/mobile-menu.js";
//import "./components/js/main.js";

// JSX 불러오기
import Preloader from "./Preloader";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import Counter from "./Counter";
import WhyChooseUs from "./WhyChooseUs";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Banner from "./Banner";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    // WOW.js 초기화
    const wow = new WOW({
      live: false,
    });
    wow.init();

    // scrollCue 초기화
    import("scrollcue")
      .then((ScrollCue) => {
        const scrollCue = new ScrollCue.default(); // ES6 모듈에서 default로 가져오기
        console.log("scrollCue has been initialized");
      })
      .catch((error) => {
        console.error("Error loading scrollCue:", error);
      });

    // main.js 파일을 동적으로 import
    import("./components/js/main.js")
      .then(() => {
        console.log("main.js has been loaded");
      })
      .catch((error) => {
        console.error("Error loading main.js:", error);
      });
  }, []);
};

// React DOM 렌더링
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/task1-0909/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Preloader />
              <Header />
              <HeroSection />
              <Services />
              <About />
              <Counter />
              <WhyChooseUs />
              <Skills />
              <Portfolio />
              <Banner />
              <Team />
              <Testimonials />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
