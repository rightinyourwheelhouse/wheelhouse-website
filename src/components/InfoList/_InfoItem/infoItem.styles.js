import styled from 'styled-components';

import { outline } from '~styles/mixins/text';

export const InfoItemContainer = styled.div`
  position: relative;
  padding: 3rem 0 0 3.6rem;

  p {
    font-size: 1em;
  }
`;

export const ItemNumber = styled.span`
  ${outline()};
  font-size: 80px;
  position: absolute;
  top: 1.9rem;
  left: 1.5rem;
  opacity: 0.2;
`;
