"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect, useState } from "react";
import { BsArrowLeftRight, BsArrowRight } from "react-icons/bs";

const Fare = () => {
  const [ROROFerry, setROROFerry] = useState([]);
  const [FastFerry, setFastFerry] = useState([]);
  const [isOption, setIsOption] = useState<number>(0);
  const [isOptionRoro, setIsOptionRoro] = useState<number>(0);

  const { Fare } = useData();

  const HandleSelected = (idx: number, type: string) => {
    if (type === "FastFerry") {
      if (idx === isOption) {
        setIsOption(0);
      } else {
        setIsOption(idx);
      }
    } else {
      if (idx === isOptionRoro) {
        setIsOptionRoro(0);
      } else {
        setIsOptionRoro(idx);
      }
    }
  };

  useEffect(() => {
    const sortRoro = Fare?.filter((item: any) => item.type === "ROROFerry");
    const sortFast = Fare?.filter((item: any) => item.type === "FastFerry");
    if (sortRoro) {
      setROROFerry(sortRoro);
    }
    if (sortFast) {
      setFastFerry(sortFast);
    }
  }, [Fare]);
  return (
    <>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
              Giá vé tàu cao tốc
            </div>
          </div>
          <div className="py-5">
            {FastFerry.map((items: any, idx: number) => (
              <div className="flex flex-col py-4" key={idx}>
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
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>Người lớn</p>
                    <p>{items.Adult}VNĐ</p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>
                      Người cao tuổi (từ 60 tuổi trở lên, áp dụng cho công dân
                      VN)
                    </p>
                    <p>{items.Elderly}VNĐ</p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>Người khuyết tật (áp dụng cho công dân VN)</p>
                    <p>{items.DisablePeople}VNĐ</p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>Trẻ em (Từ 6-11 tuổi tính theo năm sinh)</p>
                    <p>{items.Children}VNĐ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
              Giá vé phà
            </div>
          </div>
          <div className="py-5">
            {ROROFerry.map((items: any, idx: number) => (
              <div className="flex flex-col py-4" key={idx}>
                <div
                  className={`${
                    isOptionRoro === idx + 1 ? "border-b-none" : "border-b"
                  } grid grid-cols-3 gap-2 py-2  hover:text-gray-600 cursor-pointer`}
                  onClick={() => HandleSelected(idx + 1, "ROROFerry")}
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
                        isOptionRoro === idx + 1 && "rotate-90"
                      } duration-300`}
                    >
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    isOptionRoro === idx + 1
                      ? "   h-max"
                      : "h-0 overflow-hidden"
                  } duration-300 text-[14px] `}
                >
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>Người lớn</p>
                    <p>{items.Adult}VNĐ</p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>
                      Người cao tuổi (từ 60 tuổi trở lên, áp dụng cho công dân
                      VN)
                    </p>
                    <p>{items.Elderly}VNĐ</p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>Người khuyết tật (áp dụng cho công dân VN)</p>
                    <p>{items.DisablePeople}VNĐ</p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-black">
                    <p>Trẻ em (Từ 6-11 tuổi tính theo năm sinh)</p>
                    <p>{items.Children}VNĐ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fare;
