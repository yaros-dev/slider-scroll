import { Mousewheel, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import "./slider.scss";

export const SliderVertical = () => {
  return (
    <div className="slider-v">
      <Swiper
        modules={[EffectFade, Mousewheel, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ thresholdTime: 400, releaseOnEdges: true }}
        pagination={true}
      >
        <SwiperSlide>Multiple integrations</SwiperSlide>
        <SwiperSlide>
          Slick video onboarding for your recruitment workflow
        </SwiperSlide>
        <SwiperSlide>
          Your new interview tool for fast-track recruitment
        </SwiperSlide>
        <SwiperSlide>
          Your new interview tool for fast-track recruitment
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
