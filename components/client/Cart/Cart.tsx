"use client";
import React, { useEffect, useState } from "react";
import { DatePicker, Radio, Select, Space, notification } from "antd";
import { useData } from "@context/DataProviders";
import moment from "moment";

const Cart = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [departureSchedule, setDepartureSchedule] = useState<any>([]);
  const [start, setStart] = useState<any>();
  const [departureType, setDepartureType] = useState<any>(1);

  const [passenger, setPassenger] = useState<any>("");
  const { Option } = Select;
  const { DepartureSchedule } = useData();
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

    if (!phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      const currentTime = new Date();
      const formattedStartDate: any = start
        ? moment(start.$d).format("YYYY-MM-DD")
        : null;

      const dataFields = [
        { title: "Họ Tên", value: name },
        { title: "Email", value: email },
        { title: "SĐT", value: phone },
        { title: "ĐC", value: `${address} ${street}, ${district}, ${city}` },
        { title: "Yêu Cầu Khác", value: description },

        { title: "Tuyến", value: departureSchedule },
        { title: "Ngày khởi hành", value: formattedStartDate },
        { title: "Loại tuyến", value: departureType },
        { title: "Số lượng hành khách", value: passenger },

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
            Thông tin chuyến đi
          </h3>
          <form onSubmit={HandleSubmit} className="p-5">
            <div className="flex  flex-col gap-5">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 w-[190px]">
                  <label className="text-md font-medium ">Tuyến</label>
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Chọn loại tuyến đường"
                    onChange={setDepartureSchedule}
                    optionLabelProp="label"
                  >
                    {DepartureSchedule?.map((item: any, idx: any) => (
                      <Option value={`${item.start} - ${item.end}`} key={idx}>
                        <Space>
                          {item.start} - {item.end}{" "}
                        </Space>
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col gap-2 w-[190px]">
                  <label className="text-md font-medium ">Ngày khởi hành</label>
                  <DatePicker className="w-full" onChange={setStart} />

                  {/* <Select
                    style={{ width: "100%" }}
                    placeholder="Chọn thời gian khởi hành"
                    onChange={setDepartureSchedule}
                    optionLabelProp="label"
                  >
                    {DepartureSchedule?.map((item: any, idx: any) => (
                      <Option value={`${item.start} - ${item.end}`} key={idx}>
                        <Space>
                          {item.start} - {item.end}{" "}
                        </Space>
                      </Option>
                    ))}
                  </Select> */}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Số lượng hành khách</label>

                <input
                  value={passenger}
                  onChange={(e) => setPassenger(e.target.value)}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Loại tuyến</label>

                <Radio.Group
                  onChange={(e) => setDepartureType(e.target.value)}
                  value={departureType}
                >
                  <Radio value={`Một chiều`}> Một chiều</Radio>
                  <Radio value={`Khứ hồi`}>Khứ hồi</Radio>
                </Radio.Group>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="border shadow-xl">
        <div className="p-2">
          <h3 className="text-mainblue uppercase text-[18px] font-semibold border-b w-full pb-2">
            Thông tin người đặt vé
          </h3>
          <form onSubmit={HandleSubmit} className="p-5">
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
