import styled from 'styled-components';

import colors from '~styles/colors';
import fonts from '~styles/fonts';
import breakpoints from '~styles/breakpoints';
import spacing from '~styles/spacing';

export const navigationHeight = '143px';

export const Nav = styled.nav`
  --background: ${({ background }) => background};
  --height: ${navigationHeight};

  align-items: center;
  background: var(--background);
  display: flex;
  flex: 100px 0 0;
  justify-content: space-between;
  height: var(--height);
  position: absolute;
  top: 0;
  width: 100%;

  & + section {
    padding-top: 250px !important;
  }

  a {
    text-decoration: none;
  }

  .logo {
    width: 77px;
    height: 95px;
    position: absolute;
    top: 10px;
    left: ${spacing.default};

    svg {
      width: 77px;
      height: 95px;
    }
  }
`;

export const Item = styled.div`
  margin: 0 auto;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin: 0%;
  }

  a {
    font-family: ${fonts.family};
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    font-size: 18px;
    font-weight: 500;
    line-height: 120%;
    padding: 8px 10px 8px 10px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.textLight};

    span {
      margin-left: 12px;
    }

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.3rem;
      padding: 16px 0 14px 20px;

      span.label {
        display: none;
      }
    }
  }
`;

export const ItemsContainer = styled.div`
  --background: ${({ background }) => background};

  background: var(--background);
  height: 0;
  overflow: hidden;
  margin-top: -100vh;
  display: flex;
  width: 100vw;
  height: 0;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-top: 0;
    height: auto;
    flex-direction: row;
    padding: 0px 1.0875rem;
    margin: auto;
    height: 75px;
  }

  &.active {
    height: 100vh;
    overflow: visible;
    padding-top: 20%;
    margin-top: 0;
    position: fixed;

    @media screen and (min-width: ${breakpoints.medium}) {
      height: auto;
    }
  }
`;

export const Items = styled.div`
  --background: ${({ background }) => background};

  background: var(--background);
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    position: relative;
    max-width: 1240px;
    display: flex;
    height: ${navigationHeight};
    margin: 0 auto;
    background: var(--background);
  }

  a {
    font-weight: 500;
  }

  &:before {
    background: ${colors.backgroundSecundary};
    content: '';
    height: 100vh;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    transition: opacity 0.3s;
    width: 100vw;

    @media screen and (min-width: ${breakpoints.medium}) {
      display: none;
    }
  }

  &.active {
    &:before {
      z-index: -1;
      opacity: 1;
    }
  }
`;

export const MenuIcon = styled.button`
  --color: ${({ hamburgerColor }) => hamburgerColor};

  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 2;
  right: ${spacing.default};
  top: 55px;
  cursor: pointer;
  background: none;
  border: none;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }

  > span {
    width: 15px;
    height: 2px;
    width: 30px;
    display: block;
    background-color: var(--color);
    margin-bottom: 4px;
    transition: transform 0.2s ease, background-color 0.5s ease;
  }

  &.active span {
    background: ${colors.textLight};

    &:first-of-type {
      transform: translate(0, 6px) rotate(45deg);
    }
    &:nth-of-type(2) {
      transform: translateX(0px) rotate(-45deg);
    }

    &:nth-of-type(3) {
      /* display: none; */
      transform: translate(0, -6px) rotate(45deg);
    }
  }
`;

export const ItemsContent = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  width: 80vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;
  order: 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    width: 100%;
    height: ${navigationHeight};

    &:first-of-type {
      justify-content: flex-start;
      a {
        padding-left: 0;
      }
    }

    &:nth-of-type(2) {
      justify-content: flex-end;
    }

    ${Item} {
      a {
        font-weight: 500;
        color: ${colors.textPrimary};

        @media screen and (min-width: ${breakpoints.medium}) {
          color: ${({ baseColor }) => baseColor};
        }

        span:not(.label) {
          color: ${colors.textLight};

          @media screen and (min-width: ${breakpoints.medium}) {
            color: ${({ baseBackgroundColor }) => baseBackgroundColor};
            background: ${({ baseColor }) => baseColor};
          }
        }

        &:hover {
          color: ${colors.primary};

          @media screen and (min-width: ${breakpoints.medium}) {
            color: ${({ baseHoverColor }) => baseHoverColor};
          }

          span:not(.label) {
            background: ${({ baseHoverColor }) => baseHoverColor};
            color: ${({ baseBackgroundColor }) => baseBackgroundColor};
          }
        }
      }
    }
  }
`;
