import { galleryTypeItems } from "@assets/item";
import Posts from "@components/client/Posts/Posts";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import { getAllDataProps } from "@components/lib/get-data";
import React from "react";

const GalleryPage = async () => {
  let AllGalleryDocument = await getAllDataProps("gallery");

  return (
    <>
      <NavbarIntroduction
        id="/"
        url="thu-vien-hinh-anh"
        items={galleryTypeItems}
      />
      {galleryTypeItems.map((items: any, idx: number) => {
        const GalleryDocument = AllGalleryDocument?.filter(
          (item: any) => item.type === items.value
        );
        return (
          <div key={idx}>
            <Posts
              Data={GalleryDocument}
              topic={items.label}
              url={items.value}
            />
          </div>
        );
      })}
    </>
  );
};

export default GalleryPage;
