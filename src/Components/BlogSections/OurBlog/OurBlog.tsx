import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import React from 'react';
import styles from './OurBlog.module.scss';

const OurBlog = () => {
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Our Blog
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          most recent post
        </Text>
      </Row>
    </Container>
  );
};

export default OurBlog;
