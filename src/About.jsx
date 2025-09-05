export default function About() {
  return (
    <div className="ct-about-us-section section-padding-2 section-bg counter-bottom-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30 align-self-center">
            <div className="about-img" data-tilt data-tilt-scale="1.05">
              <img src="./assets/imgs/about.webp" alt="about" />
            </div>
          </div>
          <div className="col-lg-6 mb-30 align-self-center">
            <div className="content">
              <div className="ct-section-title text-left">
                <h4>ABOUT US</h4>
                <h2>Best IT Solution For Your Business Theme</h2>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="row">
                <div className="col-sm-6 mb-30">
                  <div className="ab-info">
                    <div className="icon">
                      <i className="fa-regular fa-map-location-dot"></i>
                    </div>
                    <div className="info">
                      <h4>Worldwide Services</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-30">
                  <div className="ab-info">
                    <div className="icon">
                      <i className="fa-sharp fa-regular fa-headset"></i>
                    </div>
                    <div className="info">
                      <h4>24/7 Support</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-btn">
                <a href="/about" className="button-1">
                  Learn More <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
