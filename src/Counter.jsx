export default function Counter() {
  return (
    <div className="ct-counter-section">
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
                    <span className="counter">50</span>
                    <small>+</small>
                  </h2>
                  <p>Happy Clients</p>
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
                    <span className="counter">36</span>
                    <small>+</small>
                  </h2>
                  <p>Finished projects</p>
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
                    <span className="counter">21</span>
                    <small>+</small>
                  </h2>
                  <p>Skilled Experts</p>
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
                    <span className="counter">201</span>
                    <small>+</small>
                  </h2>
                  <p>Media Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
