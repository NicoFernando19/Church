import React from 'react';
import Button from 'Elements/Button/Button';
import Text from 'Elements/Text/Text';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
  return (
    <Container className={`${styles.backgroundImage}`}>
      <Container className={`${styles.container}`}>
        <Row className={`${styles.row}`}>
          <Text heading={'h6'} className={styles.welcomeText}>
            Welcome to our Church
          </Text>
        </Row>
        <Row className={`${styles.row}`}>
          <Text heading={'h1'} className={styles.becomeText}>
            Become a part of Our Community
          </Text>
        </Row>
        <Row className={`${styles.row}`}>
          <Button primary={true}>Learn More</Button>
        </Row>
        <Row
          className={`${styles.row} ${styles.paddingTop4} ${styles.justifyContentLeft}`}
        >
          <Text className={styles.line}></Text>
          <Text heading={'h6'} className={`${styles.loremText}`}>
            Lorem ipsum dolot sit amet, consectetur adipiscing elit, sed do.
          </Text>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeHeader;
