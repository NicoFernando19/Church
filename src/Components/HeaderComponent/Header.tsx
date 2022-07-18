import React from 'react';
import styles from './Header.module.scss';
import logo from 'Storage/Images/logo.png';
import NavText from 'elements/navText/NavText';
import Button from 'elements/button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div>
        <img src={logo} alt='LOGO' />
      </div>
      <div className={styles.divider}></div>
      <ul className={styles.headerNav}>
        <li className={styles.headerList}>
          <NavText>
            <Link to='/'>
              <a className={styles.textLink}>Home</a>
            </Link>
          </NavText>
        </li>
        <li className={styles.headerList}>
          <NavText>
            <Link to='/about'>
              <a className={styles.textLink}>About Us</a>
            </Link>
          </NavText>
        </li>
        <li className={styles.headerList}>
          <NavText>
            <Link to='/sermons'>
              <a className={styles.textLink}>Sermon</a>
            </Link>
          </NavText>
        </li>
        <li className={styles.headerList}>
          <NavText>
            <Link to='/blog'>
              <a className={styles.textLink}>Blog</a>
            </Link>
          </NavText>
        </li>
      </ul>
      <div className={`${styles.button}`}>
        <Link to={'/contact-us'}>
          <Button primary={true}>Contact Us</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
