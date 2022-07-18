import Body from 'Components/BlogPostSections/Body/Body';
import Header from 'Components/BlogPostSections/Header/Header';
import { Post } from 'model/models';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import blogpostsService from 'services/blogposts.service';
import styles from './BlogPost.module.scss';

const BlogPost = () => {
  const [query] = useSearchParams();

  const [blogPost, setBlogPost] = useState({});

  const loadData = async () => {
    const postId = query.get('id') || 0;
    const post: Post = await blogpostsService.getPostDetail(+postId);
    const userId = post.userId || 0;
    const user = await blogpostsService.getUserDetail(userId);

    const postWithUser =
      postId == 0
        ? {}
        : {
            ...post,
            user: user,
          };
    setBlogPost(postWithUser);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={styles.background}>
      <Header blogPost={blogPost} />
      <Body blogPost={blogPost} />
    </div>
  );
};

export default BlogPost;
