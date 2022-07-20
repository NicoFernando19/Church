import React from 'react';
import Tile from 'Elements/Wrappers/Tile/Tile';
import styles from './Register.module.scss';
import Text from 'Elements/Text/Text';
import Button from 'Elements/Button/Button';

const Register = () => {
  return (
    <Tile className={styles.padding}>
      <Text heading={'h4'} className={styles.title}>
        Register Now
      </Text>
      <div className={styles.infoWrapper}>
        <Text heading={'h6'} className={styles.textInfo}>
          <div className={styles.addressIcon}></div>
          No 233 Main St. New York, United States
        </Text>
        <Text heading={'h6'} className={styles.textInfo}>
          <div className={styles.timeIcon}></div>
          13 May, 2018
        </Text>
      </div>
      <Text className={styles.label}>Full Name</Text>
      <input type={'text'} className={styles.input} value='Leonard John' />
      <Text className={styles.label}>Email</Text>
      <input type={'text'} className={styles.input} value='admin@abc.com' />
      <Button primary={true} className={styles.button}>
        Register Now
      </Button>
    </Tile>
  );
};

export default Register;
