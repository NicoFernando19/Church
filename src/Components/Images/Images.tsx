import React from 'react';
import CardImage from 'Components/CardImage/CardImage';
import styles from './Images.module.scss';

const Images = () => {
  return (
    <div className={styles.row}>
      <CardImage
        image={`${styles.background} ${styles.nunImage}`}
        title={'WATCH AND LISTEN TO OUR SERMONS'}
        desc={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        }
      />
      <CardImage
        image={`${styles.background} ${styles.bibleImage}`}
        title={'WATCH AND LISTEN TO OUR SERMONS'}
      />
      <CardImage
        image={`${styles.background} ${styles.manWithBook}`}
        title={'WATCH AND LISTEN TO OUR SERMONS'}
      />
      <CardImage
        image={`${styles.background} ${styles.paintingImage}`}
        title={'WATCH AND LISTEN TO OUR SERMONS'}
      />
    </div>
  );
};

export default Images;
