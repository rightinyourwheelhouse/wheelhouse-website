import { createGlobalStyle } from 'styled-components';

import breakpoints from './breakpoints';
import colors from './colors';
import fonts from './fonts';
import spacing from './spacing';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${colors.primary};
    --color-secundary: ${colors.secundary};
    --color-tertiary: ${colors.tertiary};
    --color-quaternary: ${colors.quaternary};

    --color-background-primary-900: ${colors.backgroundPrimary900};
    --color-background-primary-800: ${colors.backgroundPrimary800};
    --color-background-primary-700: ${colors.backgroundPrimary700};
    --color-background-primary-600: ${colors.backgroundPrimary600};
    --color-background-primary-500: ${colors.backgroundPrimary500};
    --color-background-primary-400: ${colors.backgroundPrimary400};
    --color-background-primary-300: ${colors.backgroundPrimary300};
    --color-background-primary-200: ${colors.backgroundPrimary200};
    --color-background-primary-100: ${colors.backgroundPrimary100};

    --color-text-primary-900: ${colors.textPrimary900};
    --color-text-primary-800: ${colors.textPrimary800};
    --color-text-primary-700: ${colors.textPrimary700};
    --color-text-primary-600: ${colors.textPrimary600};
    --color-text-primary-500: ${colors.textPrimary500};
    --color-text-primary-400: ${colors.textPrimary400};
    --color-text-primary-300: ${colors.textPrimary300};
    --color-text-primary-200: ${colors.textPrimary200};
    --color-text-primary-100: ${colors.textPrimary100};

    --color-error: ${colors.error};

    --font-family: ${fonts.family};

    --font-size-default: ${fonts.sizes.default};
    --font-size-small: ${fonts.sizes.small};
    --font-size-h1: ${fonts.sizes.h1};
    --font-size-h2: ${fonts.sizes.h2};
    --font-size-h3: ${fonts.sizes.h3};
    --font-size-h4: ${fonts.sizes.h4};
    --font-size-h5: ${fonts.sizes.h5};
    --font-size-h6: ${fonts.sizes.h6};

    --spacing-tiny: ${spacing.tiny};
    --spacing-small: ${spacing.small};
    --spacing-default: ${spacing.default};
    --spacing-large: ${spacing.large};
    --spacing-extra-large: ${spacing.extraLarge};

    --rounded-corners: ${spacing.tiny}; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    background: var(--color-background-primary-900);
    color: var(--color-text-primary-900);
    font-family: var(--font-family);
    margin: 0;
    min-height: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    min-height: 100%;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--color-text-primary-800);
    font-weight: 300;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }

  p,
  p > button,
  li {
    font-family: var(--font-family);
    color: var(--color-text-primary-900);
    font-size: ${fonts.sizes.default};
    line-height: 180%;
    margin-top: 1.5rem;
    margin-bottom: 30px;
    font-weight: 400;

    &:first-child {
      margin-top: 0;
    }
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
    hyphens: auto;
    white-space: pre-line;
    text-overflow: ellipsis;
    max-width: 100%;
    hyphens: auto;
    font-family: var(--font-family);
    margin-bottom: 0;
    line-height: 1.5rem;
    text-transform: uppercase;

    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }

  h1 {
    font-size: 2.742rem;
    line-height: 0.9;
    font-weight: 900;
    margin-top: 0;

    &:not(:first-of-type) {
      margin-top: 3rem;
    }

    @media screen and (min-width: ${breakpoints.small}) {
      font-size: 6vw;
      max-width: 70%;
    }
    @media screen and (min-width: ${breakpoints.large}) {
      font-size: 5rem;
      max-width: 70%;
    }
  }

  h2 {
    font-size: 2.5rem;
    line-height: 0.9;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: var(--spacing-default);

    &:not(:first-of-type) {
      margin-top: 3.8rem;
    }

    @media screen and (min-width: ${breakpoints.small}) {
      font-size: 5.5vw;
      max-width: 80%;
    }
    @media screen and (min-width: ${breakpoints.large}) {
      font-size: 4.5rem;
      max-width: 80%;
    }
  }
  h3 {
    font-size: 23px;
    font-weight: 900;
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

  img, video {
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
    @media screen and (min-width: ${breakpoints.medium}) {
      display: none;
    }
  }

  .visible-large {
    @media screen and (min-width: ${breakpoints.medium}) {
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

  pre {
    position: relative;
    padding: 2rem;
    color: #d6deeb;
    background-color: #011627;
    overflow-x: auto;
    font-size: 1.3em;
    line-height: 1.7;
    border-radius: var(--rounded-corners);
    padding: 2rem;
  }
`;
