import axios from 'axios';

export const getUserRepos = ({ username, reposName }) => {
  if (username) {
    const url = `https://api.github.com/repos/${username}/${reposName}`;
    const result = axios.get(url);
    return result;
  }
};
