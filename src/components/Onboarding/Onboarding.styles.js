import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  position: relative;
`;

export const Conversation = styled.div`
  min-height: 270px;
  overflow: hidden;
`;

export const ScrollingContainer = styled.div`
  position: absolute;
  top: calc((270px + 40px) * -${({ position }) => position});
  transition: top 0.2s ease-in-out;
`;
