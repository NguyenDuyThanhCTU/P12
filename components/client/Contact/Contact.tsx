"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import Input from "./Input";

const Contact = () => {
  const { Branches } = useData();

  return (
    <div className="grid grid-cols-3 gap-5 py-5 font-LexendDeca">
      <div className="flex flex-col">
        <h2 className="py-5 text-[20px]  font-semibold">
          Chúng tôi luôn lắng nghe bạn!
        </h2>
        <div className="flex flex-col gap-2">
          <Input type="Họ tên*" />
          <Input type="Số điện thoại*" />
          <Input type="Email" />
          <Input type="Khu vực" />
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Nội dung lời nhắn</label>
            <textarea className="p-2 border border-mainorange outline-none" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 col-span-2 ">
        {Branches.map((item: any, idx: number) => (
          <div className="flex flex-col" key={idx}>
            <h2 className="font-bold">{item.name} </h2>
            <div className="hmax flex flex-col font-LexendDeca font-light text-[0.7vw] p-3">
              <p>{item.address}</p>
              <p>SĐT: {item.email}</p>
              <p>Email: {item.email}</p>
              <p>(Giờ làm việc: {item.worktime})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
