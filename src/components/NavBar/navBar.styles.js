import styled from 'styled-components';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import breakpoints from '../../styles/breakpoints';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex: 100px 0 0;
  justify-content: space-between;

  a {
    text-decoration: none;
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

  @media screen and (min-width: ${breakpoints.medium}) {
    background: ${({ scrolled }) => (scrolled ? colors.textLight : 'transparent')};
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
    background: rgba(234, 234, 234, 1);
  }

  &:after {
    background: rgba(234, 234, 234, 0.7);
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

export const Item = styled.div`
  a {
    font-family: ${fonts.family};
    align-items: center;
    color: ${({ baseColor }) => baseColor};
    display: block;
    font-size: 1.2em;
    font-weight: 700;
    line-height: 120%;
    padding: 16px 20px 14px 0;
    text-decoration: none;
    text-transform: uppercase;

    @media screen and (min-width: ${breakpoints.medium}) {
      color: ${({ scrolled, baseColor }) => (scrolled ? colors.textPrimary : baseColor)};
      text-transform: lowercase;
      display: inline-block;
      padding: 16px 0 14px 20px;
      font-size: 1.3rem;
      line-height: 4.25vw;
    }

    &:hover {
      color: ${colors.textLink};

      @media screen and (min-width: ${breakpoints.medium}) {
        color: ${({ scrolled }) => (scrolled ? colors.primary : colors.textLink)};
      }
    }
  }
`;

export const MenuIcon = styled.button`
  height: 30px;
  width: 30px;
  position: fixed;
  z-index: 2;
  right: 50px;
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
    background-color: ${colors.textPrimary};
    margin-bottom: 4px;
    transition: transform 0.2s ease, background-color 0.5s ease;
  }

  &.active span {
    background: ${colors.textPrimary};
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
  margin-top: 130px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;
  order: 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    max-width: 1240px;
    padding: 0px 1.0875rem;
    width: 100%;
  }
`;

export const Address = styled.div`
  display: flex;
  margin-top: 59px;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  font-weight: 400;
  width: 80vw;
  margin-top: 54px;

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
