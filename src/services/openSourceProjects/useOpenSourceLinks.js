import { useStaticQuery, graphql } from 'gatsby';
import { useEffect, useState } from 'react';

import { getGithubRepo } from '~services/openSourceProjects/useOpenSourceProjects';

const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { openSourceProject: { repos_links: { ne: null } } }
      }
    ) {
      nodes {
        frontmatter {
          openSourceProject {
            repos_links
          }
        }
      }
    }
  }
`;

export function useBestRepoByEmployees() {
  const [bestRepos, setBestRepos] = useState([]);

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(query);

  useEffect(() => {
    async function getData() {
      const repoLinks = nodes.map(
        ({ frontmatter: { openSourceProject } }) =>
          openSourceProject.repos_links,
      );

      const newBestRepos = [];

      for (const array of repoLinks) {
        const uniqueLink = [...new Set(array)];
        const promises = uniqueLink.map(getGithubRepo);
        let repos = await Promise.all(promises);
        repos = repos.sort((a, b) => a.stargazers_count - b.stargazers_count);
        newBestRepos.push(repos[0]);
      }

      setBestRepos(newBestRepos);
    }
    getData();
  }, [nodes]);

  return bestRepos;
}
