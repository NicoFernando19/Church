import React from "react";
import styles from "./Text.module.scss";
import PropTypes from "prop-types";

const Text = ({ heading, children, className }) => {
  return (
    <span
      className={`${styles.text} ${
        heading
          ? heading.includes("h1")
            ? styles.heading1
            : heading.includes("h2")
            ? styles.heading2
            : heading.includes("h3")
            ? styles.heading3
            : heading.includes("h4")
            ? styles.heading4
            : heading.includes("h5")
            ? styles.heading5
            : styles.heading6
          : styles.defaultSize
      }`}
    >
      <p className={`${className}`}>{children}</p>
    </span>
  );
};

Text.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
