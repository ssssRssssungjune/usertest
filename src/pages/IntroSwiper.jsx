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
export default function IntroSwiper() {
  const swiperRef = useRef(null); 
  const navigateToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <div style={{ height: '100vh', width: '100%', }}>
      {/* 햄버거 메뉴 */}
      <div className="hamburger-menu"style={{ zIndex: 1000 }}>
        <div className="hamburger-bar" onClick={() => navigateToSlide(0)}>
          <a href="#slide1"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(1)}>
          <a href="#slide2"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(2)}>
          <a href="#slide3"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(3)}>
          <a href="#slide4"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(4)}>
          <a href="#slide5"></a>
        </div>
      </div>

      {/* 고정되는 내용 */}
      <div id="fixed-elements"style={{ zIndex: 1100 }}>
        <div className="intro_hotel_logo logo2">
          <Link to ="/reservation">SlrklhiHotel</Link>
        </div>
        <div className="intro_menu_link link2">
          <a href="/menu">: Menu</a>
        </div>
        <div className="Reservation_link">
          <Link to="/reservation">Reservation</Link>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        loop
        mousewheel
        modules={[Navigation, Pagination, Mousewheel]}
        style={{ height: '100vh', width: '100%' }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {/* 1_slide */}
        <SwiperSlide id="slide1">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/assets/videos/oceanload.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan">Welcome to Slrklhi Hotel</h1>
            <p className="intro_description">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>

        {/* 2_slide */}
        <SwiperSlide id="slide2">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/assets/videos/city_inside1.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan2">Modern Comforts, Natural Escapes</h1>
            <p className="intro_description2">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>

        {/* 3_slide */}
        <SwiperSlide id="slide3">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/assets/videos/city_lettering_view.mp4" type="video/mp4" />
            </video>
            <p className="intro_description3">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>

        {/* 4_slide */}
        <SwiperSlide id="slide4">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/assets/videos/city_night2.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan4">Urban Sophistication, Coastal Tranquility</h1>
            <p className="intro_description4">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>
        {/* 5_slide */}
        <SwiperSlide id="slide4">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/assets/videos/city_fly_view.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan4">Urban Sophistication, Coastal Tranquility</h1>
            <p className="intro_description4">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

