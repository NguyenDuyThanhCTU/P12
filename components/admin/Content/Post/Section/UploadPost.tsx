import React, { useEffect, useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { notification } from "antd";

import Input from "../../../Item/Input";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import {
  convertToCodeFormat,
  uploadImage,
} from "@components/items/server-items/Handle";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { TypePostItems } from "@assets/item";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const UploadPost: React.FC = () => {
  const [Title, setTitle] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [type, setType] = useState<string>("news");
  const [url, setUrl] = useState<string>("");
  const { setDropDown, setIsRefetch } = useStateProvider();
  const { setUpdateId } = useData();

  const HandleUploadImage = (e: InputChangeEvent, locate: string): void => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };

  const HandleDiscard = (): void => {
    setImageUrl("");
    setTitle("");
  };

  useEffect(() => {
    const handleChange = () => {
      const userInput = Title;
      const formattedCode = convertToCodeFormat(userInput);
      if (formattedCode) {
        setUrl(formattedCode);
      }
    };
    handleChange();
  }, [Title]);

  const HandleContinue = (): void => {
    if (!Title) {
      notification.error({
        message: "Lỗi !",
        description: `Vui lòng nhập thông tin trước khi THÊM NỘI DUNG !`,
      });
    } else {
      const data = {
        title: Title,
        image: imageUrl,
        type: type,
        url: url,
        content: "",
      };
      addDocument("posts", data).then((data) => {
        notification.success({
          message: "Thành công!",
          description: `Thông tin đã được CẬP NHẬT !`,
        });

        setUpdateId(data);
        setDropDown("add-post");
        setIsRefetch("CRUD posts");
        HandleDiscard();
      });
    }
  };

  return (
    <div className="flex-[35%] bg-white">
      <div className="flex flex-col  gap-4 p-4 items-center">
        <div className="flex justify-between pb-4 border-b w-full">
          <div className="py-3 px-10 bg-gray-300  font-bold uppercase text-black">
            Thông tin bài viết
          </div>
          <div className="flex items-center gap-4 mr-4">
            <div
              className={`w-3 h-3 rounded-full duration-300  ${
                !Title ? "bg-blue-400 scale-110" : "bg-gray-400"
              }`}
            ></div>
            <div
              className={`w-3 h-3 rounded-full   ${
                Title ? "bg-blue-400 scale-110" : "bg-gray-400"
              }`}
            ></div>
          </div>
        </div>
        <div className="h-[250px] text-black w-full">
          <div>
            <Input
              text="Tiêu đề bài viết"
              Value={Title}
              setValue={setTitle}
              Input={true}
              PlaceHolder=""
            />
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-md font-medium ">Loại bài viết:</label>
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => setType(e.target.value)}
              >
                {TypePostItems.map((item, idx) => (
                  <option
                    key={idx}
                    className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            {type !== "policy" && (
              <>
                {" "}
                <div className="flex gap-5  items-end ">
                  <Input
                    text="Liên kết hình ảnh"
                    Value={imageUrl}
                    setValue={setImageUrl}
                    Input={true}
                    PlaceHolder=""
                  />

                  <div>
                    <label>
                      <div className="cursor-pointer">
                        <div className="flex gap-1 items-center p-2 px-4 bg-red-500 hover:bg-red-600 border text-white rounded-full">
                          <AiOutlineCloudUpload className="text-[32px] " />
                        </div>

                        <input
                          type="file"
                          className="w-0 h-0"
                          onChange={(e) => HandleUploadImage(e, "posts")}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-5 mt-2">
          <>
            <div
              className="px-10 py-3 rounded-xl border-2 border-blue-400 text-blue-400 hover:text-blue-700 hover:border-blue-700 duration-300 cursor-pointer"
              onClick={() => HandleDiscard()}
            >
              Nhập lại
            </div>
            {imageUrl || type === "policy" ? (
              <div
                className="px-10 py-3 rounded-xl border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-700 duration-300 hover:border-blue-700 cursor-pointer"
                onClick={() => HandleContinue()}
              >
                Tiếp tục
              </div>
            ) : (
              <div
                className="px-10 py-3 rounded-xl border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-700 duration-300 hover:border-blue-700 cursor-pointer"
                onClick={() => {
                  notification.warning({
                    message: "Warning",
                    description: `Hình ảnh trống hoặc đang tải lên !`,
                  });
                }}
              >
                Tiếp tục
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
