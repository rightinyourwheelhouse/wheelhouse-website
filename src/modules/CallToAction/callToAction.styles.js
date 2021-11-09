import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const CTAContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000060;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const CTAContent = styled.div`
  display: flex;
`;

export const CTAText = styled.div`
  background-color: white;
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

export const CTACartoon = styled.img`
  width: 300px;
  display: none;

  @media screen and (min-width: ${breakpoints.small}) {
    display: inline;
  }
`;

export const CTATitle = styled.p`
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 1.2;
`;

export const CTABody = styled.p`
  margin-top: 0rem;
`;

export const CTAClose = styled.button`
  max-width: max-content;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  background-color: #00000000;

  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const CTAWrapper = styled.div`
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
