import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import React from 'react';
import styles from './Header.module.scss';
import Logo from 'Storage/styleGuide/Logo.png';
import Text from 'elements/text/Text';

const Header = () => {
  return (
    <Container>
      <Row className={styles.row}>
        <Text className={styles.text}>Style Guide</Text>
        <img src={Logo} />
      </Row>
    </Container>
  );
};

export default Header;
