import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Text from 'Elements/Text/Text';
import styles from './Blog.module.scss';
import CardV2 from 'Components/CardV2/CardV2';

const Blog = () => {
  return (
    <Container className={styles.margin}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Read Our Blog
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.benefits}>
          <Text heading={'h2'} className={styles.headline}>
            Share, inspire, innovate
          </Text>
        </div>
      </Row>
      <Row className={styles.cardRow}>
        <CardV2
          title='WATCH AND LISTEN TO OUR SERMONS'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          speaker='By Mathew Johnson'
          date='Tuesday 13 May, 2021'
        />
        <CardV2
          title='WATCH AND LISTEN TO OUR SERMONS'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          speaker='By Mathew Johnson'
          date='Tuesday 13 May, 2021'
        />
        <CardV2
          title='WATCH AND LISTEN TO OUR SERMONS'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          speaker='By Mathew Johnson'
          date='Tuesday 13 May, 2021'
        />
        <CardV2
          title='WATCH AND LISTEN TO OUR SERMONS'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          speaker='By Mathew Johnson'
          date='Tuesday 13 May, 2021'
        />
      </Row>
    </Container>
  );
};

export default Blog;
