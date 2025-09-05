export default function Services() {
  return (
    <section className="section-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
            <div className="ct-section-title text-center">
              <h4>OUR SERVICES</h4>
              <h2>
                Our IT Solutions &amp; Services for <span>Your Business</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Service Card */}
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="services-card-item">
              <div className="icon">
                <div className="im hover">
                  <img src="./assets/imgs/icon1.png" alt="Web Development" />
                  <img
                    className="img-hover"
                    src="./assets/imgs/icon1-w.png"
                    alt="Web Development"
                  />
                </div>
              </div>
              <div className="content">
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <a href="/services-details">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Card */}
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="services-card-item">
              <div className="icon">
                <div className="im hover">
                  <img src="./assets/imgs/icon2.png" alt="Cyber Security" />
                  <img
                    className="img-hover"
                    src="./assets/imgs/icon2-w.png"
                    alt="Cyber Security"
                  />
                </div>
              </div>
              <div className="content">
                <h2>Cyber Security</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <a href="/services-details">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Card */}
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="services-card-item">
              <div className="icon">
                <div className="im hover">
                  <img src="./assets/imgs/icon3.png" alt="Data Analysis" />
                  <img
                    className="img-hover"
                    src="./assets/imgs/icon3-w.png"
                    alt="Data Analysis"
                  />
                </div>
              </div>
              <div className="content">
                <h2>Data Analysis</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <a href="/services-details">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* 나머지 3개 서비스도 동일한 패턴으로 추가 */}
        </div>
      </div>
    </section>
  );
}
