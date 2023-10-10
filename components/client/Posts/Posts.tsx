"use client";
import PostCart from "@components/items/client-items/PostsCart";
import Link from "next/link";
import React from "react";

const Posts = ({ Data, topic, url }: any) => {
  return (
    <div>
      <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
        <div className="flex flex-col">
          <div>
            <div className="uppercase font-bold text-[1.5rem] ">
              <Link
                href={`/cam-nang-du-lich/${url}`}
                className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 "
              >
                {topic}
              </Link>
            </div>
          </div>
          <div className="grid p:grid-cols-2 d:grid-cols-3 py-5 gap-5 ">
            {Data.map((item: any, idx: number) => (
              <div key={idx}>
                <PostCart
                  url={item.url}
                  image={item.image}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
