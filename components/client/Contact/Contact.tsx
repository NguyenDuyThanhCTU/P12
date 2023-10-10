"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import Input from "./Input";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [area, setArea] = React.useState("");
  const [content, setContent] = React.useState("");
  const { Branches } = useData();
  const { setIsLoading } = useStateProvider();

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
    setArea("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },

        { title: "SĐT:", value: phone },
        { title: "Email:", value: email },
        { title: "Khu vực:", value: area },
        { title: "Nội dung lời nhắn:", value: content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        setIsLoading(false);
        HandleDiscard();
      } else {
        setIsLoading(false);
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5 py-5 font-LexendDeca">
      <div className="flex flex-col">
        <h2 className="py-5 text-[20px]  font-semibold">
          Chúng tôi luôn lắng nghe bạn!
        </h2>
        <div className="flex flex-col gap-2">
          <Input type="Họ tên*" value={name} setData={setName} />
          <Input type="Số điện thoại*" value={phone} setData={setPhone} />
          <Input type="Email" value={email} setData={setEmail} />
          <Input type="Khu vực" value={area} setData={setArea} />
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Nội dung lời nhắn</label>
            <textarea
              className="p-2 border border-mainorange outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-3">
            <div
              className="bg-mainorange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
              onClick={(e) => HandleSubmit(e)}
            >
              Gửi yêu cầu{" "}
            </div>
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
