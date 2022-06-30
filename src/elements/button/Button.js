import React from "react";
import styles from "./button.module.scss";

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

export default Button;
