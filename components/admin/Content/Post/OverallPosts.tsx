import React from "react";
import Post from "./Section/Post";

const OverallPosts: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <Post />
      <Post />
    </div>
  );
};

export default OverallPosts;
