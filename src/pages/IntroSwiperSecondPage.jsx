import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "../components/common/css/IntroSwiperSecondPage.css";

function InnerSwiperSlider() {
  const innerSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const innerSlidesData = [
    {
      id: "innerSlide1",
      image: "/assets/images/inner1.jpg",
      title: "Luxury Suite",
      description: " 통창으로 이루어진 발코니가 매력적인 공간입니다.평범한 일상에서 벗어나 특별한 시간을 만들어줄 공간에서의 시작.",
      type: "Luxury Suite",
      capacity: "2명",
      area: "14평",
    },
    {
      id: "innerSlide2",
      image: "/assets/images/inner2.jpg",
      title: "Comfort Room",
      description: "편안한 분위기의 고즈넉한 안정감을 줄 수 있는 혼자만의 시간이 필요하다면 주저없이 선택해야 할 객실입니다.",
      type: "Business Room",
      capacity: "2명",
      area: "16평",
    },
    {
      id: "innerSlide3",
      image: "/assets/images/inner3.jpg",
      title: "Premium View",
      description: "아름다운 자연과 조망이 뒤어난 그린너리를 품은 프리미엄 뷰를 즐길 수 있는 공간입니다.",
      type: " Family Room ",
      capacity: "6명",
      area: "24평",
    },
  ];

  useEffect(() => {
    if (innerSwiperRef.current) {
      innerSwiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="horizontal_slider_container">
      <div className="inner_image_area">
        <Swiper
          ref={innerSwiperRef}
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".inner_pagination",
            clickable: true,
            type: "bullets",
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          modules={[Navigation, Pagination, Mousewheel]}
          style={{ height: "100vh", width: "100%" }}
        >
          {innerSlidesData.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="inner_content_area">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide_image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="inner_pagination">
          {innerSlidesData.map((_, index) => (
            <span
              key={index}
              className={`custom-bullet ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => {
                if (innerSwiperRef.current) {
                  innerSwiperRef.current.swiper.slideTo(index);
                }
                setActiveIndex(index);
              }}
            ></span>
          ))}
        </div>
      </div>
      <div className="inner_info_area">
        <h2>{innerSlidesData[activeIndex].title}</h2>
        <p>{innerSlidesData[activeIndex].description}</p>
        <ul>
          <li>Type: {innerSlidesData[activeIndex].type}</li>
          <li>Member: {innerSlidesData[activeIndex].capacity}</li>
          <li>Roomarea: {innerSlidesData[activeIndex].area}</li>
        </ul>
        <button className="learn_more_btn">Learn More</button>
      </div>
    </div>
  );
}

export default InnerSwiperSlider;
