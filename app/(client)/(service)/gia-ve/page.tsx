import { RouteItem } from "@assets/item";
import Fare from "@components/client/Service/Fare/Fare";
import { getAllDataProps, getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const FarePage = async () => {
  const Data = await getAllDataProps("fare");
  const filteredData = RouteItem.map((items: any) => {
    const TrueData = Data.filter((item: any) => item.type === items.value);
    return TrueData;
  });
  return (
    <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-10 border-b">
      <div className="flex w-full flex-col items-center py-5">
        <h2 className="text-[30px] font-LexendDeca font-bold    uppercase">
          Bảng giá dịch vụ
        </h2>
        <div className="bg-redPrimmary h-1 w-20 "></div>
      </div>
      {filteredData.map(
        (data, idx) =>
          data.length > 0 && (
            <div key={idx}>
              <Fare Data={data} />
            </div>
          )
      )}
    </div>
  );
};

export default FarePage;
