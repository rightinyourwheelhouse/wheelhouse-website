import styled from 'styled-components';

import colors from '~styles/colors';

export const BlogContainer = styled.div`
  margin: 32px 0;
`;

export const BlogItemContainer = styled.div`
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
