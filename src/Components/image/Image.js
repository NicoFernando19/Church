import React from "react";
import Text from "../../elements/text/Text";
import styles from "./Image.module.scss";
import PropTypes from "prop-types";

const Image = ({ image, children, desc }) => {
  return (
    <div className={`${styles.background} ${image}`}>
      <div className={styles.titleWrapper}>
        <Text heading={"h4"} className={styles.title}>
          {children}
        </Text>
        <Text className={styles.desc}>{desc}</Text>
      </div>
    </div>
  );
};

Image.defaultProps = {
  image: styles.defaultBackground,
  children: "Watch and listen to our sermons",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  desc: PropTypes.string,
};

export default Image;
