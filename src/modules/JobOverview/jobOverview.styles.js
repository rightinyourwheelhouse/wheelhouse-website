import styled from 'styled-components';

import spacing from '~styles/spacing';

export const JobTitle = styled.span`
  display: block;
  font-size: 2rem;
  text-transform: none;
  font-weight: 900;
`;

export const JobItemContainer = styled.div`
  display: block;
  margin-top: 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: ${spacing.default};

  h3 {
  }

  &:hover {
    color: var(--color-primary);
  }

  p {
    margin: 0%;
    font-size: 1rem;
  }
`;
