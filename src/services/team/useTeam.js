import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "employees" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            name
            role
            visible
            description
            showPickedBy
            image {
              extension
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export function useTeam({
  current = null,
  name = null,
  includeInvisible = false,
} = {}) {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(query);

  const items = useMemo(() => {
    let nodes = edges.map(
      ({
        node: {
          id,
          frontmatter,
          excerpt,
          rawMarkdownBody,
          fields: { slug },
        },
      }) => ({
        ...frontmatter,
        excerpt,
        id,
        rawMarkdownBody,
        slug,
      }),
    );

    if (!includeInvisible) {
      nodes = nodes.filter(({ visible }) => !!visible);
    }

    if (name) {
      nodes = nodes.filter(
        ({ name: n }) => name.toLowerCase() === n.toLowerCase(),
      );
    }

    if (current) {
      nodes = nodes.filter(({ id }) => id !== current);
    }

    return nodes;
  }, [edges, includeInvisible, name, current]);

  if (name) {
    return items.length > 0 ? items[0] : null;
  }

  return items;
}
