"use client";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer, notification } from "antd";
import React, { useEffect, useState } from "react";

export const Input = ({ Value, Onchange, topic }: any) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="font-semibold ">{topic}</label>
        <input
          value={Value}
          onChange={(e: any) => {
            Onchange(e.target.value);
          }}
          type="text"
          className="p-2 border border-mainorange outline-none text-black"
        />
      </div>
    </>
  );
};

const EditFare = ({ open, setOpen }: any) => {
  const [vip, setvip] = useState<string>("");
  const [eco, seteco] = useState<string>("");
  const [DisablePeople, setDisablePeople] = useState<string>("");
  const [Children, setChildren] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [ship, setShip] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const { UpdateId } = useData();
  const { setIsRefetch } = useStateProvider();

  const HandleSubmit = () => {
    const data: any = {
      vip: vip,
      eco: eco,
      DisablePeople: DisablePeople,
      Children: Children,
      time: time,
      ship: ship,
      note: note,
    };
    for (let key in data) {
      if (
        data[key] === undefined ||
        data[key] === "" ||
        data[key] === null ||
        data[key].length === 0
      ) {
        delete data[key];
      }
    }
    updateDocument("fare", UpdateId, data).then(() => {
      notification.success({
        message: "Thành công !",
        description: "Tải lên thành công !",
      });
      setIsRefetch(`CRUD fare`);
      setOpen(false);
    });
  };

  return (
    <div>
      {" "}
      <>
        <Drawer
          title="Chi tiết giá vé"
          width={700}
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Input Value={vip} Onchange={setvip} topic={"Khách vip"} />
          <Input Value={eco} Onchange={seteco} topic={"Giá vé ECO"} />
          <Input
            Value={DisablePeople}
            Onchange={setDisablePeople}
            topic={"Người khuyết tật"}
          />
          <Input
            Value={Children}
            Onchange={setChildren}
            topic={"Người cao tuổi/Trẻ em"}
          />
          <Input Value={time} Onchange={setTime} topic={"Giờ tàu"} />
          <Input Value={ship} Onchange={setShip} topic={"Tên tàu"} />
          <Input Value={note} Onchange={setNote} topic={"Ghi chú"} />
          <div className="flex justify-center mt-3">
            <div
              className="bg-mainorange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
              onClick={() => HandleSubmit()}
            >
              Cập nhật
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default EditFare;
