import React from 'react';
import Text from 'Elements/Text/Text';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Container className={styles.backgroundImage}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Text heading={'h6'} className={styles.contactText}>
            Contact
          </Text>
        </Row>
        <Row className={styles.row}>
          <Text heading={'h1'} className={styles.getInTouch}>
            Get in touch with our CHURCH
          </Text>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
