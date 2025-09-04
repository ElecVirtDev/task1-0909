export default function Team() {
  return (
    <section className="section-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
            <div className="ct-section-title text-center">
              <h4>Meet the Expert People</h4>
              <h2>
                Our Professional Expert <span>Team Members</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* 팀 카드 */}
          <div className="col-lg-3 col-sm-6 mb-30">
            <div className="team-card-single">
              <div className="thumb">
                <img src="/assets/imgs/team8.png" alt="Leslie Alexander" />
                <div className="social">
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="content">
                <p>Founder-CO</p>
                <h4>Leslie Alexander</h4>
              </div>
            </div>
          </div>

          {/* 나머지 팀원도 같은 구조 반복 */}
        </div>
      </div>
    </section>
  );
}
