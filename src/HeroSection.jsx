export default function HeroSection() {
  return (
    <section
      className="ct-hero-section"
      style={{ backgroundImage: "url('/assets/imgs/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="content">
              <h4>EMPOWER YOUR BUSINESS</h4>
              <h2>Excellent IT Services For Your Success</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="h-button vedio">
                <a className="button-1" href="#">
                  Our Services
                </a>
                <div className="video-btn">
                  <a
                    className="video-p-btn"
                    href="https://www.youtube.com/watch?v=kD_Db3TCno0&t=60s"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="image" data-tilt data-tilt-scale="1.05">
              <img src="/assets/imgs/rimg01.webp" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
