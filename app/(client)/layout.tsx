import BookingButton from "@components/layout/client-layout/BookingButton";
import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import OnTop from "@components/layout/client-layout/OnTop";
import Partner from "@components/layout/client-layout/Partner";
import { Metadata } from "next";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Vé Tàu Cao Tốc Rạch Giá",
  description: "Vé Tàu Cao Tốc Rạch Giá",
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Partner />
      {/* <Footer /> */}
      {/* <div className="relative z-50">
        <BookingButton />
      </div> */}
      <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div>
      <Copyright />
    </>
  );
};

export default layout;
