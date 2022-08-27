import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import React from 'react';
import styles from './Header.module.scss';
import Logo from 'Storage/StyleGuide/Logo.png';
import Text from 'Elements/Text/Text';

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
