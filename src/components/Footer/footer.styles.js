import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const FooterContainer = styled.footer`
  padding: 120px 0;
  font-size: 21px;

  a {
    display: block;
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
