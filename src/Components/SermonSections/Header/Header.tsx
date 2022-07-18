import React from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Container className={styles.backgroundImage}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Text heading={'h6'} className={styles.welcomeText}>
            Sermon
          </Text>
        </Row>
        <Row className={styles.row}>
          <Text heading={'h1'} className={styles.becomeText}>
            take part in OUR SERMON
          </Text>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
