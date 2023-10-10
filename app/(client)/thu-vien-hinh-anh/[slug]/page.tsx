import { galleryTypeItems } from "@assets/item";
import Posts from "@components/client/Posts/Posts";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const GallerySlugPage = async ({ params }: { params: { slug: string } }) => {
  let GalleryDocument: any = await getDataByTypeProps(
    "gallery",
    "type",
    params.slug
  );
  let label: any = "";
  let value: any = "";
  galleryTypeItems.map((item: any) => {
    if (item.value === params.slug) {
      label = item.label;
      value = item.value;
    }
  });
  return (
    <>
      <NavbarIntroduction
        id={params.slug}
        url="thu-vien-hinh-anh"
        items={galleryTypeItems}
      />
      {label && value && (
        <Posts Data={GalleryDocument} topic={label} url={label} />
      )}
    </>
  );
};

export default GallerySlugPage;
