import React, { useEffect } from 'react';
import Benefits from 'Components/HomeSections/Benefits/Benefits';
import HomeHeader from 'Components/HomeSections/HomeHeader/HomeHeader';
import Upcoming from 'Components/HomeSections/Upcoming/Upcoming';
import Welcome from 'Components/HomeSections/Welcome/Welcome';
import WhatDoWeDo from 'Components/HomeSections/Whatdowedo/WhatDoWeDo';
import CTA from 'Components/HomeSections/CTA/CTA';
import Blog from 'Components/HomeSections/Blog/Blog';
import blogpostsService from 'services/blogposts.service';
import { getAllPosts } from 'store/features/posts';
import { IPost } from 'model/post';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const loadData = async () => {
    const posts = await blogpostsService.getPosts();
    const users = await blogpostsService.getUsers();

    let allPosts = (posts as any).data;
    let allUsers = (users as any).data;
    let allPostss: IPost[] = (posts as any).data;

    dispatch(getAllPosts(allPostss));

    let postWithUser = allPosts.map((post: any) => {
      let user = allUsers.find((user: any) => {
        return user.id == post.userId;
      });
      post = {
        ...post,
        user: user,
      };
      return post;
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <React.Fragment>
      <HomeHeader />
      <WhatDoWeDo />
      <Welcome />
      <Benefits />
      <Upcoming />
      <CTA />
      <Blog />
    </React.Fragment>
  );
};

export default Home;
