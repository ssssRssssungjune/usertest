import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/common/css/IntroSwiper.css';

//reaact swiper module
//https://swiperjs.com/react
//npm i swiper

//24.11.25 지은 [수정완료] : 풀스크린 페이지, Header 컴포넌트 삭제 후 정상작동 테스트 완료.
// 24.12.10  유화 [가로 슬라이더 완료]
function IntroSwiper() {
  const swiperRef = useRef(null);

  // 슬라이드 데이터 배열
  const slidesData = [
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

  // 슬라이드 이동 함수
  const navigateToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
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
        {slidesData.map((_, index) => (
          <div
            key={index}
            className="hamburger-bar"
            onClick={() => navigateToSlide(index)}
          />
        ))}
      </div>

      {/* Swiper 슬라이드 */}
      <Swiper
        direction="horizontal" 
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        }}
        
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel]}
        style={{ height: "100vh", width: "100%" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} id={slide.id}>
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
      <div class="swiper-pagination "></div>
      </Swiper>
    </div>
  );
}

export default IntroSwiper;
