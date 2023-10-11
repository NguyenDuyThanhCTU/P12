import Link from "next/link";
import React from "react";

const BookingButton = () => {
  return (
    <div className="fixed top-20 right-5  box-border flex flex-col gap-5">
      <div className="p:w-[200px] d:w-[250px] p:h-[200px] d:h-[250px] relative">
        <div className="z-10 relative">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fa%20(35%20x%2036%20in).png?alt=media&token=b22889ec-47cb-4576-9d1d-c7eec9e507a1"
            alt="booking"
          />
        </div>
        <Link href={`/dat-ve`}>
          <div className="bg-[#2e9279]  p-2 rounded-full w-max relative p:bottom-5 d:bottom-20 p:left-0 d:-left-28 zoom cursor-pointer ">
            <div className="border uppercase bg-mainblue px-8 py-1 text-center font-LexendDeca text-white text-[20px] rounded-full w-max font-bold">
              Đặt vé ngay
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookingButton;
