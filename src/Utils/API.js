import axios from 'axios';

const urlBase = 'http://localhost:3000';

export const getHotel = (id) => {
  return axios.get(`${urlBase}/${id}`);
};

// export const getPost = (id) => {
//   return axios.get(`${urlBase}/posts/${id}`);
// };

// export const addPost = (post) => {
//   return axios.post(`${urlBase}/posts`, post, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };
