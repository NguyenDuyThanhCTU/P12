"use client";
import { useData } from "@context/DataProviders";
import { DatePicker, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { use, useEffect } from "react";
const { Option } = Select;

interface DataType {
  key: string;
  departureschedule: string;
  ship: string;
  start: string;
  end: string;
}

const Shipbrand = () => {
  const [departureSchedule, setDepartureSchedule] = React.useState<any>([]);
  const [Date, setDate] = React.useState<any>([]);
  const [Data, setData] = React.useState<any>([]);
  const { DepartureSchedule } = useData();

  const columns: ColumnsType<DataType> = [
    {
      title: "Chuyến tàu",
      dataIndex: "departureschedule",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tàu",
      dataIndex: "ship",
      key: "age",
    },
    {
      title: "Thời gian khởi hành",
      dataIndex: "start",
      key: "address",
    },
    {
      title: "Thời gian cập bến",
      dataIndex: "end",
      key: "address",
    },
  ];

  const HandleSearch = () => {
    const sort = DepartureSchedule.filter(
      (item: any) => item.id === departureSchedule
    );

    if (sort) {
      const newDataFormat: any = [
        {
          key: "1",
          departureschedule: `${sort[0]?.start} - ${sort[0]?.end}`,
          ship: sort[0]?.FastFerry,
          start: sort[0]?.DepartureTime,
          end: sort[0]?.DockedTime,
        },
        {
          key: "2",
          departureschedule: `${sort[0]?.end} - ${sort[0]?.start}`,
          ship: sort[0]?.FastFerry,
          start: sort[0]?.DepartureTime1,
          end: sort[0]?.DockedTime1,
        },
      ];
      setData(newDataFormat);
    }
  };
  console.log(Data);
  return (
    <div className="">
      <div className="w-max absolute">
        <div>
          <div className="flex">
            <div className="flex gap-5 items-center">
              <div className="flex flex-col gap-2 ">
                <Select
                  style={{ width: "100%" }}
                  placeholder="Chọn tuyến đường"
                  onChange={setDepartureSchedule}
                  optionLabelProp="label"
                  options={DepartureSchedule?.map((item: any, idx: any) => ({
                    value: item.id,
                    label: `${item.start} - ${item.end}`,
                  }))}
                ></Select>
              </div>
              <DatePicker className="w-full" onChange={setDate} />
              <div className="flex" onClick={() => HandleSearch()}>
                <div className="py-2 px-6 border w-max cursor-pointer font-LexendDeca bg-gray-300 text-black hover:bg-gray-400 duration-300">
                  Tìm tàu
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-40">
          {Data.length > 0 && (
            <Table
              className="mt-5"
              pagination={false}
              columns={columns}
              dataSource={Data}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipbrand;
