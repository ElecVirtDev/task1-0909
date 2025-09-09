export default function Skills() {
  return (
    <div
      id="skills"
      className="ct-why-choose-us-section section-padding-2 skts section-bg"
    >
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
              <img src="./assets/imgs/about-2.png" alt="about image" />
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
                      className="progress-bar progress-bar-striped wow"
                      style={{
                        width: "95%",
                        visibility: "visible",
                        animationName: "animate",
                      }}
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
                      style={{
                        width: "85%",
                        visibility: "visible",
                        animationName: "animate",
                      }}
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
                      className="progress-bar progress-bar-striped bg-warning wow"
                      style={{
                        width: "80%",
                        visibility: "visible",
                        animationName: "animate",
                      }}
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
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  Contact Us <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
