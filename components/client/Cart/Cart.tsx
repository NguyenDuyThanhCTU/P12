"use client";
import React, { useEffect, useState } from "react";
import { notification } from "antd";

const Cart = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const HandleDiscard = () => {
    setAddress("");
    setStreet("");
    setCity("");
    setDescription("");
    setDistrict("");
    setName("");
    setPhone("");
    setEmail("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || !name || !email || !address || !district || !city) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      const currentTime = new Date();

      const dataFields = [
        { title: "Họ Tên", value: name },
        { title: "Email", value: email },
        { title: "SĐT", value: phone },
        { title: "ĐC", value: `${address} ${street}, ${district}, ${city}` },
        { title: "Yêu Cầu Khác", value: description },
        { title: "Tổng số lượng sản phẩm", value: ` Sản phẩm` },
        {
          title: "Chi tiết hóa đơn",
          value: `
        `,
        },
        {
          title: "Tổng Giá trị hóa đơn",
          value: ` VNĐ`,
        },
        { title: "Thời gian đặt", value: currentTime },
      ];

      const data: any = {};

      dataFields.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com",
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
        HandleDiscard();
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="grid d:grid-cols-2 gap-5 p:grid-cols-1 mt-5 mx-10 font-LexendDeca py-14">
      <div className="border shadow-xl">
        <div className="p-2">
          <h3 className="text-mainblue uppercase text-[18px] font-semibold border-b w-full pb-2">
            Thông tin giao hàng
          </h3>
          <form onSubmit={HandleSubmit}>
            <div className="flex gap-2 ">
              <div>
                <label className="font-semibold ">Tàu</label>

                <input
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="border shadow-xl">
        <div className="p-2">
          <h3 className="text-mainblue uppercase text-[18px] font-semibold border-b w-full pb-2">
            Thông tin giao hàng
          </h3>
          <form onSubmit={HandleSubmit}>
            <div className="flex gap-2 flex-col ">
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold ">Họ tên</label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="p-2 border w-full border-mainorange outline-none text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Số điện thoại</label>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Email</label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>

              <div className=" flex gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold ">Tỉnh/Thành phố</label>

                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="p-2 border border-mainorange outline-none text-black"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold ">Quận/huyện</label>

                  <input
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    type="text"
                    className="p-2 border border-mainorange outline-none text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Phường/xã</label>

                <input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Địa chỉ</label>

                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Yêu cầu khá</label>

                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
            </div>

            <div className="flex">
              {" "}
              <button
                className="py-2 duration-300   mt-5  px-10 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer text-center uppercase font-semibold "
                type="submit"
              >
                Đặt hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
