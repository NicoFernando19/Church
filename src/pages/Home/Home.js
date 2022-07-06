import React from "react";
import Benefits from "../../Components/HomeSections/Benefits/Benefits";
import HomeHeader from "../../Components/HomeSections/HomeHeader/HomeHeader";
import Upcoming from "../../Components/HomeSections/Upcoming/Upcoming";
import Welcome from "../../Components/HomeSections/Welcome/Welcome";
import WhatDoWeDo from "../../Components/HomeSections/Whatdowedo/WhatDoWeDo";

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <WhatDoWeDo />
      <Welcome />
      <Benefits />
      <Upcoming />
    </React.Fragment>
  );
};

export default Home;
