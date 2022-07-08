import React from "react";
import styles from "./Header.module.scss";
import logo from "Storage/Images/logo.png";
import NavText from "elements/navText/NavText";
import Button from "elements/button/Button";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div>
        <img src={logo} alt="LOGO" />
      </div>
      <div className={styles.divider}></div>
      <ul className={styles.headerNav}>
        <li className={styles.headerList}>
          <NavText>Home</NavText>
        </li>
        <li className={styles.headerList}>
          <NavText>About Us</NavText>
        </li>
        <li className={styles.headerList}>
          <NavText>Sermon</NavText>
        </li>
        <li className={styles.headerList}>
          <NavText>Blog</NavText>
        </li>
      </ul>
      <div className={`${styles.button}`}>
        <Button primary={true}>Contact Us</Button>
      </div>
    </header>
  );
};

export default Header;
