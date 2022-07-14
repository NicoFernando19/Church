import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import React from 'react';
import styles from './OurBlog.module.scss';
import RecentPost from 'Components/recentPost/RecentPost';

const OurBlog = () => {
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Our Blog
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          most recent post
        </Text>
      </Row>
      <Row className={styles.row}>
        <RecentPost
          date={'Tuesday 13 May, 2022'}
          creator={'By John Hunau Deo'}
          title={'Church was doing what he often did when dropped An oracle'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor.'
          }
        />
      </Row>
    </Container>
  );
};

export default OurBlog;
