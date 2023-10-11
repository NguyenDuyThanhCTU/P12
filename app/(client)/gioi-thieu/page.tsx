import { IntroduceItems } from "@assets/item";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const IntroSlugPage = async () => {
  let IntroduceData: any = await getDataByTypeProps("Introduction", "url", "/");
  const markup = { __html: IntroduceData[0]?.content };
  const title = IntroduceData[0]?.title;

  return (
    <>
      <NavbarIntroduction id="/" url="gioi-thieu" items={IntroduceItems} />
      <div
        className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2"
        id="introduction"
      >
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            Giới thiệu
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        {title && (
          <h2 className="text-center font-Montserrat font-light py-3 text-[26px] text-black">
            {title}
          </h2>
        )}

        <div
          className="text-[17px] leading-7 mt-5"
          dangerouslySetInnerHTML={markup}
        ></div>
      </div>
    </>
  );
};

export default IntroSlugPage;
