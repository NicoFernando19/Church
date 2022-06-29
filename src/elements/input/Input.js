import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
