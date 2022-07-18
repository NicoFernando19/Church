import React from 'react';
import Text from 'elements/text/Text';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Event from 'Components/event/Event';
import styles from './Upcoming.module.scss';

const Upcoming = () => {
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          Upcoming Sermons
        </Text>
      </Row>
      <Row className={styles.cardRow}>
        <Event
          title={'Watch and Listen to our Sermons'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          date={'20'}
          month={'July'}
          time={'Friday 23:39 IST Saturday 11:20 ISD'}
          address={'No 233 Main St. New York, United States'}
          button={false}
          className={styles.event}
        />
        <Event
          title={'Watch and Listen to our Sermons'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          date={'20'}
          month={'July'}
          time={'Friday 23:39 IST Saturday 11:20 ISD'}
          address={'No 233 Main St. New York, United States'}
          button={false}
          className={styles.event}
        />
        <Event
          title={'Watch and Listen to our Sermons'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          date={'20'}
          month={'July'}
          time={'Friday 23:39 IST Saturday 11:20 ISD'}
          address={'No 233 Main St. New York, United States'}
          button={false}
          className={styles.event}
        />
        <Event
          title={'Watch and Listen to our Sermons'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          date={'20'}
          month={'July'}
          time={'Friday 23:39 IST Saturday 11:20 ISD'}
          address={'No 233 Main St. New York, United States'}
          button={false}
          className={styles.event}
        />
      </Row>
    </Container>
  );
};

export default Upcoming;
