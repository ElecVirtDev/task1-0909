export default function WhyChooseUs() {
  return (
    <div className="ct-why-choose-us-section section-padding-2">
      <div className="container">
        <div className="row">
          {/* 이미지 */}
          <div className="col-lg-6 mb-30 align-self-center">
            <div className="about-img" data-tilt data-tilt-scale="1.05">
              <img src="./assets/imgs/hero-img-1.png" alt="why choose us" />
            </div>
          </div>

          {/* 텍스트 */}
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

              <div className="why-lists">
                <div className="ab-info">
                  <div className="icon">
                    <img src="./assets/imgs/browser.png" alt="process" />
                  </div>
                  <div className="info">
                    <h4>First Growing Process</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="ab-info">
                  <div className="icon">
                    <img src="./assets/imgs/web-browser.png" alt="clean code" />
                  </div>
                  <div className="info">
                    <h4>Clean Code</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="ab-info">
                  <div className="icon">
                    <img src="./assets/imgs/file.png" alt="docs" />
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
          {/* 텍스트 끝 */}
        </div>
      </div>
    </div>
  );
}
