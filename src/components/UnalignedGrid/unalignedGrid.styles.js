import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const UnalignedGridContainer = styled.div`
  margin-top: 30px;

  @media screen and (min-width: ${breakpoints.small}) {
    align-items: flex-start;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
    margin-top: 210px;
  }
`;

export const Column = styled.div`
  align-self: flex-start;
  display: block;
  padding-right: 0;
  padding-left: 0;
  align-self: flex-start;
  flex: 1;

  @media screen and (min-width: ${breakpoints.small}) {
      padding-right: 20px;
    }

  &:last-of-type {
    @media screen and (min-width: ${breakpoints.small}) {
      padding-right: 0;
      padding-left: 20px;
      flex: 1;
      margin-top: -120px;
    }
  }
`;

export const UnalignedItem = styled.div`
  margin-bottom: 40px;
`;
