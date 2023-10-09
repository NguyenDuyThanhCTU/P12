import NavbarIntroduction from "@components/client/Introduce/Navbar";
import Image from "next/image";

export default function IntroduceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  console.log(params.slug);
  return (
    <>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Ftau-cao-toc-superdong.jpeg?alt=media&token=956079e5-2c2d-42a0-b732-0c1cb9da0818"
          alt="Introduce Header"
          className="w-[100vw]"
        />
      </div>
      {children}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2FSuperdong.jpg?alt=media&token=36616f7d-2c27-4ba1-a583-0d884935b949"
        alt="Introduce Footer"
        className="w-[100vw]"
      />
    </>
  );
}
