import React, { useEffect, useState } from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Text from 'Elements/Text/Text';
import CardV2 from 'Components/CardV2/CardV2';
import styles from './AllBlogs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import blogpostsService from 'Services/BlogPosts.service';
import { Post, User } from 'Model/Models';

const AllBlogs = () => {
  const { pathname } = useLocation();

  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  const loadData = async () => {
    const posts = await blogpostsService.getPosts();
    const users = await blogpostsService.getUsers();

    const postWithUser = posts.map((post: Post) => {
      const user = users.find((user: User) => {
        return user.id == post.userId;
      });
      post = {
        ...post,
        user: user,
      };
      return post;
    });
    setBlogPosts(postWithUser);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className={styles.padding}>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          All Blog Posts
        </Text>
      </Row>
      <Row className={styles.cardRow}>
        <div className={styles.cards}>
          {blogPosts.length > 0 &&
            blogPosts.map((post: Post, idx) => (
              <Link
                to={`${pathname}/${
                  post.title ? post.title.replaceAll(' ', '_') : ''
                }?id=${post.id}`}
                key={idx}
              >
                <CardV2
                  title={post.title}
                  desc={post.body}
                  speaker={`By ${post.title}`}
                  date='Tuesday 13 May, 2021'
                  className={styles.cardColor}
                />
              </Link>
            ))}
        </div>
      </Row>
    </Container>
  );
};

export default AllBlogs;
