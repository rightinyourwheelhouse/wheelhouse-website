import styled from 'styled-components';

export const BlogContainer = styled.div`
  margin: 32px 0;
`;

export const BlogItemContainer = styled.div`
  display: block;
  float: left;
  clear: left;
  margin-top: 16px;

  &:hover {
    color: var(--color-primary);
  }

  p {
    margin: 0%;
    font-size: 1rem;
  }
`;
