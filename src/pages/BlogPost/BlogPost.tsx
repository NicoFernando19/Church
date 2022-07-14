import Body from 'Components/BlogPostSections/Body/Body';
import Header from 'Components/BlogPostSections/Header/Header';
import React from 'react';
import styles from './BlogPost.module.scss';

const BlogPost = () => {
  return (
    <div className={styles.background}>
      <Header />
      <Body />
    </div>
  );
};

export default BlogPost;
