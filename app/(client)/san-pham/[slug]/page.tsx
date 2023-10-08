import { TypeProductItems } from "@assets/item";
import CustomPagination from "@components/client/Products/Items/CustomPagination";
import ProductCard from "@components/client/Products/Items/ProductCard";
import {
  getDataByPaginationProps,
  getDataByTypeProps,
} from "@components/lib/get-data";

import React from "react";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let Products: any = [];
  let type = "";

  if (params.slug === "tat-ca-san-pham") {
    Products = await getDataByPaginationProps("products");
    type = "Tất cả sản phẩm";
  } else {
    const sort = TypeProductItems.filter((item) => item.value === params.slug);
    if (sort.length > 0) {
      Products = await getDataByTypeProps("products", "parentUrl", params.slug);
      console.log(Products);
      type = sort[0].label;
    } else {
      Products = await getDataByTypeProps("products", "typeUrl", params.slug);
      if (Products.length !== 0) {
        type = Products[0].typeUrl;
      } else {
        type = params.slug;
      }
    }
  }

  console.log(searchParams.pageNumber);
  return (
    <>
      <div className="h-10 flex  justify-center items-center gap-5 ">
        <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
        <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
          {params.slug === "tat-ca-san-pham"
            ? "Tất cả sản phẩm "
            : Products.length > 0
            ? `Sản phẩm ${type}`
            : `Không tìm thấy sản phẩm ${type}`}
        </h3>
        <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
      </div>
      {Products && (
        <>
          {" "}
          <div className="grid p:grid-cols-2 d:grid-cols-3 gap-2 mt-5  h-max p:w-auto d:w-[1030px]">
            {Products.length === 0 ? (
              <div className="flex justify-center w-[1030px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fgsdfgsdfgsd.jpg?alt=media&token=b98b569d-9504-4c50-be02-f592535c3d53"
                  alt="not found"
                />
              </div>
            ) : (
              <>
                {Products.map((items: any, idx: number) => {
                  return (
                    <div key={idx}>
                      <ProductCard Data={items} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
      {Products.length > 12 && <CustomPagination />}
    </>
  );
};

export default ProductPage;
