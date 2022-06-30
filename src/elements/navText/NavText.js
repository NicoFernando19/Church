import React from "react";
import styles from "./navText.module.scss";
import PropTypes from "prop-types";

const NavText = ({ children }) => {
  return <span className={`${styles.navText}`}>{children}</span>;
};

NavText.propTypes = {
  children: PropTypes.node,
};

export default NavText;
