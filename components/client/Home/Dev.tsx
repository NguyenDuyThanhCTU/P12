"use client";
import { uploadImage } from "@components/items/server-items/Handle";
import React, { useState } from "react";

const Dev = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const HandleUploadImage = (e: any, locate: string) => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };

  return (
    <div className="mt-20">
      <label className="cursor-pointer ">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col  items-center">
            <div>
              <p className="bg-[#0047AB] hover:bg-[#0000FF]  text-center rounded text-white text-md font-medium p-2 w-52 outline-none">
                Chọn từ thiết bị
              </p>
              <input
                type="file"
                onChange={(e) => HandleUploadImage(e, "UI")}
                className="w-0 h-0"
                id="fileInput"
              />
            </div>
          </div>
        </div>
      </label>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="max-h-[100px] max-w-[100px]">
          <img src={imageUrl} alt="" />
        </div>
        <h1>url: {imageUrl}</h1>
      </div>
    </div>
  );
};

export default Dev;
