import React from "react";
import HomeHeader from "../../Components/HomeHeaderComponent/HomeHeader";
import Welcome from "../../Components/WelcomeComponent/Welcome";
import WhatDoWeDo from "../../Components/WhatdowedoComponent/WhatDoWeDo";

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <WhatDoWeDo />
      <Welcome />
    </React.Fragment>
  );
};

export default Home;
