import axios from 'axios';

const urlBase = 'http://localhost:3001';

export const getPosts = () => {
  return axios.get(`${urlBase}/posts`);
};

export const getPost = (id) => {
  return axios.get(`${urlBase}/posts/${id}`);
};

export const addPost = (post) => {
  return axios.post(`${urlBase}/posts`, post, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
