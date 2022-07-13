import AllBlogs from 'Components/BlogSections/AllBlogs/AllBlogs';
import OurBlog from 'Components/BlogSections/OurBlog/OurBlog';
import React from 'react';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <div className={styles.background}>
      <OurBlog />
      <AllBlogs />
    </div>
  );
};

export default Blog;
