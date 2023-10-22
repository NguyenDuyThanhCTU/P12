"use client";
import React from "react";
import Video from "./Section/Video";
import { RouteItem } from "@assets/item";

const OverallVideo: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {RouteItem.map((item, index) => (
        <div key={index}>
          <Video topic={item.label} type={item.value} />
        </div>
      ))}
    </div>
  );
};

export default OverallVideo;
