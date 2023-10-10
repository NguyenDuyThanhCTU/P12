"use client";
import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import {
  AiFillCaretRight,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import DropDown from "./Items/DropDown";
import { mainHeaderItems, subHeaderItems } from "@assets/item";

const Header = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(95);
  const [Hidden, setHidden] = useState(false);
  const [IsTranslate, setTranslate] = useState(false);
  const [Keyword, setKeyword] = useState("");

  const { TradeMarkData, productTypes } = useData();
  const { setSearch } = useStateProvider();

  const targetPosition = 1;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > targetPosition) {
      setElementTop(0);
      setTranslate(true);
    } else {
      setElementTop(95);
      setTranslate(false);
    }
  }, [scrollPosition]);

  function HandleSearch() {
    setKeyword("");
  }

  return (
    <div className="d:h-[126px] font-LexendDeca  p:h-auto">
      <div className="bg-white ">
        <div className=" h-full relative  bg-white ">
          {/* <---------------------------------------------------------- Desktop ----------------------------------------------------------> */}
          <div className="p:hidden d:flex justify-start items-center h-[130px] bg-mainblue ">
            <div className="w-[15svw] h-full bg-mainwhite"></div>
            <div className=" w-[65vw]  flex relative gap-20">
              <Link
                href="/"
                className="bg-none z-10 top-0 relative flex
                after:bg-cover after:bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fashasdhasdhasdhsad-removebg-preview.png?alt=media&token=93f18ea9-e435-4f4e-bd20-c185306c2a57)] after:block after:min-w-[125px] after:h-full after:-right-[110px] 
                "
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fadsgasdgasdg.png?alt=media&token=08c49591-5823-4ba3-9733-0b6a26fcf4d0"
                  alt="logo"
                  className="h-[130px] py-2 object-contain bg-mainwhite"
                />
              </Link>
              <div className="flex flex-col w-full text-mainwhite justify-center gap-3 ">
                <div className="flex w-full justify-between items-center text-[0.7vw] ">
                  <div className="flex gap-8">
                    {mainHeaderItems.map((items: any, idx: any) => (
                      <Link
                        className="font-light hover:text-mainorange"
                        href={`/${items.link}`}
                        key={idx}
                      >
                        {items.name}
                      </Link>
                    ))}
                  </div>
                  <div className="text-[1.5vw] cursor-pointer">
                    <AiOutlineSearch />
                  </div>
                  <Link href={`#footer`}>
                    <div className="px-2 py-1 rounded-full border">
                      Hệ thống phòng vé
                    </div>
                  </Link>
                </div>
                <div className="flex w-full  gap-5 items-center text-[0.8vw]  ">
                  <Link className="text-[1.5vw] cursor-pointer" href={`/`}>
                    <AiOutlineHome />
                  </Link>
                  <div className="flex gap-5">
                    {subHeaderItems.map((items: any, idx: any) => (
                      <Link
                        className="font-bold uppercase hover:text-mainorange"
                        href={`/${items.link}`}
                        key={idx}
                      >
                        {items.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <---------------------------------------------------------- Mobile ----------------------------------------------------------> */}
          {/* <div className="p:block d:hidden w-full  ">
            <div className="flex justify-between  items-center ">
              <Link href="/">
                <img
                  src={TradeMarkData.websiteLogo}
                  alt="logo"
                  className="h-[50px] m-5 "
                />
              </Link>
              <div className="flex items-center text-[60px]">
                {Hidden ? (
                  <RxCross1
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                Hidden ? "h-screen" : "h-0 "
              } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-y-scroll`}
            >
              {HeaderItems.map((items: any, idx: any) => {
                const sort = productTypes.filter(
                  (item: any) => item.parent === items.link
                );

                return (
                  <div key={idx}>
                    <DropDown
                      idx={idx}
                      dropdown={sort}
                      content={items.name}
                      link={items.link}
                      setHidden={setHidden}
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
