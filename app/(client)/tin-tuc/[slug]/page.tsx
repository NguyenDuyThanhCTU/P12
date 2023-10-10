import { newsTypeItems } from "@assets/item";
import Posts from "@components/client/Posts/Posts";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const NewsSlugePage = async ({ params }: { params: { slug: string } }) => {
  let NewsDocument: any = await getDataByTypeProps("news", "type", params.slug);
  let label: any = "";
  let value: any = "";
  newsTypeItems.map((item: any) => {
    if (item.value === params.slug) {
      label = item.label;
      value = item.value;
    }
  });
  return (
    <>
      <NavbarIntroduction
        id={params.slug}
        url="tin-tuc"
        items={newsTypeItems}
      />
      {label && value && (
        <Posts Data={NewsDocument} topic={label} url={label} />
      )}
    </>
  );
};

export default NewsSlugePage;
