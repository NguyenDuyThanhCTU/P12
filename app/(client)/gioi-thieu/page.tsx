import { getAllDataProps } from "@components/lib/get-data";
import React from "react";

const IntroducePage = async () => {
  let Data = await getAllDataProps("website");
  const introduce: any = Data?.filter(
    (item: any) => item.id === "Introduction"
  );

  return (
    <div
      className="text-[17px] leading-7 mt-5"
      dangerouslySetInnerHTML={{ __html: introduce[0].content }}
    ></div>
  );
};

export default IntroducePage;
