import styled from 'styled-components';

export const CTAContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000080;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CTAContent = styled.div`
  display: flex;
`;

export const CTAText = styled.div`
  background-color: white;
  height: max-content;
  width: 26rem;
  padding: 2rem;
  border-radius: 1rem;
`;

export const CTACartoon = styled.img`
  width: 300px;
`;

export const CTATitle = styled.h2`
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const CTABody = styled.p`
  margin-top: 0rem;
`;
