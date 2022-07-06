import React from "react";
import Text from "../../elements/text/Text";
import styles from "./CardImage.module.scss";
import PropTypes from "prop-types";

const CardImage = ({ image, title, desc }) => {
  return (
    <div className={`${styles.background} ${image}`}>
      <div className={styles.titleWrapper}>
        <Text heading={"h4"} className={styles.title}>
          {title}
        </Text>
        <Text className={styles.desc}>{desc}</Text>
      </div>
    </div>
  );
};

CardImage.defaultProps = {
  image: styles.defaultBackground,
  title: "Watch and listen to our sermons",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default CardImage;
