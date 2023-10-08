import Catelogy from "@components/client/Products/Items/Catelogy";
import { Suspense } from "react";
import Loading from "./loading";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
      <div className="h-10 flex  justify-center items-center gap-5">
        <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
        <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
          Giới thiệu
        </h3>
        <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
      </div>
      {children}
    </div>
  );
}
