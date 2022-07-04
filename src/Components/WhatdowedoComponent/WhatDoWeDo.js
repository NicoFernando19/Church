import React from "react";
import Text from "../../elements/text/Text";
import Container from "../../elements/wrapper/container/Container";
import Row from "../../elements/wrapper/row/Row";
import CardV1 from "../cardv1/CardV1";
import styles from "./WhatDoWeDo.module.scss";

const WhatDoWeDo = () => {
  return (
    <Container className={`${styles.margin}`}>
      <Row className={`${styles.row}`}>
        <Text className={`${styles.subHeadline}`}>Sub-Headline</Text>
      </Row>
      <Row className={`${styles.row}`}>
        <Text heading={"h2"} className={`${styles.headline}`}>
          A Church that&apos;s relevant
        </Text>
      </Row>
      <Row className={`${styles.row}`}>
        <CardV1 icon={`${styles.prayIcon}`} title="About Us">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardV1>
        <CardV1 icon={`${styles.getInvolvedIcon}`} title="Get Involved">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardV1>
        <CardV1 icon={`${styles.givingIcon}`} title="Giving Back">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardV1>
      </Row>
    </Container>
  );
};

export default WhatDoWeDo;
