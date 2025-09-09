export default function Footer() {
  return (
    <>
      <footer id="footer" className="site-footer">
        <div
          className="footer-bg-dot"
          style={{
            backgroundImage: "url('./assets/imgs/dot-a-white.png')",
          }}
        ></div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-30">
                <div className="footer-widgets-item">
                  <div className="f-logo">
                    <a href="https://preetheme.com/html/techpro/index.html">
                      <img src="./assets/imgs/white-logo.png" alt="Logo" />
                    </a>
                  </div>
                  <p className="content">
                    딱히 이렇다 할 설명은 없습니다! 설명문에 너무 깊은 의미를
                    두려고 하지 마십시오!!
                  </p>
                  <div className="footer-social">
                    <div className="footer-social">
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
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6 mb-30">
                <div className="footer-widgets-item">
                  <h2>Company</h2>
                  <ul className="menu">
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
              <div className="col-lg-3 col-sm-6 col-6 mb-30">
                <div className="footer-widgets-item">
                  <h2>Community</h2>
                  <ul className="menu">
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
              <div className="col-lg-3 col-sm-6 mb-30">
                <div className="footer-widgets-item">
                  <h2>연락처</h2>
                  <ul className="contact-info">
                    <li>
                      <div className="icon">
                        <i className="fa-sharp fa-regular fa-house"></i>
                      </div>
                      <div className="content">
                        <h4>주소:</h4>
                        <p>대구광역시 동구 신암동 동대구역 근처</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-sharp fa-regular fa-envelope"></i>
                      </div>
                      <div className="content">
                        <h4>이메일 주소:</h4>
                        <p>support@gmail.com</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-regular fa-phone-flip"></i>
                      </div>
                      <div className="content">
                        <h4>전화 번호:</h4>
                        <p>+82-555-123-4455</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-30 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copy-text">
                  <p>
                    Copyright © 2024 TechPro Theme by{" "}
                    <a href="#">CodexUnicTheme</a>
                    <br />
                    LIMITED USE, DO NOT SHARE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="scroll-area"
        style={{
          display: "none",
        }}
      >
        <i className="fa-regular fa-arrow-up"></i>
      </div>
    </>
  );
}
