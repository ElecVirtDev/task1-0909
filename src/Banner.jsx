export default function Banner() {
  return (
    <section
      className="banner-section-1"
      style={{ backgroundImage: "url('./assets/imgs/banner.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="content text-center">
              <div className="ct-section-title text-center">
                <h4>We are IT service Agency</h4>
                <h2>We Provide Exclusive Digital Service</h2>
              </div>
              <a className="button-1" href="#">
                Explore Now <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
