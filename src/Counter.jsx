export default function Counter() {
  return (
    <div id="counter" className="ct-counter-section">
      <div className="container">
        <div className="ct-cs-full">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mp-0">
              <div
                className="counter-item"
                data-tilt=""
                style={{
                  willChange: "transform",
                  transform:
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <div>
                  <div className="icon">
                    <img src="./assets/imgs/counter-1.png" alt="Image" />
                  </div>
                </div>
                <div className="content">
                  <h2>
                    <span className="counter">99</span>
                    <small>+</small>
                  </h2>
                  <p>광경하는 사람들의 수</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mp-0">
              <div
                className="counter-item"
                data-tilt=""
                style={{
                  willChange: "transform",
                  transform:
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <div>
                  <div className="icon">
                    <img src="./assets/imgs/counter-2.png" alt="Image" />
                  </div>
                </div>
                <div className="content">
                  <h2>
                    <span className="counter">32</span>
                    <small>+</small>
                  </h2>
                  <p>완수한 프로젝트 수</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mp-0">
              <div
                className="counter-item"
                data-tilt=""
                style={{
                  willChange: "transform",
                  transform:
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <div>
                  <div className="icon">
                    <img src="./assets/imgs/counter-3.png" alt="Image" />
                  </div>
                </div>
                <div className="content">
                  <h2>
                    <span className="counter">50</span>
                    <small>+</small>
                  </h2>
                  <p>갖고 있는 경험의 가짓수</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mp-0">
              <div
                className="counter-item"
                data-tilt=""
                style={{
                  willChange: "transform",
                  transform:
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <div>
                  <div className="icon">
                    <img src="./assets/imgs/counter-1.png" alt="Image" />
                  </div>
                </div>
                <div className="content">
                  <h2>
                    <span className="counter">999</span>
                    <small>+</small>
                  </h2>
                  <p>그 동안 먹어왔던 빵의 개수</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
