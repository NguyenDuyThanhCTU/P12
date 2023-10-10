import { newsTypeItems } from "@assets/item";
import Posts from "@components/client/Posts/Posts";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getAllDataProps } from "@components/lib/get-data";
import React from "react";

const NewsPage = async () => {
  let AllNewsDocument = await getAllDataProps("news");

  return (
    <>
      <NavbarIntroduction id="/" url="tin-tuc" items={newsTypeItems} />
      {newsTypeItems.map((items: any, idx: number) => {
        const NewsDocument = AllNewsDocument?.filter(
          (item: any) => item.type === items.value
        );
        return (
          <div key={idx}>
            <Posts Data={NewsDocument} topic={items.label} url={items.value} />
          </div>
        );
      })}
    </>
  );
};

export default NewsPage;
