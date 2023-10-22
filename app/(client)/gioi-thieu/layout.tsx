import Image from "next/image";

export default function IntroduceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <img
          src="https://taucaotoc.vn/wp-content/uploads/2020/04/Tau-cao-toc-Trung-Nhi-tai-Con-Dao.jpg"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover"
        />
      </div>
      {children}
      <img
        src="https://superdong.com.vn/wp-content/uploads/2019/04/tct-superdong-1.png"
        alt="Introduce Footer"
        className="w-[100vw]  h-[700px] object-cover"
      />
    </>
  );
}
