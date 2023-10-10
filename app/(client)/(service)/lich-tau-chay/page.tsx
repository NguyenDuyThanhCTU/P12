import DepartureSchedule from "@components/client/Service/DepartureSchedule/DepartureSchedule";
import React from "react";

const DepartureSchedulePage = () => {
  return (
    <div className="w-[1300px] mx-auto py-5">
      <div className="uppercase font-bold text-[1.5rem] py-5 ">
        <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
          Lịch tàu chạy
        </div>
      </div>
      <DepartureSchedule />
    </div>
  );
};

export default DepartureSchedulePage;
