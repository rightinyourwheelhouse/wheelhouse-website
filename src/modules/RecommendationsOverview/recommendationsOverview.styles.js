import styled from 'styled-components';

import spacing from '~styles/spacing';

export const RecommendationsContainer = styled.div`
  margin: 32px 0;
`;

export const RecommendationsItemContainer = styled.div`
  display: block;
  float: left;
  clear: left;
  margin-top: 16px;
  padding-bottom: ${spacing.default};
  margin-bottom: ${spacing.default};

  h3 {
    text-transform: none;
  }

  &:not(:last-child){
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  p {
    margin: 6px 0;
    font-size: 1rem;
  }
`;

export const RecommendationsImage = styled.div``;
