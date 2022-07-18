import { ActionType } from 'store/actionTypes/actionTypes';
import { PostsState, PostsAction, initialPostsState } from 'model/post';
import { AnyAction } from '@reduxjs/toolkit';

interface Action {
  type: string;
  payload: object[];
}

interface userState {
  users: object[];
}

interface PostDetail {
  post: object;
}

const initialUserState = {
  users: [],
} as userState;

const initialPostDetail = {
  post: [],
} as PostDetail;

export const postReducer = (
  state: PostsState = initialPostsState,
  action: AnyAction
): PostsState => {
  switch (action.type) {
    case ActionType.GetPosts:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const postDetailReducer = (
  state: PostDetail & typeof initialPostDetail,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionType.SelectedPost:
      return {
        ...state,
        ...payload,
      };
    case ActionType.UnselectedPost:
      return state;
    default:
      return state;
  }
};

export const userReducer = (
  state: userState & typeof initialUserState,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionType.GetUsers:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
