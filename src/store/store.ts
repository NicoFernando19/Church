import { configureStore } from '@reduxjs/toolkit';
import {
  postReducer,
  userReducer,
  postDetailReducer,
} from './reducers/reducers';

const store = configureStore({
  reducer: {
    posts: postReducer,
    // users: userReducer,
    // postDetail: postDetailReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
