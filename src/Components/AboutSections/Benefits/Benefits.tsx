import React from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import styles from './Benefits.module.scss';
import FulfillmentAndJoy from 'Storage/aboutImages/fulfillmentandJoy.png';
import CharityEvents from 'Storage/aboutImages/charity.png';
import AllAreWelcome from 'Storage/aboutImages/allarewelcome.png';
import SharedValues from 'Storage/aboutImages/sharedvalues.png';

const Benefits = () => {
  return (
    <Container className={styles.margin}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Benefits
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.benefits}>
          <Text heading={'h2'} className={styles.headline}>
            The Benefits of Joining Our Church
          </Text>
        </div>
      </Row>
      <Row className={`${styles.rowCenter} ${styles.marginContent}`}>
        <div className={styles.side}>
          <Text heading={'h4'} className={styles.title}>
            find fulfillment and joy
          </Text>
          <Text heading={'h6'} className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </Text>
        </div>
        <div className={styles.side}>
          <img src={FulfillmentAndJoy} alt='Image' />
        </div>
      </Row>
      <Row className={`${styles.rowCenter} ${styles.marginContent}`}>
        <div className={styles.side}>
          <img src={SharedValues} alt='Image' />
        </div>
        <div className={styles.side}>
          <Text heading={'h4'} className={styles.title}>
            shared values
          </Text>
          <Text heading={'h6'} className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </Text>
        </div>
      </Row>
      <Row className={`${styles.rowCenter} ${styles.marginContent}`}>
        <div className={styles.side}>
          <Text heading={'h4'} className={styles.title}>
            charity events
          </Text>
          <Text heading={'h6'} className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </Text>
        </div>
        <div className={styles.side}>
          <img src={CharityEvents} alt='Image' />
        </div>
      </Row>
      <Row className={`${styles.rowCenter} ${styles.marginContent}`}>
        <div className={styles.side}>
          <img src={AllAreWelcome} alt='Image' />
        </div>
        <div className={styles.side}>
          <Text heading={'h4'} className={styles.title}>
            All are welcome
          </Text>
          <Text heading={'h6'} className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </Text>
        </div>
      </Row>
    </Container>
  );
};

export default Benefits;
