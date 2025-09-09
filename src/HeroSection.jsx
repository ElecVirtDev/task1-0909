export default function HeroSection() {
  return (
    <section
      className="ct-hero-section"
      style={{ backgroundImage: "url('./assets/imgs/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="content">
              <h4>너의 비지니스 어쩌구</h4>
              <h2>탁월한 IT 서비스 너를 위한 성공</h2>
              <p>오랜 세월 동안 목말라해옴.</p>
              <div className="h-button vedio">
                <a className="button-1" href="#">
                  Our Services
                </a>
                <div className="video-btn">
                  <a
                    className="video-p-btn"
                    href="https://www.youtube.com/watch?v=kD_Db3TCno0&amp;t=60s"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div
              className="image"
              data-tilt=""
              data-tilt-scale="1.05"
              style={{
                willChange: "transform",
                transform:
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              }}
            >
              <img src="./assets/imgs/rimg01.webp" alt="hero image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
