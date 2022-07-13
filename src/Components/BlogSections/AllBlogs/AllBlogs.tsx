import React from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import CardV2 from 'Components/cardv2/CardV2';
import styles from './AllBlogs.module.scss';

const AllBlogs = () => {
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          All Blog Posts
        </Text>
      </Row>
      <Row className={styles.cardRow}>
        <div className={styles.cards}>
          <CardV2
            title='THE BEST WAY TO INSPIRE PEOPLE'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
          <CardV2
            title='HOW TO SHOW COMPASSION'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
          <CardV2
            title='THE BIBLICAL PURPOSE OF MONEY'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
          <CardV2
            title='THE BEST WAY TO INSPIRE PEOPLE'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
          <CardV2
            title='WHAT IT MEANS TO BE A DISCIPLE'
            desc='We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
          <CardV2
            title='WHAT IT MEANS TO BELIEVE'
            desc='We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
          <CardV2
            title='the modern chruch in 2022'
            desc='We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want'
            speaker='By Mathew Johnson'
            date='Tuesday 13 May, 2021'
            className={styles.cardColor}
          />
        </div>
      </Row>
    </Container>
  );
};

export default AllBlogs;
