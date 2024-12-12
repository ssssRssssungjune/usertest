// 라이브러리 및 스타일 임포트
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/common/css/IntroSwiperNew.css";
import { useState } from "react";
import InnerSwiperSecondPage  from './IntroSwiperSecondPage';

function IntroSwiper() {
  const mainSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);
 
  // 슬라이드 데이터 배열
  const firstSlidesData = [
    {
      id: "slide1",
      video: "/assets/videos/oceanload.mp4",
      slogan: "Welcome to Slrklhi Hotel",
      description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment.",
      sloganClass: "intro_Slogan",
      descriptionClass: "intro_description",
    },
    {
      id: "slide2",
      video: "/assets/videos/city_inside1.mp4",
      slogan: "Modern Comforts, Natural Escapes",
      description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment.",
      sloganClass: "intro_Slogan2",
      descriptionClass: "intro_description2",
    },
    {
      id: "slide3",
      video: "/assets/videos/city_lettering_view.mp4",
      slogan: "",
      description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment.",
      sloganClass: "",
      descriptionClass: "intro_description3",
    },
    {
      id: "slide4",
      video: "/assets/videos/city_night2.mp4",
      slogan: "Urban Sophistication, Coastal Tranquility",
      description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment.",
      sloganClass: "intro_Slogan4",
      descriptionClass: "intro_description4",
    },
    {
      id: "slide5",
      video: "/assets/videos/city_fly_view.mp4",
      slogan: "Urban Sophistication, Coastal Tranquility",
      description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment.",
      sloganClass: "intro_Slogan5",
      descriptionClass: "intro_description5",
    },
  ];
const navigateToSlide = (index) => {
  if (mainSwiperRef.current) {
    mainSwiperRef.current.slideTo(index);
  }
};
return (
  <div style={{ height: "100vh", width: "100%" }}>
    {/* 고정 콘텐츠 */}
    <div id="fixed-elements" style={{ zIndex: 1100 }}>
      <div className="intro_hotel_logo logo2">
        <Link to="/reservation">SlrklhiHotel</Link>
      </div>
      <div className="intro_menu_link link2">
        <Link to="/menu">: Menu</Link>
      </div>
      <div className="Reservation_link">
        <Link to="/reservation">Reservation</Link>
      </div>
    </div>
   {/* 햄버거 메뉴 */}
   <div className="hamburger-menu" style={{ zIndex: 1200 }}>
        {firstSlidesData.map((_, index) => (
          <div
            key={index}
            className={`hamburger-bar ${activeIndex === index ? "active-bar" : ""}`}
            onClick={() => navigateToSlide(index)}
          />
        ))}
      </div>
    {/* 메인 Swiper - 버티컬 방향 */}
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        el: ".custom-pagination",
        clickable: false,
 
        renderCustom: () => `
        <div class="single-arrow">
          <div class="circle">
            <span class="arrow"></span>
          </div>
        </div>
      `,
      }}
  modules={[Navigation, Pagination, Mousewheel]}
  onSwiper={(swiper) => {
    mainSwiperRef.current = swiper;
    swiper.on("slideChange", () => {
      const currentIndex = swiper.activeIndex;
      setActiveIndex(currentIndex); // 현재 인덱스 추적
      setAnimateSlide(currentIndex === 2); // 세 번째 슬라이드 애니메이션 트리거
    });
  }}
  style={{ height: "100vh", width: "100%" }}
    >
     
      {/* 첫 번째 페이지 - 기존 호리즌 슬라이더 */}
      <SwiperSlide>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{
            el: ".first-swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          modules={[Navigation, Pagination, Mousewheel]}
          style={{ height: "100vh", width: "100%" }}
                 >
          <div class="first-swiper-pagination "></div>
          {firstSlidesData.map((slide) => (
            <SwiperSlide 
            key={slide.id} 
            id={slide.id}>
              <div id="HomeIntro">
                <video autoPlay muted loop>
                  <source src={slide.video} type="video/mp4" />
                </video>
                {slide.slogan && (
                  <h1 className={slide.sloganClass}>{slide.slogan}</h1>
                )}
                <p className={slide.descriptionClass}>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperSlide>
      
      {/* 두 번째 페이지 -  호리즌 슬라이더 */}
      <SwiperSlide>
          <InnerSwiperSecondPage activeIndex={activeIndex} />
        </SwiperSlide>
      {/* 세 번째 페이지 */}
      <SwiperSlide>
  <Link 
    to="/room"
    className={`bg-slide ${animateSlide ? "animate" : ""}`} 
    style={{
      display: "block",
      backgroundImage: `url("/assets/images/bg3.jpg")`,
    }}
  >
    <h1 className="intro_Slogan">Unwind in Comfort</h1>
    <p className="intro_description">
      Relax in the heart of nature and luxury.
    </p>
  </Link>
      </SwiperSlide>

      {/* 네 번째 페이지 */}
      <SwiperSlide>
  <Link to="/" className="bg-slide4" 
  style={{
      display: "block",
      backgroundImage: `url("/assets/images/bg4.jpg")`
    }}
  >
    <h1 className="intro_Slogan">Experience the Best</h1>
    <p className="intro_description">
      Discover a world of unique experiences and breathtaking views.
    </p>
  </Link>
      </SwiperSlide>
      {/* 다섯 번째 페이지 */}
      <SwiperSlide>
  <Link to="/" className="bg-slide5" 
  style={{
      display: "block",
      backgroundImage: `url("/assets/images/bg1.jpg")`
    }}
  >
    <h1 className="intro_Slogan">Experience the Best</h1>
    <p className="intro_description">
      Discover a world of unique experiences and breathtaking views.
    </p>
  </Link>
      </SwiperSlide>
      <div className="custom-pagination"></div>
    </Swiper>

  </div>
  
);
}

export default IntroSwiper;