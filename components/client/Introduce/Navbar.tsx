"use client";
import { IntroduceItems } from "@assets/item";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const NavbarIntroduction = ({ id }: any) => {
  console.log(id);
  return (
    <div className="my-10">
      {" "}
      <div className="w-[1300px] mx-auto grid grid-cols-5 gap-4 pb-5 border-b border-black textgray  text-gray-700 hover:text-black duration-300 font-LexendDeca font-light">
        {IntroduceItems.map((item: any, idx: number) => (
          <Link
            href={`/gioi-thieu/${item.value}`}
            key={idx}
            className={`${
              item.value === id && "border-b border-b-black w-max "
            } `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarIntroduction;
