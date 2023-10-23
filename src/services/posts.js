import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:3000/api/posts'
});

async function getPosts() {
  try {
    const { data } = await api.get('/');
    return data;
  } catch (err) {
    return [];
  }
}

export default {
  getPosts
};
