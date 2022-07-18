import axios from 'axios';
import config from 'static/config';

export default {
  async getPosts() {
    let result = {};
    await axios
      .get(`${config.API}${config.POST}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        result = res;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },

  async getUsers() {
    let result = {};
    await axios
      .get(`${config.API}${config.USER}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        result = res;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },
};
