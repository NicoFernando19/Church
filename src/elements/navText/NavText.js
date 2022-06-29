import React from "react";
import styles from "./navText.module.scss";

const NavText = ({ children }) => {
  return <span className={`${styles.navText}`}>{children}</span>;
};

export default NavText;
