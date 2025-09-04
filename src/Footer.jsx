import { useState } from "react";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="footer">
        {/* <!-- Footer Start --> */}
        <footer class="site-footer">
          <div
            class="footer-bg-dot"
            style="background-image: url('assets/img/dot-a-white.png')"
          ></div>
          <div class="footer-top">
            <div class="container">
              <div class="row">
                {/* <!-- Singel Item --> */}
                <div class="col-lg-3 col-sm-6 mb-30">
                  <div class="footer-widgets-item">
                    <div class="f-logo">
                      <a href="https://preetheme.com/html/techpro/index.html">
                        <img src="src/assets/white-logo.png" alt="Logo" />
                      </a>
                    </div>
                    <p class="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse sit commodi adipisci, asperiores illum excepturi
                      quidem fuga aliquam fugit laudantium!
                    </p>
                    <div class="footer-social">
                      <div class="footer-social">
                        <span>
                          <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
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
                            <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Singel Item --> */}
                <div class="col-lg-3 col-sm-6 col-6 mb-30">
                  <div class="footer-widgets-item">
                    <h2>Company</h2>
                    <ul class="menu">
                      <li>
                        <a href="#">Company Profile</a>
                      </li>
                      <li>
                        <a href="#">Help Center</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Team Members</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Singel Item --> */}
                <div class="col-lg-3 col-sm-6 col-6 mb-30">
                  <div class="footer-widgets-item">
                    <h2>Community</h2>
                    <ul class="menu">
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Leadership</a>
                      </li>
                      <li>
                        <a href="#">Press &amp; Media</a>
                      </li>
                      <li>
                        <a href="#">Projects</a>
                      </li>
                      <li>
                        <a href="#">Marketing Services</a>
                      </li>
                      <li>
                        <a href="#">Challenge Of Project</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Singel Item --> */}
                <div class="col-lg-3 col-sm-6 mb-30">
                  <div class="footer-widgets-item">
                    <h2>Contact Info</h2>
                    <ul class="contact-info">
                      <li>
                        <div class="icon">
                          <i class="fa-sharp fa-regular fa-house"></i>
                        </div>
                        <div class="content">
                          <h4>Address:</h4>
                          <p>5919 Trussville Crossings Pkwy, Birmingham</p>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <i class="fa-sharp fa-regular fa-envelope"></i>
                        </div>
                        <div class="content">
                          <h4>Email:</h4>
                          <p>support@gmail.com</p>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <i class="fa-regular fa-phone-flip"></i>
                        </div>
                        <div class="content">
                          <h4>Phone:</h4>
                          <p>+456 123 4455</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Bottom --> */}
          <div class="footer-bottom pt-30 pb-30">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="copy-text">
                    <p>
                      Copyright © 2024 TechPro Theme by{" "}
                      <a href="#">CodexUnicTheme</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer End --> */}

        <div class="scroll-area" style="display: none;">
          <i class="fa-regular fa-arrow-up"></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
