import { TravelHandbookTypeItems } from "@assets/item";
import Posts from "@components/client/Posts/Posts";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getAllDataProps } from "@components/lib/get-data";
import React from "react";

const HandbookPage = async () => {
  let AllHandbookDocument = await getAllDataProps("TravelHandbook");

  return (
    <>
      <NavbarIntroduction
        id="/"
        url="cam-nang-du-lich"
        items={TravelHandbookTypeItems}
      />
      {TravelHandbookTypeItems.map((items: any, idx: number) => {
        const HandbookDocument = AllHandbookDocument?.filter(
          (item: any) => item.type === items.value
        );
        return (
          <div key={idx}>
            <Posts
              Data={HandbookDocument}
              topic={items.label}
              url={items.value}
            />
          </div>
        );
      })}
    </>
  );
};

export default HandbookPage;
