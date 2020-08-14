import styled from 'styled-components';

import colors from '~styles/colors';

export const RecommendationsContainer = styled.div`
  margin: 32px 0;
`;

export const RecommendationsItemContainer = styled.div`
  display: block;
  float: left;
  clear: left;
  margin-top: 16px;

  &:hover {
    color: ${colors.primary};
  }

  p {
    margin: 0%;
    font-size: 1rem;
  }
`;
