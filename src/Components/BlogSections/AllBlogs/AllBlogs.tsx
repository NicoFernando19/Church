import React, { useEffect, useState } from 'react';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import Text from 'elements/text/Text';
import CardV2 from 'Components/cardv2/CardV2';
import styles from './AllBlogs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import blogpostsService from 'services/blogposts.service';

const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const { pathname } = useLocation();

  const loadData = async () => {
    const posts = await blogpostsService.getPosts();
    const users = await blogpostsService.getUsers();

    const allPosts = (posts as any).data;
    const allUsers = (users as any).data;

    const postWithUser = allPosts.map((post: any) => {
      const user = allUsers.find((user: any) => {
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
            blogPosts.map((post: any, idx) => (
              <Link
                to={`${pathname}/${post.title.replaceAll(' ', '_')}?id=${
                  post.id
                }`}
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
