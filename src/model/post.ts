import { AnyAction } from '@reduxjs/toolkit';

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type PostsState = {
  posts: IPost[];
};

export interface PostsAction extends AnyAction {
  type: string;
  payload: IPost[];
}

export const initialPostsState: PostsState = {
  posts: [
    {
      id: 1,
      title: 'post 1',
      body: 'Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi',
      userId: 1,
    },
  ],
};
