import { IPost, PostsAction } from 'model/post';
import { ActionType } from '../actionTypes/actionTypes';

export const getAllPosts = (posts: IPost[]): PostsAction => {
  const action: PostsAction = {
    type: ActionType.GetPosts,
    payload: posts,
  };
  return action;
};
