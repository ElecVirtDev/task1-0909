export default function Portfolio() {
  return (
    <div className="portfolio-cate-section section-padding-2">
      <div className="container">
        <div className="row">
          {/* 제목 */}
          <div className="col-lg-6 mb-30 align-self-center">
            <div className="ct-section-title text-left">
              <h4>SELECTED PROJECTS</h4>
              <h2>
                Digital Case <span>Studies.</span>
              </h2>
            </div>
          </div>

          {/* 카테고리 필터 */}
          <div className="col-lg-6 align-self-center">
            <div className="portfolio-cate-list-full mb-40 text-right">
              <ul>
                <li data-filter="all" className="mixitup-control-active">
                  All
                </li>
                <li data-filter=".cloud">Cloud</li>
                <li data-filter=".data">Data Analysis</li>
                <li data-filter=".mobile">Mobile Apps</li>
                <li data-filter=".technology">Technology</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 프로젝트 리스트 */}
        <div className="row p-projects-full">
          <div className="col-lg-4 col-md-6 col-12 mb-30 mix data">
            <div className="portfolio-item-single">
              <div className="thumbnail">
                <img src="./assets/imgs/imgs/p-1.png" alt="portfolio" />
              </div>
              <div className="zoom-icon">
                <a
                  className="image-popup"
                  href="./assets/imgs/imgs/p-1.png"
                  data-gallery="portfolio1"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
              <div className="content">
                <h2>
                  <a href="/portfolio-details">Effective Solutions</a>
                </h2>
                <strong>Data Analysis</strong>
              </div>
            </div>
          </div>

          {/* 프로젝트 카드 패턴 반복 */}
          <div className="col-lg-4 col-md-6 col-12 mb-30 mix cloud mobile">
            <div className="portfolio-item-single">
              <div className="thumbnail">
                <img src="./assets/imgs/imgs/p-2.png" alt="portfolio" />
              </div>
              <div className="zoom-icon">
                <a
                  className="image-popup"
                  href="./assets/imgs/imgs/p-2.png"
                  data-gallery="portfolio1"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
              <div className="content">
                <h2>
                  <a href="/portfolio-details">Effective Solutions</a>
                </h2>
                <strong>Cloud, Mobile</strong>
              </div>
            </div>
          </div>

          {/* 추가 포트폴리오 카드도 동일 구조로 반복 */}
        </div>
      </div>
    </div>
  );
}
