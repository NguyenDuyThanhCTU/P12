import Loading from "@components/items/client-items/Loading";
import ClientLogin from "@components/login/ClientLogin";
import { ParticlesCustom } from "@components/login/Items/ParticlesCustom";
import React, { Suspense } from "react";

const LoginPage: React.FC = () => {
  return (
    <>
      {" "}
      <ParticlesCustom />
      <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
        <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca cursor-pointer rounded-sm -z-10">
          <ClientLogin />

          <div className="d:flex flex-1 p:hidden ">
            <div className="overflow-hidden h-full">
              <img
                src="https://vieclam24h.vn/img/loginv2/bg-register.png"
                alt=""
                className="object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
