import styled from 'styled-components';

export const Conversation = styled.div`
  min-height: 270px;
  overflow: hidden;

  .scrolling-container {
    position: absolute;

    top: calc((270px + 40px) * -${({ position }) => position});
    transition: top 0.2s ease-in-out;
  }
`;
