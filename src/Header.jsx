import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <!-- Preloader --> */}
      <div class="preloader" style="display: none;">
        <div class="loading-container">
          <div class="loading"></div>
          <div id="loading-icon">
            <img src="src/favicon.png" alt="TechPro" />
          </div>
        </div>
      </div>

      {/* <!-- Header --> */}
      <header class="header sticky-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-5 align-self-center">
              <div class="logo">
                <a href="https://preetheme.com/html/techpro/index.html">
                  <img
                    class="sticky-logo"
                    src="src/assets/logo.png"
                    alt="Logo"
                  />
                  <img src="src/assets/white-logo.png" alt="white-logo" />
                </a>
              </div>
            </div>
            <div class="col-lg-10 col-md-8 col-7">
              <div class="h-right-button">
                <a class="button-1" href="#">
                  Get Consultant
                </a>
              </div>

              {/* <!-- Menu --> */}
              <div class="canvas_open_full">
                <div class="canvas_open">
                  <a href="javascript:void(0)">
                    <i class="fa-sharp fa-solid fa-bars-staggered"></i>
                  </a>
                </div>
              </div>
              <div class="menu">
                <nav>
                  <ul>
                    <li class="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="https://preetheme.com/html/techpro/index.html">
                            Home 01
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index2.html">
                            Home 02
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index3.html">
                            Home 03
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index4.html">
                            Home 04
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index5.html">
                            Home 05
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index1-dark.html">
                            Home 01 Dark
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index2-dark.html">
                            Home 02 Dark
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index3-dark.html">
                            Home 03 Dark
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index4-dark.html">
                            Home 04 Dark
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index5-dark.html">
                            Home 05 Dark
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/index-onepage.html">
                            One Page Demo
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/about.html">
                        About Us
                      </a>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Services</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="https://preetheme.com/html/techpro/services.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/services-details.html">
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Portfolio</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="https://preetheme.com/html/techpro/portfolio.html">
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/portfolio-2-columns.html">
                            Portfolio 2 Columns
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                            Portfolio Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Page</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="https://preetheme.com/html/techpro/team.html">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/pricing-plan.html">
                            Pricing &amp; Plans
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/pricing-plan2.html">
                            Pricing &amp; Plans 2
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/testimonial.html">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/faq.html">
                            Faq
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/404.html">
                            404 Error
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/terms-conditions.html">
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/privacy-policy.html">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="https://preetheme.com/html/techpro/blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/blog-standard.html">
                            Blog Standard
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/blog-3-columns.html">
                            Blog Three Columns
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/blog-left-sidebar.html">
                            Blog Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="https://preetheme.com/html/techpro/single.html">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="mobile-menu-area">
        {/* <!--offcanvas menu area start--> */}
        <div class="off_canvars_overlay"></div>
        <div class="offcanvas_menu">
          <div class="offcanvas_menu_wrapper">
            <div class="canvas_close">
              <a href="javascript:void(0)">
                <i class="bi bi-x-lg"></i>
              </a>
            </div>
            <div class="mobile-logo">
              <a href="https://preetheme.com/html/techpro/index.html">
                <img src="src/assets/logo.png" alt="Logo" />
              </a>
            </div>
            <div id="menu" class="text-left ">
              <ul class="offcanvas_main_menu">
                <li class="menu-item-has-children">
                  <span class="menu-expand">
                    <i class="fa fa-angle-down"></i>
                  </span>
                  <a href="https://preetheme.com/html/techpro/index.html">
                    Home
                  </a>
                  <ul class="sub-menu" style="display: none;">
                    <li>
                      <a href="https://preetheme.com/html/techpro/index.html">
                        Home 01
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index2.html">
                        Home 02
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index3.html">
                        Home 03
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index4.html">
                        Home 04
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index5.html">
                        Home 05
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index1-dark.html">
                        Home 01 Dark
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index2-dark.html">
                        Home 02 Dark
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index3-dark.html">
                        Home 03 Dark
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index4-dark.html">
                        Home 04 Dark
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index5-dark.html">
                        Home 05 Dark
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/index-onepage.html">
                        One Page Demo
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://preetheme.com/html/techpro/about.html">
                    About Us
                  </a>
                </li>
                <li class="menu-item-has-children">
                  <span class="menu-expand">
                    <i class="fa fa-angle-down"></i>
                  </span>
                  <a href="https://preetheme.com/html/techpro/services.html">
                    Services
                  </a>
                  <ul class="sub-menu" style="display: none;">
                    <li>
                      <a href="https://preetheme.com/html/techpro/services.html">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/services-details.html">
                        Services Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <span class="menu-expand">
                    <i class="fa fa-angle-down"></i>
                  </span>
                  <a href="https://preetheme.com/html/techpro/portfolio.html">
                    Portfolio
                  </a>
                  <ul class="sub-menu" style="display: none;">
                    <li>
                      <a href="https://preetheme.com/html/techpro/portfolio.html">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/portfolio-2-columns.html">
                        Portfolio 2 Columns
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/portfolio-details.html">
                        Portfolio Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <span class="menu-expand">
                    <i class="fa fa-angle-down"></i>
                  </span>
                  <a href="#">Page</a>
                  <ul class="sub-menu" style="display: none;">
                    <li>
                      <a href="https://preetheme.com/html/techpro/team.html">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/pricing-plan.html">
                        Pricing &amp; Plans
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/pricing-plan2.html">
                        Pricing &amp; Plans 2
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/testimonial.html">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/faq.html">
                        Faq
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/404.html">
                        404 Error
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/terms-conditions.html">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/privacy-policy.html">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <span class="menu-expand">
                    <i class="fa fa-angle-down"></i>
                  </span>
                  <a href="https://preetheme.com/html/techpro/blog.html">
                    Blog
                  </a>
                  <ul class="sub-menu" style="display: none;">
                    <li>
                      <a href="https://preetheme.com/html/techpro/blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/blog-standard.html">
                        Blog Standard
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/blog-3-columns.html">
                        Blog Three Columns
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/blog-left-sidebar.html">
                        Blog Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://preetheme.com/html/techpro/contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Section --> */}
    </>
  );
}

export default Header;
