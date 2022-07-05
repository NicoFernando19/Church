import React from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.scss";

const Gallery = ({ imageLeft, imageCenter, imageRight }) => {
  return (
    <div className={styles.flex}>
      <div className={`${styles.imageLeft} ${imageLeft}`} />
      <div className={`${styles.imageCenter} ${imageCenter}`} />
      <div className={`${styles.imageRight} ${imageRight}`} />
    </div>
  );
};

Gallery.defaultProps = {
  imageLeft: "",
  imageRight: "",
  imageCenter: "",
};

Gallery.propTypes = {
  imageLeft: PropTypes.string,
  imageRight: PropTypes.string,
  imageCenter: PropTypes.string,
};

export default Gallery;
