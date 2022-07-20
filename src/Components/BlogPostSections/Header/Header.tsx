import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Text from 'Elements/Text/Text';
import styles from './Header.module.scss';
import { useParams } from 'react-router-dom';
import HeaderImage from 'Storage/BlogPost/header.png';
import { Post } from 'Model/Models';

interface Props {
  blogPost: Post;
}

const Header = ({ blogPost = {} }: Props) => {
  const { title } = useParams();
  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text className={styles.relation}>Relationship</Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          {blogPost.title ? blogPost.title : title?.replaceAll('_', ' ')}
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.subHeadline}>
          <Text heading={'h6'} className={styles.subText}>
            13 May, 2018
          </Text>
          <Text heading={'h6'} className={styles.subText}>
            By {blogPost.user?.name ? blogPost.user?.name : 'Mathew Johnson'}
          </Text>
        </div>
      </Row>
      <Row className={`${styles.row} ${styles.margin}`}>
        <img src={HeaderImage} />
      </Row>
    </Container>
  );
};

export default Header;
