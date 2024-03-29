import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex: 100px 0 0;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const Item = styled.div`
  a {
    font-family: var(--font-family);
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    font-size: 2.2em;
    line-height: 120%;
    padding: 16px 20px 14px 0;
    text-decoration: none;
    text-transform: uppercase;

    span {
      margin-left: 12px;
    }

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.3rem;
      padding: 16px 0 14px 20px;
      text-transform: lowercase;

      span.label {
        display: none;
      }
    }
  }
`;

export const ItemsContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
  margin-top: -100vh;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-top: 0;
    height: auto;
    flex-direction: row;
    max-width: 1240px;
    padding: 0px 1.0875rem;
    margin: auto;
    height: 75px;
  }

  &.active {
    height: 100vh;
    overflow: visible;
    margin-top: 0;

    @media screen and (min-width: ${breakpoints.medium}) {
      height: auto;
    }
  }
`;

export const Items = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  transition: all 0.3s;
  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    background: ${({ background }) => background};
  }

  a {
    font-weight: 500;
  }

  &:before,
  &:after {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
    transform: translateX(0%) translateY(-100%);

    @media screen and (min-width: ${breakpoints.medium}) {
      display: none;
    }
  }

  &:before {
    background: rgba(255, 255, 255, 1);
  }

  &:after {
    background: rgba(88, 189, 134, 0.7);
  }

  &.active {
    &:before,
    &:after {
      transform: translateX(0%) translateY(0%);
    }
    &:before {
    }
    &:after {
      transition-delay: 0.1s;
    }
  }
`;

export const MenuIcon = styled.button`
  --color: ${({ hamburgerColor }) => hamburgerColor};

  height: 30px;
  width: 30px;
  position: fixed;
  z-index: 2;
  right: var(--spacing-default);
  top: 30px;
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
    background: var(--color-text-primary-900);

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
  display: flex;
  width: 80vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;
  order: 0;

  &:not(:first-of-type) {
    margin-top: 130px;
    @media screen and (min-width: ${breakpoints.medium}) {
      margin-top: 0;
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    align-items: center;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    width: 100%;

    &:first-of-type {
      justify-content: flex-start;
      a {
        padding-left: 0;
      }
    }

    &:nth-of-type(2) {
      justify-content: flex-end;
    }

    &.scrolled {
      ${Item} {
        a {
          color: var(--color-text-primary-900);
        }

        span:not(.label) {
          color: var(--color-text-primary-100);
          background: var(--color-text-primary-900);
        }

        svg path {
          fill: var(--color-text-primary-900);
        }

        &:hover {
          a {
            color: var(--color-primary);
          }

          span:not(.label) {
            color: var(--color-text-primary-100);
            background: var(--color-primary);
          }

          svg path {
            fill: var(--color-primary);
          }
        }
      }
    }
  }

  ${Item} {
    &.wh-logo {
      display: none;

      @media screen and (min-width: ${breakpoints.medium}) {
        display: unset;

        &.logoInitiallyHidden {
          display: ${({ scrolled }) => (scrolled ? 'block' : 'none')};
        }
      }

      svg {
        path {
          fill: var(--color-primary);
        }
      }
    }

    .active-link {
      text-decoration: underline;
      text-underline-offset: 0.2rem;
      text-decoration-thickness: 0.3rem;
    }

    a {
      font-weight: 900;
      color: var(--color-text-primary-900);

      @media screen and (min-width: ${breakpoints.medium}) {
        color: ${({ baseColor }) => baseColor};
      }

      span:not(.label) {
        color: var(--color-text-primary-100);

        @media screen and (min-width: ${breakpoints.medium}) {
          color: ${({ baseBackgroundColor }) => baseBackgroundColor};
          background: ${({ baseColor }) => baseColor};
        }
      }

      svg {
        line-height: 120%;
        height: 1.2em;
        display: block;

        path {
          fill: var(--color-text-primary-900);

          @media screen and (min-width: ${breakpoints.medium}) {
            fill: ${({ baseColor }) => baseColor};
          }
        }
      }

      &:hover {
        color: var(--color-primary);

        span:not(.label) {
          background: var(--color-primary);
          color: var(--color-text-primary-100);
        }

        svg path {
          fill: var(--color-primary);
        }
      }
    }
  }
`;

export const Address = styled.div`
  align-items: flex-start;
  align-self: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 54px;
  margin-top: 59px;
  padding-top: 30px;
  width: 80vw;

  a {
    font-weight: 300;
  }

  > div {
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;
