import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <section
        className="ct-hero-section"
        style="background-image: url('assets/img/hero-bg.jpg');"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="content">
                <h4>EMPOWER YOUR BUSINESS</h4>
                <h2>Excellent IT Services For Your Success</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="h-button vedio">
                  <a className="button-1" href="#">
                    Our Services
                  </a>
                  <div className="video-btn">
                    <a
                      className="video-p-btn"
                      href="https://www.youtube.com/watch?v=kD_Db3TCno0&amp;t=60s"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div
                className="image"
                data-tilt=""
                data-tilt-scale="1.05"
                style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <img src="src/assets/rimg01.webp" alt="hero image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}

      {/* <!-- Start Services Section --> */}
      <section className="section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp  animated"
                  data-wow-delay=".2s"
                  style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                >
                  OUR SERVICES
                </h4>
                <h2
                  className="wow fadeInUp  animated"
                  data-wow-delay=".4s"
                  style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                >
                  Our IT Solutions &amp; Services for <span>Your Business</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-cues="slideInUp" data-disabled="true">
            {/* <!-- Single --> */}
            <div
              className="col-lg-4 col-sm-6 mb-30"
              data-cue="slideInUp"
              data-show="true"
              style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
            >
              <div className="services-card-item">
                <div className="icon">
                  <div className="im hover">
                    <img src="src/assets/icon1.png" alt="Web Development" />
                    <img
                      className="img-hover"
                      src="src/assets/icon1-w.png"
                      alt="Web Development"
                    />
                  </div>
                </div>
                <div className="content">
                  <h2>Web Development</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <a href="https://preetheme.com/html/techpro/services-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div
              className="col-lg-4 col-sm-6 mb-30"
              data-cue="slideInUp"
              data-show="true"
              style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
            >
              <div className="services-card-item">
                <div className="icon">
                  <div className="im hover">
                    <img src="src/assets/icon2.png" alt="Web Development" />
                    <img
                      className="img-hover"
                      src="src/assets/icon2-w.png"
                      alt="Web Development"
                    />
                  </div>
                </div>
                <div className="content">
                  <h2>Cyber Security</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <a href="https://preetheme.com/html/techpro/services-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div
              className="col-lg-4 col-sm-6 mb-30"
              data-cue="slideInUp"
              data-show="true"
              style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
            >
              <div className="services-card-item">
                <div className="icon">
                  <div className="im hover">
                    <img src="src/assets/icon3.png" alt="Web Development" />
                    <img
                      className="img-hover"
                      src="src/assets/icon3-w.png"
                      alt="Web Development"
                    />
                  </div>
                </div>
                <div className="content">
                  <h2>Data Analysis</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <a href="https://preetheme.com/html/techpro/services-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div
              className="col-lg-4 col-sm-6 mb-30"
              data-cue="slideInUp"
              data-show="true"
              style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
            >
              <div className="services-card-item">
                <div className="icon">
                  <div className="im hover">
                    <img src="src/assets/icon4.png" alt="Web Development" />
                    <img
                      className="img-hover"
                      src="src/assets/icon4-w.png"
                      alt="Web Development"
                    />
                  </div>
                </div>
                <div className="content">
                  <h2>UI/UX Designing</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <a href="https://preetheme.com/html/techpro/services-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div
              className="col-lg-4 col-sm-6 mb-30"
              data-cue="slideInUp"
              data-show="true"
              style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
            >
              <div className="services-card-item">
                <div className="icon">
                  <div className="im hover">
                    <img src="src/assets/icon5.png" alt="Web Development" />
                    <img
                      className="img-hover"
                      src="src/assets/icon5-w.png"
                      alt="Web Development"
                    />
                  </div>
                </div>
                <div className="content">
                  <h2>SEO Optimization</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <a href="https://preetheme.com/html/techpro/services-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div
              className="col-lg-4 col-sm-6 mb-30"
              data-cue="slideInUp"
              data-show="true"
              style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
            >
              <div className="services-card-item">
                <div className="icon">
                  <div className="im hover">
                    <img src="src/assets/icon6.png" alt="Web Development" />
                    <img
                      className="img-hover"
                      src="src/assets/icon6-w.png"
                      alt="Web Development"
                    />
                  </div>
                </div>
                <div className="content">
                  <h2>Digital Marketing</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <a href="https://preetheme.com/html/techpro/services-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}

      {/* <!-- Start About Us Section --> */}
      <div className="ct-about-us-section section-padding-2 section-bg counter-bottom-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30 align-self-center">
              <div
                className="about-img"
                data-tilt=""
                data-tilt-scale="1.05"
                style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <img src="src/assets/about.webp" alt="about image" />
              </div>
            </div>
            <div className="col-lg-6 mb-30 align-self-center">
              <div className="content">
                <div className="ct-section-title text-left">
                  <h4>ABOUS US</h4>
                  <h2>Best IT Solution For Your Business Theme</h2>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="row" data-cues="slideInUp" data-disabled="true">
                  <div
                    className="col-sm-6 mb-30"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    <div className="ab-info">
                      <div className="icon">
                        <i className="fa-regular fa-map-location-dot"></i>
                      </div>

                      <div className="info">
                        <h4>Worldwide Services</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 mb-30"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    <div className="ab-info">
                      <div className="icon">
                        <i className="fa-sharp fa-regular fa-headset"></i>
                      </div>
                      <div className="info">
                        <h4>24/7 Support</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="about-btn"
                  data-cues="slideInUp"
                  data-disabled="true"
                >
                  <a
                    href="https://preetheme.com/html/techpro/about.html"
                    className="button-1"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    Learn More <i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End About Us Section --> */}

      {/* <!-- Couter Section --> */}
      <div className="ct-counter-section">
        <div className="container">
          <div className="ct-cs-full">
            <div className="row">
              <div className="col-lg-3 col-sm-6 mp-0">
                <div
                  className="counter-item"
                  data-tilt=""
                  style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
                >
                  <div>
                    <div className="icon">
                      <img src="src/assets/counter-1.png" alt="Image" />
                    </div>
                  </div>
                  <div className="content">
                    <h2>
                      <span className="counter">50</span>
                      <small>+</small>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mp-0">
                <div
                  className="counter-item"
                  data-tilt=""
                  style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
                >
                  <div>
                    <div className="icon">
                      <img src="src/assets/counter-2.png" alt="Image" />
                    </div>
                  </div>
                  <div className="content">
                    <h2>
                      <span className="counter">36</span>
                      <small>+</small>
                    </h2>
                    <p>Finished projects</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mp-0">
                <div
                  className="counter-item"
                  data-tilt=""
                  style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
                >
                  <div>
                    <div className="icon">
                      <img src="src/assets/counter-3.png" alt="Image" />
                    </div>
                  </div>
                  <div className="content">
                    <h2>
                      <span className="counter">21</span>
                      <small>+</small>
                    </h2>
                    <p>Skilled Experts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mp-0">
                <div
                  className="counter-item"
                  data-tilt=""
                  style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
                >
                  <div>
                    <div className="icon">
                      <img src="src/assets/counter-1.png" alt="Image" />
                    </div>
                  </div>
                  <div className="content">
                    <h2>
                      <span className="counter">201</span>
                      <small>+</small>
                    </h2>
                    <p>Media Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Couter Section --> */}

      {/* <!-- Start Why Choose Us Section --> */}
      <div className="ct-why-choose-us-section section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30 align-self-center">
              <div
                className="about-img"
                data-tilt=""
                data-tilt-scale="1.05"
                style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <img src="src/assets/hero-img-1.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 mb-30 align-self-center">
              <div className="content pl-20-992">
                <div className="ct-section-title text-left">
                  <h4>Why Choose Us</h4>
                  <h2>We Create Result-Oriented Dynamic Applications</h2>
                </div>
                <p className="text">
                  Over 25 years working in IT services developing software
                  applications and mobile apps for clients all over the world.
                </p>
                <div
                  className="why-lists"
                  data-cues="slideInUp"
                  data-disabled="true"
                >
                  <div
                    className="ab-info"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    <div>
                      <div className="icon">
                        <img src="src/assets/browser.png" alt="icon" />
                      </div>
                    </div>
                    <div className="info">
                      <h4>First Growing Process</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div
                    className="ab-info"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    <div>
                      <div className="icon">
                        <img src="src/assets/web-browser.png" alt="icon" />
                      </div>
                    </div>
                    <div className="info">
                      <h4>Clean code</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div
                    className="ab-info"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    <div>
                      <div className="icon">
                        <img src="src/assets/file.png" alt="icon" />
                      </div>
                    </div>
                    <div className="info">
                      <h4>Well Documentation</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start Skill Section --> */}
      <div className="ct-why-choose-us-section section-padding-2 skts section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30 align-self-center">
              <div
                className="about-img"
                data-tilt=""
                data-tilt-scale="1.05"
                style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <img src="src/assets/about-2.png" alt="about image" />
              </div>
            </div>
            <div className="col-lg-6 mb-30 align-self-center order-first">
              <div className="content">
                <div className="ct-section-title text-left">
                  <h4>SKILLSETS</h4>
                  <h2>We Have the Hottest Skills to Hire For in 2024</h2>
                </div>
                <p className="text">
                  Over 25 years working in IT services developing software
                  applications and mobile apps for clients all over the world.
                </p>

                <div className="skill-list">
                  <div className="single-skill-item">
                    <p>
                      Cyber Security <b>95%</b>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="95"
                    >
                      <div
                        className="progress-bar progress-bar-striped bg-danger wow"
                        style="width: 95%; background-color: rgb(21, 38, 255) !important; visibility: visible; animation-name: animate;"
                      ></div>
                    </div>
                  </div>
                  <div className="single-skill-item">
                    <p>
                      Software Development <b>85%</b>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="85"
                    >
                      <div
                        className="progress-bar progress-bar-striped bg-danger wow"
                        style="width: 85%; visibility: visible; animation-name: animate;"
                      ></div>
                    </div>
                  </div>
                  <div className="single-skill-item">
                    <p>
                      Artificial Intelligence <b>80%</b>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="80"
                    >
                      <div
                        className="progress-bar progress-bar-striped bg-danger wow"
                        style="width: 80%; background-color: rgb(255, 176, 0) !important; visibility: visible; animation-name: animate;"
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  className="about-btn mt-35"
                  data-cues="slideInUp"
                  data-disabled="true"
                >
                  <a
                    href="https://preetheme.com/html/techpro/contact.html"
                    className="button-1"
                    data-cue="slideInUp"
                    data-show="true"
                    style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                  >
                    Contact Us <i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Skill Section --> */}

      {/* <!-- Start Portfolio Section  --> */}
      <div className="portfolio-cate-section section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30 align-self-center">
              <div className="ct-section-title text-left">
                <h4
                  className="wow fadeInUp"
                  data-wow-delay=".2s"
                  style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                >
                  SELECTED PROJECTS
                </h4>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                >
                  Digital Case <span>Studies.</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="portfolio-cate-list-full mb-40 text-right">
                <ul>
                  <li data-filter="all" className="mixitup-control-active">
                    All
                  </li>
                  <li data-filter=".cloud">Cloud</li>
                  <li data-filter=".data">Data Analaysis</li>
                  <li data-filter=".mobile">Mobile Apps</li>
                  <li data-filter=".technology">Technology</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row p-projects-full portF" id="MixItUpB20995">
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-30 mix data">
              <div
                className="portfolio-item-single"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <div
                  className="thumbnail"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <img src="src/assets/p-1.png" alt="portfolio" />
                </div>
                <div
                  className="zoom-icon"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <a
                    className="image-popup"
                    data-gallery="portfolio1"
                    href="https://preetheme.com/html/techpro/assets/img/portfolio/p-1.png"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div
                  className="content"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <h2>
                    <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                      Effective Solutions
                    </a>
                  </h2>
                  <strong>Data Analaysis</strong>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-30 mix cloud mobile">
              <div
                className="portfolio-item-single"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <div
                  className="thumbnail"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <img src="src/assets/p-2.png" alt="portfolio" />
                </div>
                <div
                  className="zoom-icon"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <a
                    className="image-popup"
                    data-gallery="portfolio1"
                    href="https://preetheme.com/html/techpro/assets/img/portfolio/p-2.png"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div
                  className="content"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <h2>
                    <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                      Effective Solutions
                    </a>
                  </h2>
                  <strong>Data Analaysis</strong>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-30 mix technology">
              <div
                className="portfolio-item-single"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <div
                  className="thumbnail"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <img src="src/assets/p-3.png" alt="portfolio" />
                </div>
                <div
                  className="zoom-icon"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <a
                    className="image-popup"
                    data-gallery="portfolio1"
                    href="https://preetheme.com/html/techpro/assets/img/portfolio/p-3.png"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div
                  className="content"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <h2>
                    <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                      Effective Solutions
                    </a>
                  </h2>
                  <strong>Data Analaysis</strong>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-30 mix mobile">
              <div
                className="portfolio-item-single"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <div
                  className="thumbnail"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <img src="src/assets/p-4.png" alt="portfolio" />
                </div>
                <div
                  className="zoom-icon"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <a
                    className="image-popup"
                    data-gallery="portfolio1"
                    href="https://preetheme.com/html/techpro/assets/img/portfolio/p-4.png"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div
                  className="content"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <h2>
                    <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                      Effective Solutions
                    </a>
                  </h2>
                  <strong>Data Analaysis</strong>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-30 mix cloud">
              <div
                className="portfolio-item-single"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <div
                  className="thumbnail"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <img src="src/assets/p-5.png" alt="portfolio" />
                </div>
                <div
                  className="zoom-icon"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <a
                    className="image-popup"
                    data-gallery="portfolio1"
                    href="https://preetheme.com/html/techpro/assets/img/portfolio/p-5.png"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div
                  className="content"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <h2>
                    <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                      Effective Solutions
                    </a>
                  </h2>
                  <strong>Data Analaysis</strong>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-30 mix data">
              <div
                className="portfolio-item-single"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <div
                  className="thumbnail"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <img src="src/assets/p-6.png" alt="portfolio" />
                </div>
                <div
                  className="zoom-icon"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <a
                    className="image-popup"
                    data-gallery="portfolio1"
                    href="https://preetheme.com/html/techpro/assets/img/portfolio/p-6.png"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div
                  className="content"
                  data-cue="slideInUp"
                  data-show="true"
                  style="animation-name: slideInUp; animation-duration: 500ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;"
                >
                  <h2>
                    <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                      Effective Solutions
                    </a>
                  </h2>
                  <strong>Data Analaysis</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Portfolio Section  --> */}

      {/* <!-- Start Banner Section --> */}
      <section
        className="banner-section-1"
        style="background-image: url('assets/img/banner.jpg')"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content text-center">
                <div className="ct-section-title text-center">
                  <h4
                    className="wow fadeInUp"
                    data-wow-delay=".2s"
                    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                  >
                    We are IT service Agency
                  </h4>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                  >
                    We Provide Exclusive Digital Service
                  </h2>
                </div>
                <a
                  className="button-1 wow fadeInUp"
                  data-wow-delay=".4s"
                  href="#"
                  style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                >
                  Explore Now <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Section --> */}

      {/* <!-- Start Team Member --> */}
      <section className="section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp  animated"
                  data-wow-delay=".2s"
                  style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                >
                  Meet the Expert People
                </h4>
                <h2
                  className="wow fadeInUp  animated"
                  data-wow-delay=".4s"
                  style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                >
                  Our Professional Expert <span>Team Members</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-cues="slideInUp" data-disabled="true">
            <div className="col-lg-3 col-sm-6 mb-30" data-cue="slideInUp">
              <div className="team-card-single">
                <div className="thumb">
                  <img src="src/assets/team8.png" alt="image" />
                  <div className="social">
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="content">
                  <p>Founder-CO</p>
                  <br />
                  <h4>Leslie Alexander</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30" data-cue="slideInUp">
              <div className="team-card-single">
                <div className="thumb">
                  <img src="src/assets/team7.jpg" alt="image" />
                  <div className="social">
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="content">
                  <p>Product Designer</p>
                  <br />
                  <h4>Emma Davis</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30" data-cue="slideInUp">
              <div className="team-card-single">
                <div className="thumb">
                  <img src="src/assets/team6.jpg" alt="image" />
                  <div className="social">
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="content">
                  <p>Solution Developer</p>
                  <br />
                  <h4>Maurice Craig</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30" data-cue="slideInUp">
              <div className="team-card-single">
                <div className="thumb">
                  <img src="src/assets/team5.jpg" alt="image" />
                  <div className="social">
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="content">
                  <p>Designer</p>
                  <br />
                  <h4>Pulak Nondi</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Member --> */}

      {/* <!-- Start Testimonial Area --> */}
      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp animated"
                  data-wow-delay=".2s"
                  style="visibility: hidden; animation-delay: 0.2s; animation-name: none;"
                >
                  Success Stories
                </h4>
                <h2
                  className="wow fadeInUp animated"
                  data-wow-delay=".4s"
                  style="visibility: hidden; animation-delay: 0.4s; animation-name: none;"
                >
                  What Our Clients Say
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-auto-slider-sec">
          <div className="top-slider-tes swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode">
            <div
              className="swiper-wrapper"
              style="transition-duration: 0ms; transform: translate3d(-2212px, 0px, 0px);"
              id="swiper-wrapper-a2a4c1363ef1077f8"
              aria-live="off"
            >
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="0"
                style="margin-right: 25px;"
                role="group"
                aria-label="1 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/01.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Jackson Perry</h4>
                      <span>Creative Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="1"
                style="margin-right: 25px;"
                role="group"
                aria-label="2 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/02.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Joan Wallace</h4>
                      <span>Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="2"
                style="margin-right: 25px;"
                role="group"
                aria-label="3 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/authour-1.jpeg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Amelia Kelly</h4>
                      <span>CEO OF KARON</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="3"
                style="margin-right: 25px;"
                role="group"
                aria-label="4 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/01.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Adrian Parody</h4>
                      <span>Creative Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div
                className="swiper-slide"
                data-swiper-slide-index="0"
                style="margin-right: 25px;"
                role="group"
                aria-label="5 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/01.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Jackson Perry</h4>
                      <span>Creative Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div
                className="swiper-slide swiper-slide-prev"
                data-swiper-slide-index="1"
                style="margin-right: 25px;"
                role="group"
                aria-label="6 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/02.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Joan Wallace</h4>
                      <span>Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div
                className="swiper-slide swiper-slide-active"
                data-swiper-slide-index="2"
                style="margin-right: 25px;"
                role="group"
                aria-label="7 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/authour-1.jpeg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Amelia Kelly</h4>
                      <span>CEO OF KARON</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single --> */}
              <div
                className="swiper-slide swiper-slide-next"
                data-swiper-slide-index="3"
                style="margin-right: 25px;"
                role="group"
                aria-label="8 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/01.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Adrian Parody</h4>
                      <span>Creative Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="0"
                style="margin-right: 25px;"
                role="group"
                aria-label="9 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/01.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Jackson Perry</h4>
                      <span>Creative Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="1"
                style="margin-right: 25px;"
                role="group"
                aria-label="10 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/02.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Joan Wallace</h4>
                      <span>Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="2"
                style="margin-right: 25px;"
                role="group"
                aria-label="11 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/authour-1.jpeg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Amelia Kelly</h4>
                      <span>CEO OF KARON</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="3"
                style="margin-right: 25px;"
                role="group"
                aria-label="12 / 12"
              >
                <div className="testimonial-card">
                  <div className="rating-a">
                    <div className="quote">
                      <i className="fa-sharp fa-light fa-ditto"></i>
                    </div>
                    <div className="rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      {/* <!-- <i className="fa-regular fa-star"></i> --> */}
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="t-btm">
                    <div className="thum">
                      <img src="src/assets/01.jpg" alt="icon" />
                    </div>
                    <div className="r-name">
                      <h4>Adrian Parody</h4>
                      <span>Creative Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Area --> */}

      {/* <!-- Start Banner Section --> */}
      <div className="sec-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="home-banner2-sec"
                style="background-image: url('assets/img/banner2.jpg')"
              >
                <div className="row">
                  <div className="col-md-8 col-lg-6">
                    <h2
                      className="wow fadeInUp animated"
                      data-wow-delay=".2s"
                      style="visibility: hidden; animation-delay: 0.2s; animation-name: none;"
                    >
                      Preparing For Your Business Success
                    </h2>
                  </div>
                  <div className="col-md-4 col-lg-6 text-center align-self-center">
                    <a
                      href="#"
                      className="button-1 wow fadeInRight animated"
                      data-wow-delay=".4s"
                      style="visibility: hidden; animation-delay: 0.4s; animation-name: none;"
                    >
                      Get Started <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Banner Section --> */}
      {/* <!-- Start Blog Section --> */}
      <section className="section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp animated"
                  data-wow-delay=".2s"
                  style="visibility: hidden; animation-delay: 0.2s; animation-name: none;"
                >
                  Latest Blog
                </h4>
                <h2
                  className="wow fadeInUp animated"
                  data-wow-delay=".4s"
                  style="visibility: hidden; animation-delay: 0.4s; animation-name: none;"
                >
                  Latest News &amp; Updates
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-cues="slideInUp" data-disabled="true">
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="https://preetheme.com/html/techpro/single.html">
                    <img src="src/assets/blog1.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>14 Aug 2024</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        How To Build The Ultimate Tech Stack For Growth
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>Admin</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="https://preetheme.com/html/techpro/single.html">
                    <img src="src/assets/blog3.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>14 Aug 2024</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        How To Build And Automate A Referral Program
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>Admin</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="https://preetheme.com/html/techpro/single.html">
                    <img src="src/assets/blog6.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>14 Aug 2024</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        Data Analysis and the Big Impact on Industry
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>Admin</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blog Section --> */}
    </>
  );
}

export default App;
