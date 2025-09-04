export default function Counter() {
  return (
    <div className="ct-counter-section">
      <div className="container">
        <div className="ct-cs-full">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mp-0">
              <div className="counter-item" data-tilt>
                <div className="icon">
                  <img src="/assets/imgs/counter-1.png" alt="clients" />
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
              <div className="counter-item" data-tilt>
                <div className="icon">
                  <img src="/assets/imgs/counter-2.png" alt="projects" />
                </div>
                <div className="content">
                  <h2>
                    <span className="counter">36</span>
                    <small>+</small>
                  </h2>
                  <p>Finished Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mp-0">
              <div className="counter-item" data-tilt>
                <div className="icon">
                  <img src="/assets/imgs/counter-3.png" alt="experts" />
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
              <div className="counter-item" data-tilt>
                <div className="icon">
                  <img src="/assets/imgs/counter-4.png" alt="posts" />
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
