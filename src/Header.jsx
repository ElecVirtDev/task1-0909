export default function Header() {
  return (
    <header className="header sticky-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-5 align-self-center">
            <div className="logo">
              <a href="/">
                <img
                  className="sticky-logo"
                  src="/assets/imgs/logo.png"
                  alt="Logo"
                />
                <img src="/assets/imgs/white-logo.png" alt="white-logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-md-8 col-7">
            <div className="h-right-button">
              <a className="button-1" href="#">
                Get Consultant
              </a>
            </div>
            <div className="menu">
              <nav>
                <ul>
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/">Home 01</a>
                      </li>
                      <li>
                        <a href="/">Home 02</a>
                      </li>
                      <li>
                        <a href="/">Home 03</a>
                      </li>
                    </ul>
                  </li>
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
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
