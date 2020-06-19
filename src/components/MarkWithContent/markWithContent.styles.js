import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const Mark = styled.mark`
  position: relative;
  background: none;
  font-weight: 700;
  color: currentColor;
  text-align: center;
  z-index: 0;
`;

export const TextContainer = styled.span`
  font-size: 4rem;
  position: absolute;
  text-transform: uppercase;
  top: 100%;
  left: 12px;
  color: ${colors.textLight};
  z-index: 1;
  transform: translateY(-6rem);
`;

export const Image = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.small}) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: scale(0) translate(-50%, -50%);
    transition: transform 0.3s;
    transform-origin: top left;
    display: block;

    img {
      width: 400px;
    }

    &.active {
      top: 50%;
      left: 50%;
      width: 400px;
      display: block;
      transform: scale(1) translate(-50%, -50%);
    }
  }
`;
