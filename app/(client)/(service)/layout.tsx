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
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhCHxYrUiOACKU6UOXIdIVuRDfhtutUdkqlP2Y5B7D9ph_Jd9Ro55L2rFav6h3KY_vgZjbzewoFhZfSYtF-EDWgNMBmUYdmF-76XjOuQsW2JOZRZzoKEbGjYRwLLUMs3KDv-Dzv84O7r-GDIW7o1J8M87_N62_ND6jvzD_7biXw3lEnSU0xPvMeRGg/s16000/Tau-cao-toc-Trung-Trac-khoi-hanh-tu-Vung-Tau-di-thang-Da-Nang.JPG"
        alt="Introduce Header"
        className="w-[100vw] h-[700px] object-cover"
      />
      <div className="d: d:mx-auto p:w-auto p:mx-2">
        <NavbarIntroduction id="/" url="" items={ServiceTypeItems} />
      </div>
      <div> {children}</div>
    </div>
  );
}
