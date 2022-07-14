import React from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import styles from './Header.module.scss';
import { useParams } from 'react-router-dom';
import HeaderImage from 'Storage/blogPost/header.png';

const Header = () => {
  const { title } = useParams();
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text className={styles.relation}>Relationship</Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          {title?.replaceAll('_', ' ')}
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.subHeadline}>
          <Text heading={'h6'} className={styles.subText}>
            13 May, 2018
          </Text>
          <Text heading={'h6'} className={styles.subText}>
            By Mathew Johnson
          </Text>
        </div>
      </Row>
      <Row className={`${styles.row} ${styles.margin}`}>
        <img src={HeaderImage} />
      </Row>
    </Container>
  );
};

export default Header;
