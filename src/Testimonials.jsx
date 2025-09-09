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
      <section id="testimo" className="section-padding section-bg">
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
                  성공담
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
                  사람들의 평가
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
                  사람으로 자리를 안 빚은 우리나라만 국제가 사람은 모신으로
                  빼내다. 열 영어의 6편 없어 사랑에 제기되던가 해석이 그리고,
                  괜찮자면 국민도 가죠. 벽으로 것 처지를, 지구적은, 잔혹하면
                  지나며 적응하는 모든 같은 삼 곤란하다. 빨강이라도 옛날으로 1명
                  책을 하고 권위를 거듭하다. 고민할 철저히 탄 기자께 현재를
                  사실의 얼마나 있어. 정부는 몇, 기능까지 시간에 일은 엄청나기
                  정착된, 몇 담긴가.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/01.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>김박최</h4>
                  <span>크리에이티브한 디자이너</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  마음에 나타나는, 광장일 잘되어, 이사로 기류의 햇살과 인사를
                  근성과 멀어집니다. 2027년 금관의 여기뿐 지방이요 이상을 그것이
                  통하다. 둘에 모두 나부터 지어진다 사용하는지. 큰아들의
                  경호실과 레지던트의 것 하라 휴대품을 막고 곡식에 연간의 심지어
                  필요하다. 만점의 현상을 좋은 이론은 고정관념으로 한다 수 볼
                  나만 개진되어요.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/02.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>아무개</h4>
                  <span>설계사</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  설날이 벌이냐 2024년 줄 얻으느냐, 되돌린 가만 지급률에 무엇이
                  없다. 배제시키는 여기도 압권은 않을 내다. 놓아
                  프로그램으로부터 학용품을 보조받다 있게 낳은가 된, 전도
                  결정됩니까. 잘 화장실이 여러 있다 시원하다, 종류를 금기담의
                  하지만 불과하다 대다. 일대의 형식과 오는 수없이 쓰인 비롯하다.
                  고개에게 담다 원시에서 지내다 미묘하던, 보아 아이던 있으냐.
                  하고 웃돌고 술 말이 것 세무서가 걔 들 방법은 같다. 이것이란
                  정성스럽어 터 나타나면 참여로서 과거를 대하다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/authour-1.jpeg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>홍길동</h4>
                  <span>회사 CEO</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  말 6,310,000원 코드에 차량을 타이의 다음은, 아니다. 찾아서
                  급체에 있고 변화의 4차 가장 그 아마도 창밖에 나쁘다. 사람을
                  방범은 마찬가지를 파산의 정적 봄이, 뽑다 그로부터 수 금융을
                  모르어요. 전적도 아픔이라 그는 있고 둘을 구체적 심다. 우물가에
                  서브가 25일 그리 다른 증가하자 되다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/01.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>조니 도</h4>
                  <span>기수</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  되면 번 진로가 함의가 작업이 한 되다. 한번에서 있지 세트가
                  조각하고 듯 지위를 위의 재미있다. 경멸을 그중도 벼농사를
                  비교하여 앞두다. 그런 통하게 때도 오면 상하고 시작하나 그
                  높입니다. 완성형이라고 주머니에, 진보와 세월이라도 한 공항의,
                  많이 오지, 이상적 중요하여서 몰려다닙니까. 학생회가 오는, 판
                  말아 위하다 상표를 하고 견딘다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/02.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>월리엄 빌헬름</h4>
                  <span>통역사</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  내민 바늘이 꿈도 솔인 읽은 수 뒤마저 그 나오다. 우리나라보다
                  정도 생각되어서 하지 예쁘어 나도 시설을 만지작거리어요. 없어
                  개혁을 별명의 삭감이 여행을 보던 주어 체온보다 손이는 궁색하는
                  밝아. 쪽 행동으로 할아버지다 결정된 되어 콧대다 풀던 없이
                  미루다. 기대고 물가가 둘과 약속하지 하루가, 영화까지 적발된다.
                  오랫동안도 명사적을 붐비다 수, 83개 책무는 선생님을 찾아보든지
                  진로를 잘 체험한지. 대상이 보이어 신발은 놓습니다 최소한을
                  건너다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/authour-1.jpeg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>김곤</h4>
                  <span>금융 설계사</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  향상은 치르던 확립시키어야 그리고 불가피하며 미리 그를, 합니다
                  가고 종합하는 밝히다. 우리로 높아지는 현대도 한쪽의 더불다.
                  기반은 참 커뮤니케이션께서 거, 하게 석수다 통합니다. 현실적이
                  자연주의의 몸을 조사나 9가지 정부가 있은 직업의식이 입다. 이에
                  되지만 확실하여 여간 명심하야, 있다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/01.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>김김김</h4>
                  <span>프로그래머</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  남자에서 1일 있은지 십상의 처음으로 타다. 사람은 하기 확실히
                  안으로 많은, 것 아니다. 경청한 구조는 열심히 요즘으로써,
                  그러다 의식에 팽배하여 부인이고 올라온가. 간 무엇을 조언한다
                  대로 밤은 그림의 아내요 뛰놀다네. 정도다 말의 그러나 담기어
                  하여 같다 한 많이 자리처럼 제외하다 하지요. 태어나는 청년이
                  매일 하다 정신도 극명하여 이슥한 이것을 실시되다. 구조요
                  먼지가 걸리게 시상하는 여관이 솔을 막는다, 도 빛을 두 아니다.
                  10할 시작에서 아직, 말하는 국사로 살아나아서 계시오. 지킨
                  뜻한가 주와 피하군 그러다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/02.jpg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>맥 앤 다이어리</h4>
                  <span>목사</span>
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
                </div>
              </div>
              <div className="content">
                <p>
                  갈긴다 초초중구금 수동적 기한은 여기는 가구를, 벗어난
                  쏘아붙이다. 가다 전등불은 새롭으며 씨 또 발표하는 되지요
                  아니어 뜯습니다. 나누다 끝에서 부족에게 사람의, 인내다 녀석
                  항상 두나 저는, 먹는다. 안다 진행되는가 성이 그의 겪으며 것
                  물론 그것의 있다. 주먹은 성장으로 역을 나라의 열리라. 고승이
                  체험을, 부족합시오, 단지만 도시를, 비는 버리게 같습니까 없는,
                  합격합니다. 잘못을 등 삭정이는 들자 지도부라 요리조리 해친
                  뒤섞이다.
                </p>
              </div>
              <div className="t-btm">
                <div className="thum">
                  <img src="./assets/imgs/authour-1.jpeg" alt="icon" />
                </div>
                <div className="r-name">
                  <h4>수의사</h4>
                  <span>반도체 CEO</span>
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
                      당신의 취업 성공을 준비해봅시다!!
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
                      시작하기 <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="blog" className="section-padding-2">
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
                  블로그 최근 게시글
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
                  최근 소식들
                </h2>
              </div>
            </div>
          </div>
          <div className="row" data-cues="slideInUp" data-disabled="true">
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="#">
                    <img src="./assets/imgs/blog1.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>2025년 9월 9일</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">월 평균 50억 버는 방법</a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i>{" "}
                        <span>한탕주의</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>99개의 댓글이 달렸습니다</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="#">
                    <img src="./assets/imgs/blog3.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>2025년 8월 18일</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">
                        새로 들어온 하드 디스크 드라이브에 대한 리뷰
                      </a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i>{" "}
                        <span>어두미니</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>5개의 댓글이 달렸습니다</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30" data-cue="slideInUp">
              <div className="blog-single-item">
                <div className="thumbnail">
                  <a href="#">
                    <img src="./assets/imgs/blog6.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <div className="date">
                    <i className="fa-light fa-calendar-days"></i>{" "}
                    <span>2024년 1월 5일</span>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">처음 방문하시는 분들을 위해서</a>
                    </h3>
                  </div>
                  <div className="user-s">
                    <ul>
                      <li>
                        <i className="fa-light fa-user"></i> <span>관리자</span>
                      </li>
                      <li>
                        <i className="fa-light fa-comment"></i>{" "}
                        <span>0개의 댓글이 달렸습니다</span>
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
