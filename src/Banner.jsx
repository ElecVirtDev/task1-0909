export default function Banner() {
  return (
    <section
      className="banner-section-1"
      style={{
        backgroundImage: "url('./assets/img/banner.jpg')",
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
                  We are IT service Agency
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
                  We Provide Exclusive Digital Service
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
                Explore Now <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
