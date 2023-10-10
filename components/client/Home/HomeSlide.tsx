"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";

const HomeSlide = () => {
  const { Slides } = useData();
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        modules={[Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {Slides?.map((items: any, idx: number) => (
          <div key={idx} className="">
            <SwiperSlide>
              <div className="w-full max-h-[850px]">
                <img src={items.image} alt="slide" className="w-full h-full" />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
