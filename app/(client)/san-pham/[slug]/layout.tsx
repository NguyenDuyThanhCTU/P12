import Catelogy from "@components/client/Products/Items/Catelogy";
import { Suspense } from "react";
import Loading from "./loading";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="p:w-auto d:w-[1300px] d:mx-auto  p:mx-2 flex gap-5 d:flex-row p:flex-col p:py-5">
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <div className="flex flex-col">{children}</div>
        </Suspense>
        <div className="flex">
          <Catelogy />
        </div>
      </div>
    </>
  );
}
