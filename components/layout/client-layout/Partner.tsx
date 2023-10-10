"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { PartnerItems } from "@assets/item";
const Partner = () => {
  return (
    <div className="flex flex-col">
      <h2 className="uppercase font-bold text-[28px] py-5 text-center">
        Đối tác
      </h2>
      <div className="p:hidden d:block">
        <Swiper
          centeredSlides={true}
          slidesPerView={3}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {PartnerItems.map((item: any, idx: number) => (
            <div key={idx}>
              <SwiperSlide>
                <div className="w-[500px]  h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt="Partner"
                    className="h-full w-full hover:scale-105 duration-300 cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
      <div className="d:hidden p:block">
        <Swiper
          centeredSlides={true}
          slidesPerView={2}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {PartnerItems.map((item: any, idx: number) => (
            <div key={idx}>
              <SwiperSlide>
                <div className="w-auto h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt="Partner"
                    className="h-full w-full hover:scale-105 duration-300 cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
