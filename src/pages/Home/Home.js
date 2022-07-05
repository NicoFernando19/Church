import React from "react";
import Benefits from "../../Components/BenefitsComponent/Benefits";
import HomeHeader from "../../Components/HomeHeaderComponent/HomeHeader";
import Upcoming from "../../Components/UpcomingComponent/Upcoming";
import Welcome from "../../Components/WelcomeComponent/Welcome";
import WhatDoWeDo from "../../Components/WhatdowedoComponent/WhatDoWeDo";

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
