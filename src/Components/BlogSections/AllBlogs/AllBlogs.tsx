import React from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import CardV2 from 'Components/cardv2/CardV2';
import styles from './AllBlogs.module.scss';
import { Link, useLocation } from 'react-router-dom';

const AllBlogs = () => {
  const { pathname } = useLocation();
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          All Blog Posts
        </Text>
      </Row>
      <Row className={styles.cardRow}>
        <div className={styles.cards}>
          <Link
            to={`${pathname}/${'THE BEST WAY TO INSPIRE PEOPLE'.replaceAll(
              ' ',
              '_'
            )}`}
          >
            <CardV2
              title='THE BEST WAY TO INSPIRE PEOPLE'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
          <Link
            to={`${pathname}/${'HOW TO SHOW COMPASSION'.replaceAll(' ', '_')}`}
          >
            <CardV2
              title='HOW TO SHOW COMPASSION'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
          <Link
            to={`${pathname}/${'THE BIBLICAL PURPOSE OF MONEY'.replaceAll(
              ' ',
              '_'
            )}`}
          >
            <CardV2
              title='THE BIBLICAL PURPOSE OF MONEY'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
          <Link
            to={`${pathname}/${'THE BEST WAY TO INSPIRE PEOPLE'.replaceAll(
              ' ',
              '_'
            )}`}
          >
            <CardV2
              title='THE BEST WAY TO INSPIRE PEOPLE'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
          <Link
            to={`${pathname}/${'WHAT IT MEANS TO BE A DISCIPLE'.replaceAll(
              ' ',
              '_'
            )}`}
          >
            <CardV2
              title='WHAT IT MEANS TO BE A DISCIPLE'
              desc='We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
          <Link
            to={`${pathname}/${'WHAT IT MEANS TO BELIEVE'.replaceAll(
              ' ',
              '_'
            )}`}
          >
            <CardV2
              title='WHAT IT MEANS TO BELIEVE'
              desc='We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
          <Link
            to={`${pathname}/${'the modern chruch in 2022'.replaceAll(
              ' ',
              '_'
            )}`}
          >
            <CardV2
              title='the modern chruch in 2022'
              desc='We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want'
              speaker='By Mathew Johnson'
              date='Tuesday 13 May, 2021'
              className={styles.cardColor}
            />
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default AllBlogs;
