import styled from 'styled-components';

export const OpenSourceContainer = styled.div`
  text-align: center;

  h2 {
    margin: 0 auto var(--spacing-default) auto;
  }

  p {
    font-size: 1.7rem;
  }

  svg {
    max-width: 200px;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    text-decoration-thickness: 0.1rem;
    font-weight: 400;
  }
`;

export const Cta = styled.div`
  font-size: var(--font-size-default);
  padding: var(--spacing-default);
`;
