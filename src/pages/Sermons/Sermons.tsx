import Upcoming from 'Components/HomeSections/Upcoming/Upcoming';
import AllEvents from 'Components/SermonSections/AllEvents/AllEvents';
import Header from 'Components/SermonSections/Header/Header';
import React from 'react';

const Sermons = () => {
  return (
    <React.Fragment>
      <Header />
      <Upcoming />
      <AllEvents />
    </React.Fragment>
  );
};

export default Sermons;
