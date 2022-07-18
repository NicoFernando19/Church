import axios from 'axios';
import config from 'static/config';
import { Post, User } from 'model/models';

export default {
  async getPosts() {
    let result: Post[] = [];
    await axios
      .get(`${config.API}${config.POST}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },

  async getPostDetail(postId: number) {
    let result = {};
    await axios
      .get(`${config.API}${config.POST}/${postId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },

  async getUsers() {
    let result: User[] = [];
    await axios
      .get(`${config.API}${config.USER}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },

  async getUserDetail(userId: number) {
    let result = {};
    await axios
      .get(`${config.API}${config.USER}/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },
};
