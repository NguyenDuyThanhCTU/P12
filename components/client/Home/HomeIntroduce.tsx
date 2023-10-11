"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import { BsArrowLeftRight, BsArrowRight } from "react-icons/bs";
import Posts from "../Posts/Posts";

const HomeIntroduce = () => {
  const [isOption, setIsOption] = useState<number>(0);
  const { DepartureSchedule, Fare, News } = useData();
  const [FastFerry, setFastFerry] = useState([]);

  const HandleSelected = (idx: number, type: string) => {
    if (idx === isOption) {
      setIsOption(0);
    } else {
      setIsOption(idx);
    }
  };

  useEffect(() => {
    const sortFast = Fare?.filter((item: any) => item.type === "FastFerry");

    if (sortFast) {
      setFastFerry(sortFast);
    }
  }, [Fare]);

  return (
    <div className="my-10">
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto flex flex-col">
        <div className=" flex flex-col items-center gap-5">
          <h2 className="text-center text-[28px] font-light font-Montserrat">
            Trước hết, Công Ty Cổ Phần Tàu Cao Tốc Superdong – Kiên Giang xin
            gửi đến Quý hành khách lời chào trân trọng cùng lời chúc sức khỏe và
            thành công.
          </h2>
          <h4 className="text-center font-light">
            Thành lập từ năm 2003, với ngành nghề chính là cung cấp dịch vụ vận
            tải hành khách từ đất liền đến các thiên đường biển đảo và ngược
            lại. Với sự đầu tư lớn về đội tàu, hiện Superdong đang sở hữu 16 tàu
            cao tốc và 2 phà phục vụ cho hành khách đi tới các đảo Phú Quốc, Nam
            Du, Hòn Sơn, Hòn Nghệ, Côn Đảo và Phú Qúy.
          </h4>
          <Link href={`/gioi-thieu`} className="group">
            <div className="flex justify-center text-mainblue hover:text-mainorange duration-300 font-light cursor-pointer items-center gap-5">
              <span> Xem thêm</span>
              <AiOutlineArrowRight />
            </div>
            <div className="h-[1px] w-full bg-mainblue group-hover:bg-mainorange duration-300"></div>
          </Link>
        </div>
        <div>
          <h2 className="py-5 uppercase text-[24px] font-bold font-LexendDeca">
            <span> Lịch khởi hành tàu cao tốc</span>
            <div className="h-[2px] w-20 bg-black"></div>
          </h2>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            slidesPerGroup={1}
            modules={[Autoplay]}
            className="mySwiper"
            loop={true}
          >
            {DepartureSchedule?.map((items: any, idx: number) => (
              <div key={idx} className="">
                <SwiperSlide>
                  <Link href={`/lich-tau-chay`}>
                    <div className="flex flex-col">
                      <div className="group">
                        <div className="p:h-[130px] d:h-[275px] w-full overflow-hidden">
                          <img
                            src={items.image}
                            alt="Departure Schedule"
                            className="w-full h-full hover:scale-110 duration-300"
                          />
                        </div>
                        <div className="flex items-center gap-3 p:text-[12px]  d:text-[22px] font-bold font-LexendDeca text-center p:w-max d:w-full uppercase py-4 justify-center group-hover:text-mainorange duration-300">
                          <div>{items.start}</div>
                          <BsArrowLeftRight />
                          <div>{items.end}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="d:w-[1300px] d:mx-auto  py-10 p:w-auto p:mx-2">
          <h2 className="py-5 uppercase text-[24px] font-bold font-LexendDeca">
            <span> Giá vé tàu - phà</span>
            <div className="h-[2px] w-20 bg-black"></div>
          </h2>
          <div className="grid p:grid-cols-1 d:grid-cols-2 gap-5">
            <div className="pt-5">
              {FastFerry?.map((items: any, idx: number) => (
                <div className="flex flex-col py-2" key={idx}>
                  <div
                    className={`${
                      isOption === idx + 1 ? "border-b-none" : "border-b"
                    } grid grid-cols-3 gap-2 py-2  hover:text-gray-600 cursor-pointer`}
                    onClick={() => HandleSelected(idx + 1, "FastFerry")}
                  >
                    <div className=" items-center col-span-2 grid grid-cols-3 uppercase font-bold ">
                      <p>{items.start}</p>
                      <BsArrowLeftRight />
                      <p>{items.end}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] justify-end">
                      <p>Chi tiết</p>
                      <div
                        className={`${
                          isOption === idx + 1 && "rotate-90"
                        } duration-300`}
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isOption === idx + 1 ? "   h-max" : "h-0 overflow-hidden"
                    } duration-300 text-[14px] `}
                  >
                    {items.Adult && (
                      <div className="flex justify-between py-5 border-b border-black">
                        <p>Người lớn</p>
                        <p>{items.Adult}VNĐ</p>
                      </div>
                    )}
                    {items.Elderly && (
                      <div className="flex justify-between py-5 border-b border-black">
                        <p>
                          Người cao tuổi (từ 60 tuổi trở lên, áp dụng cho công
                          dân VN)
                        </p>
                        <p>{items.Elderly}VNĐ</p>
                      </div>
                    )}
                    {items.DisablePeople && (
                      <div className="flex justify-between py-5 border-b border-black">
                        <p>Người khuyết tật (áp dụng cho công dân VN)</p>
                        <p>{items.DisablePeople}VNĐ</p>
                      </div>
                    )}
                    {items.Children && (
                      <div className="flex justify-between py-5 border-b border-black">
                        <p>Trẻ em (Từ 6-11 tuổi tính theo năm sinh)</p>
                        <p>{items.Children}VNĐ</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <img
                src="https://superdong.com.vn/wp-content/uploads/2019/04/tct-superdong-1.png"
                alt="intro"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="d:w-[1600px] mx-auto p:w-auto">
          <img
            src="https://superdong.com.vn/wp-content/uploads/2021/11/tau-cao-toc-superdong.jpg"
            alt="intro"
          />
        </div>
      </div>

      <div>
        <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto py-10">
          <Posts Data={News} topic={`Tin tức`} url={"a"} />
        </div>
      </div>
    </div>
  );
};

export default HomeIntroduce;
