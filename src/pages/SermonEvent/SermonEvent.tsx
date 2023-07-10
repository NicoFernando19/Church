import Article from 'Components/SermonEventSections/Article/Article';
import Upcoming from 'Components/SermonEventSections/Upcoming/Upcoming';
import React from 'react';
import styles from './SermonEvent.module.scss';

const SermonEvent = () => {
  return (
    <div className={styles.background}>
      <Article />
      <Upcoming />
    </div>
  );
};

export default SermonEvent;
