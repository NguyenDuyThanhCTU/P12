"use client";
import React, { useState } from "react";
import { PolicyItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Shipbrand from "@components/client/Shipbrand/Shipbrand";

const Footer = () => {
  const [isOption, setIsOption] = useState<number>(0);
  const { Branches, SocialMedia } = useData();

  const HandleSelected = (idx: number) => {
    if (idx === isOption) {
      setIsOption(0);
    } else {
      setIsOption(idx);
    }
  };

  const SocialMediaItems = [
    {
      name: "Zalo",
      url: SocialMedia[0],
    },
    {
      name: "Facebook",
      url: SocialMedia[1],
    },
  ];

  return (
    <div className="bg-mainblue" id="footer">
      <div className="p:w-auto d:w-[65vw] p:mx-2 d:mx-auto flex text-mainwhite gap-10 py-10">
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-1 ">
            {PolicyItems.map((items: any, idx: number) => (
              <Link
                key={idx}
                className="hover:underline w-max text-[14px]"
                href={items.url}
              >
                {items.title}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="text-[18px]">Follow us</h2>
            <div className="flex flex-col gap-1 ">
              {SocialMediaItems.map((items: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    onClick={() =>
                      window.open(`https://${items.url}`, "_blank")
                    }
                    className="hover:underline w-max text-[14px]"
                  >
                    {items.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* <h2 className="text-[20px]">Hệ thống phòng vé</h2>
          <div className="grid p:grid-cols-1 d:grid-cols-3 gap-5 mt-5">
            {Branches.map((items: any, idx: number) => (
              <div className="flex flex-col" key={idx}>
                <div
                  className="border cursor-pointer"
                  onClick={() => HandleSelected(idx + 1)}
                >
                  <div className="flex gap-3 items-center py-1 justify-center">
                    <span>{items.name}</span>
                    <div
                      className={`${
                        isOption === idx + 1 && "rotate-90"
                      } duration-300`}
                    >
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    isOption === idx + 1
                      ? "border-x border-b h-max"
                      : "h-0 overflow-hidden"
                  } duration-300 `}
                >
                  <div className="hmax flex flex-col font-LexendDeca font-light  p-3">
                    <p>{items.address}</p>
                    <p>SĐT: {items.email}</p>
                    <p>Email: {items.email}</p>
                    <p>(Giờ làm việc: {items.worktime})</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
