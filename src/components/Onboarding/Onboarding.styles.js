import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};

  height: ${({ hidden }) => (hidden ? '0%' : '100%')};

  transition: all 0.3s ease-in-out;
`;

export const ScrollingContainer = styled.div`
  transition: top 0.2s ease-in-out;
`;

export const InitialContentContainer = styled.div`
  margin-bottom: 30px;
`;
