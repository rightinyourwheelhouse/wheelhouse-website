import axios from 'axios';
import { useEffect, useState } from 'react';

async function getUserRepos(link) {
  const splitLink = link.split('/');
  const username = splitLink[3];
  const reposName = splitLink[4];
  if (username) {
    const url = `https://api.github.com/repos/${username}/${reposName}`;
    const result = await axios.get(url);
    return await result.data;
  }
}

export function useUserRepos(link) {
  const [items, setItems] = useState({});

  useEffect(() => {
    async function getData() {
      const repo = await getUserRepos(link);

      setItems({
        repoFullName: repo.full_name,
        htmlUrl: repo.html_url,
        starsgazersCount: repo.stargazers_count,
        description:
          repo.description !== '' || !repo.description ? repo.description : '',
        avatarUrl: repo.owner.avatar_url,
        fullName: repo.owner.login,
      });
    }

    getData();
  }, [link]);

  return items;
}
