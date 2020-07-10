import styled from 'styled-components';

import colors from '~styles/colors';

export const LinksContainer = styled.div`
   > span, > a {
    margin-bottom: 1vw;
    padding-top: 6px;
    padding-bottom: 6px;
   }

   a {
     font-weight: 700;
     text-transform: lowercase;
   }
`;

export const Title = styled.span`
   --foreground: ${colors.textLight};

   color: var(--foreground);
   font-size: .69em;
   text-transform: uppercase;
   font-weight: 700;
   margin-bottom: 1vw;
   display: block;
`;

export const FooterContainer = styled.footer`
  --foreground: ${colors.textLight};
  padding: 120px 0;
  font-size: 21px;
  background: #000;

  h2 {
    color: var(--foreground);
  }

  p {
    margin: 0;
    margin-bottom: 30px;
    color: var(--foreground);

    &.disclaimer{
      font-size: 0.8em;
    }

    a {
      display: inline;
    }
  }

  a {
    display: block;
    color: var(--foreground);

    &:hover {
      color: ${colors.primary};
    }
  }

  svg {
    height: 20px;
    line-height: 20px;

    g {
      fill: var(--foreground);
    }
  }
`;

export const RaccoonsBlock = styled.div`
  display: flex;
  align-items: center;

  p {
    /* Override p margins and only have some to the right */
    margin: 0 8px 0 0;
  }

  a {
    /* This aligns the Raccoons logo vertically */
    line-height: 0;
  }
`;
