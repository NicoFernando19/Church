import React from "react";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
