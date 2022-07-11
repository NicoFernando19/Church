import React from 'react';
import Benefits from 'Components/HomeSections/Benefits/Benefits';
import HomeHeader from 'Components/HomeSections/HomeHeader/HomeHeader';
import Upcoming from 'Components/HomeSections/Upcoming/Upcoming';
import Welcome from 'Components/HomeSections/Welcome/Welcome';
import WhatDoWeDo from 'Components/HomeSections/Whatdowedo/WhatDoWeDo';
import CTA from 'Components/HomeSections/CTA/CTA';
import Blog from 'Components/HomeSections/Blog/Blog';

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <WhatDoWeDo />
      <Welcome />
      <Benefits />
      <Upcoming />
      <CTA />
      <Blog />
    </React.Fragment>
  );
};

export default Home;
