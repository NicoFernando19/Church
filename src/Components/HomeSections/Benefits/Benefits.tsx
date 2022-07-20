import React from 'react';
import Text from 'Elements/Text/Text';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Images from 'Components/Images/Images';
import styles from './Benefits.module.scss';

const Benefits = () => {
  return (
    <Container className={`${styles.margin} ${styles.containerBgColor}`}>
      <Container className={styles.padding}>
        <Row className={styles.row}>
          <Text heading={'h6'} className={styles.subHeadline}>
            Watch and Listen
          </Text>
        </Row>
        <Row className={styles.row}>
          <div className={styles.benefits}>
            <Text heading={'h2'} className={styles.headline}>
              The benefits of joining our church
            </Text>
          </div>
        </Row>
        <Row className={styles.row}>
          <Images />
        </Row>
      </Container>
    </Container>
  );
};

export default Benefits;
