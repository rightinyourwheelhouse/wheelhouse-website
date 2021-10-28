import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

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

export function useOpenSourceLinks() {
  const reposLink = [];
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(query);
  const items = useMemo(() => {
    const frontmatter = nodes.map(({ frontmatter: { openSourceProject } }) => ({
      ...openSourceProject,
    }));
    return frontmatter;
  }, [nodes]);

  items.forEach(item => {
    const linkExists = reposLink.findIndex(link => link === item);
    if (linkExists === -1) {
      reposLink.push(item.repos_links[0]);
    }
  });

  return reposLink;
}
