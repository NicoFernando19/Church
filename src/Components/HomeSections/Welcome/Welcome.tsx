import React from 'react';
import Text from 'Elements/Text/Text';
import Gallery from 'Elements/Gallery/Gallery';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import styles from './Welcome.module.scss';
import Button from 'Elements/Button/Button';

const Welcome = () => {
  return (
    <Container className={styles.margin}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Sub-Headline
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          Love and Compassion
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.rowTextDesc}>
          <Text
            heading={'h6'}
            className={`${styles.subHeadline} ${styles.welcomeDesc}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </div>
      </Row>
      <Row className={`${styles.row} ${styles.button}`}>
        <Button primary={true}>Read More</Button>
      </Row>
      <Row className={`${styles.contentCenter} ${styles.marginGallery}`}>
        <Gallery
          imageLeft={styles.imageLeft}
          imageCenter={styles.imageCenter}
          imageRight={styles.imageRight}
        />
      </Row>
      <Row className={`${styles.row} ${styles.ourMissionMargin}`}>
        <Text heading={'h6'} className={styles.ourMission}>
          Our Mission & Vision
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h4'} className={styles.celebrate}>
          Celebrate with us
        </Text>
      </Row>
      <Row className={styles.row}>
        <div style={{ width: '28%' }}>
          <Text heading={'h6'} className={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.readMore}>
          Read More &rarr;
        </Text>
      </Row>
    </Container>
  );
};

export default Welcome;
