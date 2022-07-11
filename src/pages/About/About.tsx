import React from 'react';
import Header from 'Components/AboutSections/Header/Header';
import Welcome from 'Components/AboutSections/Welcome/Welcome';
import Benefits from 'Components/AboutSections/Benefits/Benefits';
import OurTeam from 'Components/AboutSections/OurTeam/OurTeam';

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <Welcome />
      <Benefits />
      <OurTeam />
    </React.Fragment>
  );
};

export default About;
