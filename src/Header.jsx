export default function Header() {
  return (
    <>
      <header id="header" className="header sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-5 align-self-center">
              <div className="logo">
                <a href="https://github.com/elecvirtdev">
                  <img
                    className="sticky-logo"
                    src="./assets/imgs/logo.png"
                    alt="Logo"
                  />
                  <img src="./assets/imgs/white-logo.png" alt="white-logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-7">
              <div className="h-right-button">
                <a
                  className="button-1"
                  href="https://elecvirtdev.github.io/task2-0909/"
                >
                  제2의 과제 가보기
                </a>
              </div>

              <div className="menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#">홈</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">페이지 소개</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#services">제공하는 서비스</a>
                        </li>
                        <li>
                          <a href="#about">우리가 누굽니까?</a>
                        </li>
                        <li>
                          <a href="#whychooseus">
                            이 프로그래머를 택해야 하는 이유
                          </a>
                        </li>
                        <li>
                          <a href="#skills">ㅁㄴㅇㄹ</a>
                        </li>
                        <li>
                          <a href="#portf">ㅁㄴㅇㄹ</a>
                        </li>
                        <li>
                          <a href="#banner">ㅁㄴㅇㄹ</a>
                        </li>
                        <li>
                          <a href="#team">ㅁㄴㅇㄹ</a>
                        </li>
                        <li>
                          <a href="#testimo">사람들의 평가</a>
                        </li>
                        <li>
                          <a href="#blog">최근 소식들</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
