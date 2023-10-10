import OrtherService from "@components/client/Service/OrtherService/OrtherService";
import React from "react";

const OrtherServicePage = () => {
  return (
    <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
      <div className="uppercase font-bold text-[1.5rem] ">
        <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
          Dịch vụ khác
        </div>
      </div>
      <OrtherService />
    </div>
  );
};

export default OrtherServicePage;
