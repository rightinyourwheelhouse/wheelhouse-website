import styled from 'styled-components';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

const DEFAULT_COLORS = [
  '#0000E0',
  '#FF8360',
  '#F3DE2C',
  '#754668',
  '#0000E0',
  '#FF5E5B',
  colors.primary,
];

export const InnerContent = styled.div`
  z-index: 10;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  padding-left: ${({ centered }) => (centered ? '0' : '80px')};

  button {
    margin-top: 30px;
  }
`;

export const WelcomeHeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-content: center;
  align-items: center;
  text-align: left;
  justify-content: flex-start;
  padding: ${spacing.large} 0;
  position: relative;
  margin-top: 30px;


  svg {
    position: relative;
    z-index: 10;
    display: block;

    max-width: unset !important;
  }

  .background {

  }

  div {
    font-size: 1.6rem;
    line-height: 1.7;
    /* color: ${colors.textLight}; */
    width: 100%;

  }



  svg {
    display: block;
    width: 100%;
    max-width: 110px;
  }
`;

export const ButtonContainer = styled.div`
  button {
    overflow: visible;
  }
`;

export const MaskContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 99%;
  margin: auto;
  transition: height 0.5s;

  > svg {
    position: absolute;
    opacity: ${({ loaded }) => (loaded ? '1' : '0')};
    transform: ${({ loaded }) => (loaded ? 'scaleX(1) scaleY(1) scaleZ(1)' : 'scale(0.01, 0.01)')};
    transition: opacity 200ms ease 0s, transform 1800ms ease-in-out 0s;
    transform-style: preserve-3d;
    transition: all 0.3s;
    z-index: 0;

    path {
      transition: all 0.3s;
    }

    &:first-of-type {
      left: 40%;
      top: 50%;
      width: 100%;
      height: 100%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[0]};
      }
    }

    &:nth-of-type(2) {
      left: -20%;
      top: -58%;
      width: 110%;
      height: 160%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[1]};
      }
    }

    &:nth-of-type(3) {
      left: -36%;
      top: 55%;
      width: 120%;
      height: 100%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[2]};
      }
    }

    &:nth-of-type(4) {
      left: 10%;
      top: 100%;
      width: 100%;
      height: 100%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[3]};
      }
    }

    &:nth-of-type(5) {
      left: 50%;
      top: -20%;
      width: 100%;
      height: 80%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[4]};
      }
    }

    &:nth-of-type(6) {
      left: -25%;
      top: -15%;
      width: 60%;
      height: 100%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[5]};
      }
    }

    &:nth-of-type(7) {
      left: -20%;
      top: -10%;
      width: 50%;
      height: 65%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[6]};
      }
    }

    &:nth-of-type(8) {
      left: 60%;
      top: -12%;
      width: 100%;
      height: 100%;

      path {
        transition: all 0.3s;
        fill: ${DEFAULT_COLORS[7]};
      }
    }
  }

  svg {
    max-width: unset;
  }
`;

export const InnerContainer = styled.div`
  z-index: 1;
  display: block;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  z-index: -1;
  position: relative;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

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
            transition: all 1.3s;
            left: -50%;
            top: -30%;
            width: 200%;
            height: 200%;
          }
        }
      }
    }
`;
