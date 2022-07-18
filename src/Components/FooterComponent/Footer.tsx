import React from 'react';
import styles from './Footer.module.scss';
import { Logo, Facebook, Twitter, LinkedIn } from 'Storage/footerImage/index';
import Text from 'elements/text/Text';
import Input from 'elements/input/Input';
import Button from 'elements/button/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.leftSide}`}>
        <img src={Logo} alt='LOGO' />
        <Text>&copy; Copyright Finsweet 2022</Text>
        <br />
        <Text>(480) 555-0103</Text>
        <Text>4517 Washington Ave.</Text>
        <Text>Finsweet@example.com</Text>
      </div>
      <div className={`${styles.center}`}>
        <ul className={`${styles.footerNav} ${styles.removeMargin}`}>
          <li>
            <Text heading={'h6'} className={styles.textHeaderTop}>
              Quicklinks
            </Text>
          </li>
          <li>
            <Text className={styles.textLink}>
              <Link to='/about'>
                <a className={styles.textLink}>About Us</a>
              </Link>
            </Text>
          </li>
          <li>
            <Text className={styles.textLink}>Sermons</Text>
          </li>
          <li>
            <Text className={styles.textLink}>Events</Text>
          </li>
          <li>
            <Text className={styles.textLink}>Blog</Text>
          </li>
        </ul>
        <ul className={`${styles.footerNav} ${styles.removeMargin}`}>
          <li>
            <Text heading={'h6'} className={styles.textHeaderTop}>
              Connect
            </Text>
          </li>
          <li>
            <img src={Facebook} alt='Facebook' />
            <img
              src={Twitter}
              alt='Twitter'
              style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
            />
            <img src={LinkedIn} alt='LinkedIn' />
          </li>
        </ul>
      </div>
      <div className={`${styles.rightSide}`}>
        <Text
          heading={'h4'}
          className={`${styles.removeMargin} ${styles.subscribeText}`}
        >
          Subscribe to get latest updates and news
        </Text>
        <div className={`${styles.formField}`}>
          <Input
            type={'text'}
            placeholder={'Yourmail@gmail.com'}
            className={`${styles.inputField}`}
          />
          <Button primary={true} className={`${styles.btn}`}>
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
