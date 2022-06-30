import React from "react";
import styles from "./button.module.scss";
import PropTypes from "prop-types";

const Button = ({ primary, type, children, className }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${styles.button} ${
        primary ? styles.primary : styles.secondary
      } ${styles.text} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
