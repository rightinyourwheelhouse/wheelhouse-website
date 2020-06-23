import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const FooterContainer = styled.footer`
  padding: 120px 0;
  font-size: 21px;

  a {
    display: block;
  }

  .part-of-link {
    display: flex;

    p {
      /* Override p margins and only have some to the right */
      margin: 0 8px 0 0;
    }

    a {
      /* This aligns the Raccoons logo vertically */
      line-height: 34px;
    }
  }

  svg {
    height: 20px;
    line-height: 20px;

    g {
      fill: ${colors.textPrimary};
    }
  }
`;

export const TwoColumns = styled.div`
  @media screen and (min-width: ${breakpoints.small}){
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 50%;
    }

    p:first-of-type{
      margin-top: 0;
    }
  }
`;
