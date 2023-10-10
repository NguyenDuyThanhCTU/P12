"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const DepartureSchedule = () => {
  const { DepartureSchedule } = useData();
  return (
    <div className="grid grid-cols-2 gap-10">
      {DepartureSchedule.map((items: any, idx: number) => {
        const Transshipment: any = { __html: items.Transshipment };
        const Notes: any = { __html: items.Notes };
        const Transshipment1: any = { __html: items.Transshipment1 };
        const Notes1: any = { __html: items.Notes1 };

        return (
          <>
            <div>
              <img src={items.image} alt="Departure Schedule" />
            </div>
            <div className="border-x border-t border-mainorange h-max  flex flex-col ">
              <div className="border-b border-mainorange uppercase text-center py-2 font-bold text-[22px]">
                tuyến {items.start} - {items.end}
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Tuyến</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3">
                    {items.start} - {items.end}
                  </div>
                  <div className="bg-gray-200 py-3 pl-3">
                    {items.end} - {items.start}
                  </div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Giờ khởi hành</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3">{items.DepartureTime}</div>
                  <div className="bg-gray-200 py-3 pl-3">
                    {items.DepartureTime1}
                  </div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Giờ cập bến</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3">{items.DockedTime}</div>
                  <div className="bg-gray-200 py-3 pl-3">
                    {items.DockedTime1}
                  </div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Tàu</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3">{items.FastFerry}</div>
                  <div className="bg-gray-200 py-3 pl-3">
                    {items.FastFerry1}
                  </div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Tải trọng</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3">{items.Weight}</div>
                  <div className="bg-gray-200 py-3 pl-3">{items.Weight1}</div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Vận tốc</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3">{items.Speed}</div>
                  <div className="bg-gray-200 py-3 pl-3">{items.Speed1}</div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Trung chuyển</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div
                    className="py-3"
                    dangerouslySetInnerHTML={Transshipment}
                  ></div>
                  <div
                    className="bg-gray-200 py-3 pl-3"
                    dangerouslySetInnerHTML={Transshipment1}
                  ></div>
                </div>
              </div>
              <div className="grid  grid-cols-4 border-b  border-mainorange items-center text-[14px]">
                <div className="ml-3">Ghi chú</div>
                <div className="col-span-3 grid grid-cols-2 ">
                  <div className="py-3" dangerouslySetInnerHTML={Notes}></div>
                  <p
                    className="bg-gray-200 py-3 pl-3"
                    dangerouslySetInnerHTML={Notes1}
                  ></p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DepartureSchedule;
