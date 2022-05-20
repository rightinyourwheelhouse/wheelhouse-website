import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const WheelhouseClientsContainer = styled.div`
  div {
    margin-top: var(--spacing-default);
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  div,
  a {
    margin: auto;
  }

  &:first-child {
    img {
      max-height: 8rem;
      width: 100%;
    }
  }

  img {
    filter: grayscale(1) invert(0.5);
    width: 40%;
    min-width: 13rem;
    margin: 0 auto;
    transition: 300ms linear !important;
    &:hover {
      filter: unset;
    }
    @media screen and (min-width: ${breakpoints.medium}) {
      width: 60%;
    }
  }
`;
