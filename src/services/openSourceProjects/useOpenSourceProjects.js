import axios from 'axios';
import { useEffect, useState } from 'react';

export async function getGithubRepo(link) {
  const splitLink = link.split('/');
  const username = splitLink[3];
  const reposName = splitLink[4];
  if (username) {
    const url = `https://api.github.com/repos/${username}/${reposName}`;
    const result = await axios.get(url);
    const repo = result.data;

    const obj = {
      repoFullName: repo.full_name,
      htmlUrl: repo.html_url,
      starsgazersCount: repo.stargazers_count,
      description:
        repo.description !== '' || !repo.description ? repo.description : '',
      avatarUrl: repo.owner.avatar_url,
      fullName: repo.owner.login,
    };

    return obj;
  }
}

export function useGithubRepo(link) {
  const [item, setItem] = useState({});

  useEffect(() => {
    async function getData() {
      const repo = await getGithubRepo(link);
      setItem(repo);
    }
    getData();
  }, [link]);

  return item;
}
