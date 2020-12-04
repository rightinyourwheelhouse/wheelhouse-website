import styled from 'styled-components';

export default styled.ol`
  margin: var(--spacing-extra-large) 0 0 0;

  li {
    margin-bottom: var(--spacing-large);
    padding-bottom: var(--spacing-large);

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  a {
    text-decoration: underline;
    color: var(--color-text-primary-900);

    &:hover {
      color: var(--color-primary);
    }
  }

  blockquote {
    margin-top: 1em;
    margin-bottom: 0;

    * {
      font-size: 1.1rem;
    }
  }
`;
