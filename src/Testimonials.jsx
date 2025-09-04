export default function Testimonials() {
  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
            <div className="ct-section-title text-center">
              <h4>Success Stories</h4>
              <h2>What Our Clients Say</h2>
            </div>
          </div>
        </div>
      </div>

      {/* 슬라이더 대신 카드 예시 */}
      <div className="testimonial-auto-slider-sec">
        <div className="testimonial-card">
          <div className="rating-a">
            <div className="quote">
              <i className="fa-sharp fa-light fa-ditto"></i>
            </div>
            <div className="rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </div>
          </div>
          <div className="content">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="t-btm">
            <div className="thum">
              <img src="./assets/imgs/01.jpg" alt="client" />
            </div>
            <div className="r-name">
              <h4>Jackson Perry</h4>
              <span>Creative Designer</span>
            </div>
          </div>
        </div>

        {/* 다른 후기 카드들도 반복 */}
      </div>
    </section>
  );
}
