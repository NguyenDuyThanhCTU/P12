"use client";
import React, { useEffect } from "react";
import AdminPage from "./admin/page";
import { useAuth } from "@context/AuthProviders";
import { useRouter } from "next/navigation";

const VerifyPage = () => {
  const { verify } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!verify) {
      router.push("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (verify) {
    return (
      <>
        {" "}
        <AdminPage />
      </>
    );
  } else {
    return null;
  }
};

export default VerifyPage;
