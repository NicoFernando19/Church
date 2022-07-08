import React from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.scss";

interface Props {
  imageLeft?: string;
  imageCenter?: string;
  imageRight?: string;
}

const defaultProps: Props = {
  imageLeft: "",
  imageRight: "",
  imageCenter: "",
};

const Gallery: React.FC<Props> = ({
  imageLeft,
  imageCenter,
  imageRight,
}: Props) => {
  return (
    <div className={styles.flex}>
      <div className={`${styles.imageLeft} ${imageLeft}`} />
      <div className={`${styles.imageCenter} ${imageCenter}`} />
      <div className={`${styles.imageRight} ${imageRight}`} />
    </div>
  );
};

Gallery.defaultProps = defaultProps;

Gallery.propTypes = {
  imageLeft: PropTypes.string,
  imageRight: PropTypes.string,
  imageCenter: PropTypes.string,
};

export default Gallery;
