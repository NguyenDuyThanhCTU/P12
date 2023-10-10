"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { OtherServiceItems } from "@assets/temp";
const OrtherService = () => {
  return (
    <div className="py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {OtherServiceItems.map((item: any, idx: number) => (
          <div key={idx}>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="w-[200px] h-[200px] ">
                  <img
                    src={item.image}
                    alt="OtherServiceItems"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <h2 className="uppercase text-[18px] font-semibold">
                  {item.title}
                </h2>
                <h3 className="text-center  text-[14px]">{item.content}</h3>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default OrtherService;
