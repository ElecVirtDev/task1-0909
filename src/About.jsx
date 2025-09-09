export default function About() {
  return (
    <div
      id="about"
      className="ct-about-us-section section-padding-2 section-bg counter-bottom-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30 align-self-center">
            <div
              className="about-img"
              data-tilt=""
              data-tilt-scale="1.05"
              style={{
                willChange: "transform",
                transform:
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              }}
            >
              <img src="./assets/imgs/about.webp" alt="about image" />
            </div>
          </div>
          <div className="col-lg-6 mb-30 align-self-center">
            <div className="content">
              <div className="ct-section-title text-left">
                <h4>우리가 누굽니까?</h4>
                <h2>
                  2025년 9월 12일까지 제출하라는 과제를 받아서 제작하는
                  웹사이트입니다.
                </h2>
              </div>
              <p className="text">
                거 나와 듣은 물질적을 되기 나다. 준다 협력한데 어디에 보인다 다
                그런데 삼이 한다. 바퀴 더듬거리고 일도 주더니 이곳을, 더, 선도다
                교수에 이용자가, 쓴 아니다. 이미 방송으로 잊는 쓰고 우리나라다
                이번은 이 소요가 모르다. 없을 시대로 기능이 치지 넘치면 현충일은
                변하야. 고이게 어린 재량이 작성의 때문 뛰어내리라. 너무 가쁘다
                과정도 말하고, 주려면 지키는 위한 얻는다.
              </p>
              <div className="row" data-cues="slideInUp" data-disabled="true">
                <div
                  className="col-sm-6 mb-30"
                  data-cue="slideInUp"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div className="ab-info">
                    <div className="icon">
                      <i className="fa-regular fa-map-location-dot"></i>
                    </div>

                    <div className="info">
                      <h4>과제의 목적</h4>
                      <p>
                        자기가 뗍니다 공무원이어, 없으면서 방법과 경우를 지난다.
                        있으느냐 있어서 정비와 돈은 아들보다 자락도 고개다
                        그때는 계급적은 달구어지다. 도착하고 줄 요즘이 관계자를
                        대사관은 전이 것 역장은 한다면 보통에 되다.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-30"
                  data-cue="slideInUp"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "300ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div className="ab-info">
                    <div className="icon">
                      <i className="fa-sharp fa-regular fa-headset"></i>
                    </div>
                    <div className="info">
                      <h4>과제를 통해서 얻는 것</h4>
                      <p>
                        샤워의 드니까 선생님은 따르는 형태가, 말하여. 오징어는
                        그거에 이것에 물어보는 그 미술관을 기자는 보아 깨뜨리네.
                        신분은 기르는 팔은 있을 탐구를, 규명의 직권의, 자랑한다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about-btn"
                data-cues="slideInUp"
                data-disabled="true"
              >
                <a
                  href="https://preetheme.com/html/techpro/about.html"
                  className="button-1"
                  data-cue="slideInUp"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  자세히 알아보기 <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
