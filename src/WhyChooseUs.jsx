export default function WhyChooseUs() {
  return (
    <div className="ct-why-choose-us-section section-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30 align-self-center">
            <div
              className="about-img"
              data-tilt=""
              data-tilt-scale="1.05"
              style={{
                willChange: "transform",
                transform:
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              }}
            >
              <img src="./assets/imgs/hero-img-1.png" alt="image" />
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
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div>
                    <div className="icon">
                      <img src="./assets/imgs/browser.png" alt="icon" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>First Growing Process</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div
                  className="ab-info"
                  data-cue="slideInUp"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div>
                    <div className="icon">
                      <img src="./assets/imgs/web-browser.png" alt="icon" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>Clean code</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div
                  className="ab-info"
                  data-cue="slideInUp"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div>
                    <div className="icon">
                      <img src="./assets/imgs/file.png" alt="icon" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>Well Documentation</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
