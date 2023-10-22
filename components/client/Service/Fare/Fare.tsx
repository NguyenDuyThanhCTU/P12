import { Table } from "antd";
import React from "react";

const Fare = ({ Data }: any) => {
  const dataSource: any[] = Data.map((item: any, index: number) => ({
    key: index.toString(),
    title: `${item.start} - ${item.end}` || "",
    time: item.time || "",
    vip: item.vip || "",
    eco: item.eco || "",
    child: item.Children || "",
    Disabled: item.DisablePeople || "",
    ship: item.ship || "",
    note: item.note || "",
  }));

  const columns = [
    {
      title: "Tuyến",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Giờ tàu",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Giá vé VIP",
      dataIndex: "vip",
      key: "vip",
    },
    {
      title: "Giá vé ECO",
      dataIndex: "eco",
      key: "eco",
    },
    {
      title: "Giá vé Người cao tuổi/trẻ em",
      dataIndex: "child",
      key: "child",
    },
    {
      title: "Giá vé Người khuyết tật",
      dataIndex: "Disabled",
      key: "Disabled",
    },
    {
      title: "Tên Tàu",
      dataIndex: "ship",
      key: "ship",
    },
    {
      title: "Ghi Chú",
      dataIndex: "note",
      key: "note",
    },
  ];
  return (
    <div className="font-LexendDeca font-extralight">
      <h2 className="text-[24px] font-medium uppercase">{Data[0].topic}</h2>
      <Table
        bordered={true}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default Fare;
