import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Text from 'Elements/Text/Text';
import Gallery from 'Elements/Gallery/Gallery';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <Container className={styles.margin}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Welcome to our Church
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.benefits}>
          <Text heading={'h2'} className={styles.headline}>
            Love and Compassion
          </Text>
        </div>
      </Row>
      <Row className={styles.row}>
        <div className={styles.textWrapper}>
          <Text heading={'h6'} className={styles.textDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
        </div>
      </Row>
      <Row className={`${styles.contentCenter} ${styles.marginGallery}`}>
        <Gallery
          imageLeft={styles.imageLeft}
          imageCenter={styles.imageCenter}
          imageRight={styles.imageRight}
        />
      </Row>
      <Row className={styles.flex}>
        <div className={styles.card}>
          <Text heading={'h6'} className={styles.subBoxText}>
            OUR Mission & Vision
          </Text>
          <Text heading={'h4'} className={styles.titleBoxText}>
            STRIVING FOR A BETTER TOMORROW
          </Text>
          <Text heading={'h6'} className={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
        </div>
        <div className={styles.card}>
          <Text heading={'h6'} className={styles.subBoxText}>
            What we do
          </Text>
          <Text heading={'h4'} className={styles.titleBoxText}>
            BRINGING PEACE AND JOY TO THE WORLD
          </Text>
          <Text heading={'h6'} className={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
        </div>
      </Row>
    </Container>
  );
};

export default Welcome;
