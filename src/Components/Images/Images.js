import React from "react";
import Image from "../image/Image";
import styles from "./Images.module.scss";

const Images = () => {
  return (
    <div className={styles.row}>
      <Image image={`${styles.background} ${styles.nunImage}`}>
        WATCH AND LISTEN TO OUR SERMONS
      </Image>
      <Image image={`${styles.background} ${styles.bibleImage}`}>
        WATCH AND LISTEN TO OUR SERMONS
      </Image>
      <Image image={`${styles.background} ${styles.manWithBook}`}>
        WATCH AND LISTEN TO OUR SERMONS
      </Image>
      <Image image={`${styles.background} ${styles.paintingImage}`}>
        WATCH AND LISTEN TO OUR SERMONS
      </Image>
    </div>
  );
};

export default Images;
