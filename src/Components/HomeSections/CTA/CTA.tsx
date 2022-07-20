import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Tile from 'Elements/Wrappers/Tile/Tile';
import styles from './CTA.module.scss';
import Text from 'Elements/Text/Text';
import Button from 'Elements/Button/Button';
import QuoteIcon from 'Storage/Images/Quoteicon.png';

const CTA = () => {
  return (
    <Container className={`${styles.margin} ${styles.containerBg}`}>
      <div className={styles.containerOverlay}></div>
      <Row className={styles.row}>
        <Tile className={styles.tile}>
          <div className={styles.wrapper}>
            <div className={styles.leftSide}>
              <Text heading={'h2'} className={styles.tileTitle}>
                We want to serve the world around us
              </Text>
              <Text className={styles.tileDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </Text>
              <Button primary={true}>Visit</Button>
            </div>
            <div className={styles.rightSide}>
              <img src={QuoteIcon} />
            </div>
          </div>
          <div className={styles.tileFooter}></div>
        </Tile>
      </Row>
    </Container>
  );
};

export default CTA;
