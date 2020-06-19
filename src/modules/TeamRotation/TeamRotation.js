import React, { memo, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { RotationContainer } from './teamRotation.styles';

const TeamRotation = () => {
  const [index, setIndex] = useState(0);

  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "team-rotation" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const length = allFile.edges.length - 1;
  const handleNext = () => {
    if (index === length) {
      return setIndex(0);
    }

    return setIndex(index + 1);
  };

  const { node } = allFile.edges[index];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <RotationContainer>
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, ' ').substring(2)}
      />
    </RotationContainer>
  );
};

export default memo(TeamRotation);
