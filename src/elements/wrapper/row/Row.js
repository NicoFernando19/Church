import React from "react";
import styles from "./Row.module.scss";
import PropTypes from "prop-types";

const Row = ({ children, className }) => {
  return <div className={`${styles.row} ${className}`}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Row;
