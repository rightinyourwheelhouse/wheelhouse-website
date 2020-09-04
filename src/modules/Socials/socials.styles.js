import styled from 'styled-components';

import spacing from '~styles/spacing';

export const SocialsContainer = styled.ul`
  list-style: none;
  margin: -18px 0 0 0;
  padding: 0;

  li {
    margin: 0;
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: ${spacing.column};
    }

    svg {
      max-width: 30px;
    }
  }
`;
