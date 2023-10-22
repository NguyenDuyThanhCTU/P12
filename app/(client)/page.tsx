import Dev from "@components/client/Home/Dev";
import HomeIntroduce from "@components/client/Home/HomeIntroduce";
import HomeSlide from "@components/client/Home/HomeSlide";
import AddressDropdown from "@components/items/AddressDropdown";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-max">
      {/* <Dev /> */}
      <HomeSlide />
      <HomeIntroduce />
      {/* <AddressDropdown /> */}
    </div>
  );
};

export default HomePage;
