import { IntroduceItems } from "@assets/item";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const IntroducePage = async ({ params }: { params: { slug: string } }) => {
  let IntroduceData: any = await getDataByTypeProps(
    "Introduction",
    "url",
    params.slug
  );
  console.log(params.slug);
  const markup: any = { __html: IntroduceData[0]?.content };
  const title: any = IntroduceData[0]?.title;
  const topic: any = IntroduceData[0]?.type;
  return (
    <>
      <NavbarIntroduction
        id={params.slug}
        url="gioi-thieu"
        items={IntroduceItems}
      />
      <div
        className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2"
        id="introduction"
      >
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            {topic}
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        {title && <h2>{title}</h2>}
        <div
          className="text-[17px] leading-7 mt-5"
          dangerouslySetInnerHTML={markup}
        ></div>
      </div>
    </>
  );
};

export default IntroducePage;
