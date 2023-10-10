import { TravelHandbookTypeItems } from "@assets/item";
import Posts from "@components/client/Posts/Posts";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const HandbookSlugPage = async ({ params }: { params: { slug: string } }) => {
  let HandbookDocument: any = await getDataByTypeProps(
    "TravelHandbook",
    "type",
    params.slug
  );
  let label: any = "";
  let value: any = "";
  TravelHandbookTypeItems.map((item: any) => {
    if (item.value === params.slug) {
      label = item.label;
      value = item.value;
    }
  });
  return (
    <>
      <NavbarIntroduction
        id={params.slug}
        url="cam-nang-du-lich"
        items={TravelHandbookTypeItems}
      />
      {label && value && (
        <Posts Data={HandbookDocument} topic={label} url={label} />
      )}
    </>
  );
};

export default HandbookSlugPage;
