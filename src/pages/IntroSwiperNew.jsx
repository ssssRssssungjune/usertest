import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/common/css/IntroSwiperNew.css";


export default function IntroSwiper() {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: "slide1",
      video: "/assets/videos/oceanload.mp4",
      title: "Welcome to Slrklhi Hotel",
      description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment.",
    },
    {
      id: "slide2",
      video: "/assets/videos/city_inside1.mp4",
      title: "Modern Comforts, Natural Escapes",
      description: "Enjoy the perfect blend of modern design and cozy atmosphere.",
    },
    {
      id: "slide3",
      video: "/assets/videos/city_lettering_view.mp4",
      title: "Urban Sophistication",
      description: "Discover our urban, stylish hotel designed for you.",
    },
    {
      id: "slide4",
      video: "/assets/videos/city_night2.mp4",
      title: "Night Views",
      description: "Breathtaking views of the city at night.",
    },
    {
      id: "slide5",
      video: "/assets/videos/city_fly_view.mp4",
      title: "Fly High",
      description: "Experience our panoramic views and luxury living.",
    },
  ];

  const navigateToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* 고정 콘텐츠 */}
      <div id="fixed-elements" style={{ zIndex: 1100 }}>
        <div className="intro_hotel_logo">
          <Link to="/reservation">SlrklhiHotel</Link>
        </div>
        <div className="intro_menu_link">
          <a href="/menu">: Menu</a>
        </div>
        <div className="Reservation_link">
          <Link to="/reservation">Reservation</Link>
        </div>
      </div>

      {/* 햄버거 바 */}
      <div className="hamburger-menu" style={{ zIndex: 1200 }}>
        {slides.map((_, index) => (
          <div
            key={index}
            className="hamburger-bar"
            onClick={() => navigateToSlide(index)}
          />
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        direction="horizontal" 
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true, 
        }}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel]}
        style={{ height: "100vh", width: "100%" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} id={slide.id}>
            <div id="HomeIntro">
              <video autoPlay muted loop>
                <source src={slide.video} type="video/mp4" />
              </video>
              <h1 className="intro_Slogan">{slide.title}</h1>
              <p className="intro_description">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
