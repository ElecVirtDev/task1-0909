import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import GLightbox from "glightbox";
import Swiper from "swiper/bundle";
import mixitup from "mixitup";

// CSS 불러오기
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/font-awesome-pro.css";
import "animate.css";
import "./assets/css/glightbox.min.css";
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
    new WOW({ live: false }).init();

    // Preloader
    const handlePreloader = () => {
      $(".preloader").fadeOut(800);
    };
    $(window).on("load", handlePreloader);

    // Scroll to Top
    const handleScrollArea = () => {
      const a = $(window).scrollTop();
      if (a > 400) $(".scroll-area").slideDown(300);
      else $(".scroll-area").slideUp(200);
    };
    $(window).on("scroll", handleScrollArea);
    $(".scroll-area").click((e) => {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 700);
    });

    // GLightbox 초기화
    const videoLightbox = GLightbox({
      selector: ".video-p-btn",
      autoplayVideos: true,
    });
    const imageLightbox = GLightbox({ selector: ".image-popup" });

    // CounterUp 초기화
    if ($(".counter").length) {
      $(".counter").counterUp({ delay: 10, time: 2000 });
    }

    // Swiper 슬라이더 초기화
    new Swiper(".ct-hero-slider-full", {
      slidesPerView: 1,
      loop: true,
      speed: 500,
      autoplay: { delay: 5000 },
      pagination: { el: ".hero-slider-dot", clickable: true },
      navigation: { nextEl: ".hero-button-next", prevEl: ".hero-button-prev" },
    });

    new Swiper(".top-slider-tes", {
      slidesPerView: "auto",
      loop: true,
      autoplay: { delay: 1000 },
      spaceBetween: 25,
      freeMode: true,
      freeModeMomentum: false,
    });

    new Swiper(".ct-client-logo-slider", {
      slidesPerView: "auto",
      loop: true,
      autoplay: { delay: 3000 },
      spaceBetween: 25,
    });

    new Swiper(".portfolio-slider-full", {
      slidesPerView: 4,
      loop: true,
      spaceBetween: 15,
      autoplay: true,
      pagination: { el: ".portfolio-slider-dot", clickable: true },
      navigation: {
        nextEl: ".portfolio-button-next",
        prevEl: ".portfolio-button-prev",
      },
      breakpoints: {
        1600: { slidesPerView: 4 },
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
    });

    // MixItUp 포트폴리오 필터링
    const portfolio = document.querySelector(".p-projects-full");
    if (portfolio && !portfolio.mixitup) {
      mixitup(portfolio);
    }

    // Sticky Header
    const handleStickyHeader = () => {
      const scroll = $(window).scrollTop();
      if (scroll < 150) $(".sticky-header").removeClass("sticky");
      else $(".sticky-header").addClass("sticky");
    };
    $(window).on("scroll", handleStickyHeader);

    // Cleanup
    return () => {
      $(window).off("scroll", handleScrollArea);
      $(window).off("scroll", handleStickyHeader);
    };
  }, []);

  return (
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
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/task1-0909/">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
