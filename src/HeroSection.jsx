export default function HeroSection() {
  return (
    <section
      id="herosec"
      className="ct-hero-section"
      style={{ backgroundImage: "url('./assets/imgs/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="content">
              <h4>
                템플릿 사이트에서 소스 긁어다가 Vite 및 React로 이식, 스킨
                커스터마이징을.
              </h4>
              <h2>과제 제출용, 포트폴리오용입니다.</h2>
              <p>
                헤더 2개 가지고도 설명이 안 되어서 추가로 무언가를 설명하기 위한
                문장.
              </p>
              <div className="h-button vedio">
                <a className="button-1" href="#services">
                  서비스 살펴보기
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
