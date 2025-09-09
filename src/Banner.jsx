export default function Banner() {
  return (
    <section
      id="banner"
      className="banner-section-1"
      style={{
        backgroundImage: "url('./assets/imgs/banner.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="content text-center">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  우리들도 손님입니다
                </h4>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  우리들은 공부해서 취업할 것입니다
                </h2>
              </div>
              <a
                className="button-1 wow fadeInUp"
                data-wow-delay=".4s"
                href="#"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                살펴보기 <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
