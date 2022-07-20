import React from 'react';
import Text from 'Elements/Text/Text';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import styles from './Article.module.scss';
import Register from 'Components/Register/Register';
import ImageHeader from 'Storage/SermonEvent/header.png';

const Article = () => {
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <div className={styles.leftSide}>
          <img src={ImageHeader} />
          <Text className={styles.upcomingText}>Upcoming Event</Text>
          <Text heading={'h2'} className={styles.title}>
            HOW TO TRULY TRUST SOMEONE
          </Text>
          <Text heading={'h6'} className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra
            sit amet aliquam id diam maecenas ultricies.
          </Text>
          <div className={styles.quoteWrapper}>
            <div className={styles.quoteLine}></div>
            <Text heading={'h5'} className={styles.quote}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
            </Text>
          </div>
          <Text heading={'h6'} className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra
            sit amet aliquam id diam maecenas ultricies.
          </Text>
        </div>
        <div className={styles.rightSide}>
          <Register />
        </div>
      </Row>
    </Container>
  );
};

export default Article;
