import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AutoSlideSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // 자동으로 슬라이드를 이동시키는 설정 (3초마다 오른쪽으로 이동)
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000); // 3000ms = 3초

    return () => clearInterval(interval); // 컴포넌트가 언마운트되면 인터벌 정리
  }, []);
};

export default function Testimonials() {
  return (
    <>
      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp animated"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.2s",
                    animationName: "none",
                  }}
                >
                  Success Stories
                </h4>
                <h2
                  className="wow fadeInUp animated"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.4s",
                    animationName: "none",
                  }}
                >
                  What Our Clients Say
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/01.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Jackson Perry</h4>
                  <span>Creative Designer</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/02.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Joan Wallce</h4>
                  <span>Architecture</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/authour-1.jpeg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Amelia Kelly</h4>
                  <span>CEO OF KARON</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/01.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Jackson Perry</h4>
                  <span>Creative Designer</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/02.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Joan Wallce</h4>
                  <span>Architecture</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/authour-1.jpeg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Amelia Kelly</h4>
                  <span>CEO OF KARON</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/01.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Jackson Perry</h4>
                  <span>Creative Designer</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/02.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Joan Wallce</h4>
                  <span>Architecture</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/authour-1.jpeg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>Amelia Kelly</h4>
                  <span>CEO OF KARON</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="sec-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="home-banner2-sec"
                style={{
                  backgroundImage: "url('./assets/imgs/banner2.jpg')",
                }}
              >
                <div className="row">
                  <div className="col-md-8 col-lg-6">
                    <h2
                      className="wow fadeInUp animated"
                      data-wow-delay=".2s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.2s",
                        animationName: "none",
                      }}
                    >
                      Preparing For Your Business Success
                    </h2>
                  </div>
                  <div className="col-md-4 col-lg-6 text-center align-self-center">
                    <a
                      href="#"
                      className="button-1 wow fadeInRight animated"
                      data-wow-delay=".4s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.4s",
                        animationName: "none",
                      }}
                    >
                      Get Started <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 mb-30">
              <div className="ct-section-title text-center">
                <h4
                  className="wow fadeInUp animated"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.2s",
                    animationName: "none",
                  }}
                >
                  Latest Blog
                </h4>
                <h2
                  className="wow fadeInUp animated"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.4s",
                    animationName: "none",
                  }}
                >
                  Latest News &amp; Updates
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-cues="slideInUp" data-disabled="true">
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="https://preetheme.com/html/techpro/single.html">
                    <img src="./assets/imgs/blog1.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>14 Aug 2024</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        How To Build The Ultimate Tech Stack For Growth
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>Admin</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="https://preetheme.com/html/techpro/single.html">
                    <img src="./assets/imgs/blog3.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>14 Aug 2024</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        How To Build And Automate A Referral Program
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>Admin</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="https://preetheme.com/html/techpro/single.html">
                    <img src="./assets/imgs/blog6.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>14 Aug 2024</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="https://preetheme.com/html/techpro/single.html">
                        Data Analysis and the Big Impact on Industry
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>Admin</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
