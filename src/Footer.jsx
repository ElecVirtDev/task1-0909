export default function Footer() {
  return (
    <footer className="site-footer footer section-padding">
      <div className="container">
        <div className="row">
          {/* 푸터 로고 */}
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="f-logo">
              <img src="./assets/imgs/logo.png" alt="Logo" />
              <p>
                TechPro – IT Solutions &amp; Business Services Multipurpose
                Template.
              </p>
            </div>
          </div>

          {/* 푸터 링크 */}
          <div className="col-lg-2 col-md-6 mb-30">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* 서비스 */}
          <div className="col-lg-3 col-md-6 mb-30">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Cyber Security</a>
              </li>
              <li>
                <a href="#">Data Analysis</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">SEO Optimization</a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="col-lg-3 col-md-6 mb-30">
            <h4>Contact Info</h4>
            <p>123 Tech Street, Seoul, Korea</p>
            <p>Email: info@techpro.com</p>
            <p>Phone: +82 10-1234-5678</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>© {new Date().getFullYear()} TechPro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
