import Cart from "@components/client/Cart/Cart";
import React from "react";

const BookTicket = () => {
  return (
    <div className="w-[1300px] mx-auto ">
      <div className="uppercase font-bold text-[1.5rem] py-5 ">
        <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
          Đặt vé
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default BookTicket;
