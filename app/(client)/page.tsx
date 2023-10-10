import HomeIntroduce from "@components/client/Home/HomeIntroduce";
import HomeSlide from "@components/client/Home/HomeSlide";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-max">
      <HomeSlide />
      <HomeIntroduce />
    </div>
  );
};

export default HomePage;
