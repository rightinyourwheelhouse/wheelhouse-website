import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';
import colors from '~styles/colors';

export const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  background-color: ${colors.backgroundPrimary800};
  height: max-content;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  margin: 0 1rem 1rem 1rem;

  @media screen and (min-width: ${breakpoints.small}) {
    margin: 0;
    width: 26rem;
  }
`;

export const Cartoon = styled.img`
  width: 300px;
  display: none;

  @media screen and (min-width: ${breakpoints.small}) {
    display: inline;
  }
`;

export const Title = styled.p`
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 1.2;
`;

export const Body = styled.p`
  margin-top: 0rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const show = styled.div`
  transition: all 2s linear;
  display: block;
`;

export const hidden = styled.div`
  display: none;
  opacity: 0;
`;
