import React from "react";
import PropTypes from "prop-types";
import Text from "../../elements/text/Text";
import styles from "./CardV1.module.scss";

const CardV1 = ({ icon, title, children }) => {
  return (
    <div className={`${styles.card} ${styles.bgColor}`}>
      <div className={styles.padding}>
        <div className={`${styles.circle} ${icon}`}></div>
        <Text
          heading={"h4"}
          className={`${styles.textColor} ${styles.titleText}`}
        >
          {title}
        </Text>
        <Text
          heading={"h6"}
          className={`${styles.textColor} ${styles.descText}`}
        >
          {children}
        </Text>
      </div>
      <div className={styles.cardFooter}></div>
    </div>
  );
};

CardV1.defaultProps = {
  icon: "Icon",
  title: "Title here",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

CardV1.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardV1;
