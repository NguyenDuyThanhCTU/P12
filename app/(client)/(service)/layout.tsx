import { ServiceTypeItems } from "@assets/item";
import NavbarIntroduction from "@components/items/client-items/Navbar";
import Image from "next/image";

export default function IntroduceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Ftau-cao-toc-superdong.jpeg?alt=media&token=956079e5-2c2d-42a0-b732-0c1cb9da0818"
        alt="Introduce Header"
        className="w-[100vw]"
      />
      <div className="d: d:mx-auto p:w-auto p:mx-2">
        <NavbarIntroduction id="/" url="" items={ServiceTypeItems} />
      </div>
      <div> {children}</div>
    </div>
  );
}
