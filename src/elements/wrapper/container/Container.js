import React from "react";
import styles from "./Container.module.scss";
import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Container.defaultProps = {
  className: "",
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
