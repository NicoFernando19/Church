import React from 'react';
import Text from 'Elements/Text/Text';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Event from 'Components/Event/Event';
import styles from './Upcoming.module.scss';

const Upcoming = () => {
  return (
    <Container className={styles.margin}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Upcoming Sermons
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.benefits}>
          <Text heading={'h2'} className={styles.headline}>
            Join Us and become part of something great
          </Text>
        </div>
      </Row>
      <Row className={styles.row}>
        <Event
          title={'Watch and Listen to our Sermons'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          date={'20'}
          month={'July'}
          time={'Friday 23:39 IST Saturday 11:20 ISD'}
          address={'No 233 Main St. New York, United States'}
          image={styles.angelImage}
        />
      </Row>
      <Row className={styles.rowViewAll}>
        <Text heading={'h6'} className={styles.viewSermons}>
          View all Sermons &rarr;
        </Text>
      </Row>
    </Container>
  );
};

export default Upcoming;
