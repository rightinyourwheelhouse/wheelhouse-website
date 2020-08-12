import styled from 'styled-components';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

const DEFAULT_COLORS = [
  '#0000E0',
  '#FF8360',
  colors.secundary,
  colors.tertiary,
  '#0000E0',
  '#FF5E5B',
  colors.primary,
];

export const InnerContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding-left: ${({ centered }) => (centered ? '0' : '80px')};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  z-index: 10;

  button {
    margin-top: 30px;
  }
`;

export const WelcomeHeroContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  min-height: 100vh;
  padding: ${spacing.large} 0;
  position: relative;
  text-align: left;

  svg {
    display: block;
    max-width: unset !important;
    position: relative;
    z-index: 10;
  }

  div {
    font-size: 1.6rem;
    line-height: 1.7;
    width: 100%;
  }



  svg {
    display: block;
    max-width: 110px;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  button {
    overflow: visible;
  }
`;

export const MaskContainer = styled.div`
  bottom: 0px;
  display: block;
  height: 99%;
  left: 0px;
  margin: auto;
  overflow: hidden;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: height 0.5s;
  width: 100%;

  > svg {
    opacity: ${({ loaded }) => (loaded ? '1' : '0')};
    position: absolute;
    transform-style: preserve-3d;
    transform: ${({ loaded }) => (loaded ? 'scaleX(1) scaleY(1) scaleZ(1)' : 'scale(0.01, 0.01)')};
    transition: all 0.3s;
    transition: opacity 200ms ease 0s, transform 1300ms ease-in-out 0s;
    z-index: 0;

    path {
      transition: all 0.3s;
    }

    &:first-of-type {
      height: 100%;
      left: 40%;
      top: 50%;
      width: 100%;

      path {
        fill: ${DEFAULT_COLORS[0]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(2) {
      height: 160%;
      left: -20%;
      top: -58%;
      width: 110%;

      path {
        fill: ${DEFAULT_COLORS[1]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(3) {
      height: 100%;
      left: -36%;
      top: 55%;
      width: 120%;

      path {
        fill: ${DEFAULT_COLORS[2]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(4) {
      height: 100%;
      left: 10%;
      top: 100%;
      width: 100%;

      path {
        fill: ${DEFAULT_COLORS[3]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(5) {
      height: 80%;
      left: 50%;
      top: -20%;
      width: 100%;

      path {
        fill: ${DEFAULT_COLORS[4]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(6) {
      height: 100%;
      left: -25%;
      top: -15%;
      width: 60%;

      path {
        fill: ${DEFAULT_COLORS[5]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(7) {
      height: 65%;
      left: -20%;
      top: -10%;
      width: 50%;

      path {
        fill: ${DEFAULT_COLORS[6]};
        transition: all 0.3s;
      }
    }

    &:nth-of-type(8) {
      height: 100%;
      left: 60%;
      top: -12%;
      width: 100%;

      path {
        fill: ${DEFAULT_COLORS[7]};
        transition: all 0.3s;
      }
    }
  }

  svg {
    max-width: unset;
  }
`;

export const InnerContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-left: auto;
  margin-right: auto;
  margin-right: auto;
  max-width: 1000px;
  position: relative;
  width: 100%;
  z-index: -1;
  z-index: 1;

  > svg {
    transition: transform 300ms ease-in-out 0s;
  }

  &:hover {
    > svg {
      transform: scale(0.9, 0.9);
      transform-style: preserve-3d;
      transition: transform 300ms ease-in-out 0s;
    }

      ${MaskContainer} {
        height: 105%;

        > svg {
          &:nth-of-type(${DEFAULT_COLORS.length}) {
            height: 200%;
            left: -50%;
            top: -30%;
            transition: all 1.3s;
            width: 200%;
          }
        }
      }
    }
`;
