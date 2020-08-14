import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import fonts from './fonts';
import breakpoints from './breakpoints';

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
    -webkit-font-smoothing: antialiased;
    background: ${colors.backgroundPrimary};
    color: ${colors.textPrimary};
    font-family: ${fonts.family};
    margin: 0;
    min-height: 100%;
  }

  body: {
    margin: 0;
    min-height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${colors.textLink};
    font-weight: 300;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }

  p, p > button, li {
    font-family: ${fonts.family};
    color: ${colors.textPrimary};
    font-size: ${fonts.sizes.default};
    line-height: 180%;
    margin-top: 1.5rem;
    margin-bottom: 30px;
    font-weight: 400;
  }


  p > button {
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
  }

  p > button:hover {
    filter: brightness(110%);
  }

  ul,
  ol {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding-left: 30px;
  }
  ul li,
  ol li {
    line-height: 1.5rem;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  blockquote {
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.family};
    margin-bottom: 0;
    line-height: 1.5rem;
    text-transform: uppercase;

    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }

  h1 {
    font-size: 3.242rem;
    line-height: 0.9;
    font-weight: 900;
    margin-top: 0;

    &:not(:first-of-type){
      margin-top: 3rem;
    }

    @media screen and (min-width: ${breakpoints.small}){
      font-size: 6vw;
      max-width: 70%;
    }
    @media screen and (min-width: ${breakpoints.large}){
      font-size: 5rem;
      max-width: 70%;
    }
  }

  h2 {
    font-size: 3rem;
    line-height: 0.9;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 1rem;

    &:not(:first-of-type){
      margin-top: 3.8rem;
    }

    @media screen and (min-width: ${breakpoints.small}){
      font-size: 5.5vw;
      max-width: 60%;
    }
    @media screen and (min-width: ${breakpoints.large}){
      font-size: 4.5rem;
      max-width: 60%;
    }
  }
  h3 {
    font-size: 23px;
  }
  h4 {
    font-size: 0.707rem;
  }
  h5 {
    font-size: 0.4713333333333333rem;
  }
  h6 {
    font-size: 0.3535rem;
  }

  table {
    margin-top: 1.5rem;
    border-spacing: 0px;
    border-collapse: collapse;
  }
  table td,
  table th {
    padding: 0;
    line-height: 33px;
  }

  code {
    vertical-align: bottom;
  }

  img {
    width: 100%;
  }

  .tiny {
    font-size: 0.9rem;
  }

  .lead {
    font-size: 1.414rem;
  }

  .hug {
    margin-top: 0;
  }

  .real-width {
    width: auto;
  }

  .visible-large {
    display: none;
  }

  .visible-small {
    @media screen and (min-width: ${breakpoints.medium}){
      display: none;
    }
  }

  .visible-large {
    @media screen and (min-width: ${breakpoints.medium}){
      display: inherit;
    }
  }

  .hidden-small {
    @media (max-width: ${breakpoints.medium}) {
      display: none !important;
    }
  }

  .hidden-large {
    @media (min-width: ${breakpoints.medium}) {
      display: none !important;
    }
  }

  .desktop-only {
    display: none !important;

    @media screen and (min-width: ${breakpoints.medium}) {
      display: block !important;
    }
  }

  .nowrap {
    white-space: nowrap;
  }

  figcaption {
    text-align: center;
    margin-top: 12px;
    opacity: 0.7;
  }

  blockquote {
    box-shadow: rgb(41, 41, 41) 3px 0px 0px 0px inset;
    padding-left: 23px;
    margin-left: -20px;
    font-size: 21px;
    line-height: 32px;
    margin-top: 2em;

    em {
      background-color: rgb(233, 253, 240);
    }
  }
`;
