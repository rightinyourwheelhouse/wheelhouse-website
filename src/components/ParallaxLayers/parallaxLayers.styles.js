import styled from 'styled-components';

export const ParallaxContainer = styled.div`
  perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -1500px;

  * {
    box-sizing: border-box;
  }
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(${({ z }) => -z}px);

  img {
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

export const Cover = styled.div`
  background: #fff;
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: auto;
  z-index: 2;
  margin-left: 1500px;

`;
