export default function Skills() {
  return (
    <div className="ct-why-choose-us-section section-padding-2 skts section-bg">
      <div className="container">
        <div className="row">
          {/* 이미지 */}
          <div className="col-lg-6 mb-30 align-self-center">
            <div className="about-img" data-tilt data-tilt-scale="1.05">
              <img src="/assets/imgs/about-2.png" alt="skills" />
            </div>
          </div>

          {/* 텍스트 */}
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
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div className="single-skill-item">
                  <p>
                    Software Development <b>85%</b>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="single-skill-item">
                  <p>
                    Artificial Intelligence <b>80%</b>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="about-btn mt-35">
                <a href="/contact" className="button-1">
                  Contact Us <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* 텍스트 끝 */}
        </div>
      </div>
    </div>
  );
}
