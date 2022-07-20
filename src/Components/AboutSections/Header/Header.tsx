import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Text from 'Elements/Text/Text';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Container className={styles.backgroundImage}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Text heading={'h6'} className={styles.welcomeText}>
            About Us
          </Text>
        </Row>
        <Row className={styles.row}>
          <Text heading={'h1'} className={styles.becomeText}>
            Serving the world around us
          </Text>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
