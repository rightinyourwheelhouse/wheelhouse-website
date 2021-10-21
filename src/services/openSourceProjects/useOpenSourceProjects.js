import axios from 'axios';

const getUserRepos = async link => {
  const splitLink = link.split('/');
  const username = splitLink[3];
  const reposName = splitLink[4];
  if (username) {
    const url = `https://api.github.com/repos/${username}/${reposName}`;
    const result = await axios.get(url);
    return await result.data;
  }
};

export const useUserRepos = async link => {
  const repo = await getUserRepos(link);
  const items = {
    repoFullName: repo.full_name,
    htmlUrl: repo.html_url,
    starsgazersCount: repo.stargazers_count,
    description:
      repo.description !== '' || !repo.description ? repo.description : '',
    avatarUrl: repo.owner.avatar_url,
    fullName: repo.owner.login,
  };

  return items;
};
