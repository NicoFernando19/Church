import React from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import styles from './Body.module.scss';
import ContentImage from 'Storage/blogPost/content.png';
import { Post } from 'model/models';

interface Props {
  blogPost: Post;
}

const Body = ({ blogPost = {} }: Props) => {
  return (
    <Container className={styles.body}>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          {blogPost.title ? blogPost.title : 'LOREM IPSUM DOLOR SIT AMET'}
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta
          lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus
          ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna
          duis convallis convallis tellus id. Feugiat pretium nibh ipsum
          consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet
          porttitor eget.
        </Text>
      </Row>
      <Row className={styles.row}>
        <img src={ContentImage} />
      </Row>
      <Row className={styles.row}>
        <Text heading={'h4'} className={styles.title}>
          {blogPost.title ? blogPost.title : 'LOREM IPSUM DOLOR SIT AMET'}
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta
          lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus
          ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna
          duis convallis convallis tellus id. Feugiat pretium nibh ipsum
          consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet
          porttitor eget.
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.quoteWrapper}>
          <div className={styles.quoteLine}></div>
          <Text heading={'h5'} className={styles.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            faucibus in ornare quam viverra orci sagittis eu volutpat.
          </Text>
        </div>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h4'} className={styles.title}>
          {blogPost.title
            ? blogPost.title
            : 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR'}
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          We both celebrate and challenge the culture around us as we orient our
          lives around Jesus. We want to serve the world around us. It’s why we
          support mission work all across the globe Regardless of what your next
          step in faith is, we want to help you take that next step Our church
          is10% of our annual income to
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          <ul className={styles.ul}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Purus sit amet luctus venenatis lectus magna</li>
            <li>Aenean vel elit scelerisque mauris. Imperdiet sed euismod</li>
          </ul>
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.desc}>
          Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat qui
          porro ab minus voluptas. Dicta praesentium neque vero mollitia aperiam
          sed enim. Lacinia quis vel eros donec ac odio.
        </Text>
      </Row>
    </Container>
  );
};

export default Body;
