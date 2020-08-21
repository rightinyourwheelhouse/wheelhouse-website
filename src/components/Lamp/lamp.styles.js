import styled from 'styled-components';

import colors from '~styles/colors';

export const LampContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Cable = styled.div`
  position: relative;
  background-color: rgba(255,255,255, 0.2);
  width: 2px;
  height: 150px;
  left: 50%;
  margin-left: -1px;
  z-index: 1;
  transform-origin: 0% 0%;
  box-shadow: -80px -10px 10px -2px rgba(0, 0, 0, 0.1);

  &:after {
    content: ' ';
    left: -5px;
    top: 100%;
    position: absolute;
    border-bottom: 15px solid rgba(255,255,255, 0.05);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    height: 0;
    width: 4px;
    box-shadow: -80px -10px 7px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const Bulb = styled.div`
  --bulb-size: 90px;

  background: rgba(255, 255, 255, 0.98);
  width: var(--bulb-size);
  height: var(--bulb-size);
  top: 164px;
  position: absolute;
  left: 50%;
  border-radius: 100%;
  transform: translateX(-50%);
  z-index: 1;

  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8),
    0px 0px 30px rgba(255, 255, 255, 0.8), 0px 0px 50px rgba(255, 255, 255, 0.6),
    0px 0px 70px rgba(255, 255, 255, 0.8),
    -80px -15px 120px 0px rgba(255, 255, 255, 0.4),
    0px 0px 120px 320px rgba(255, 255, 255, 0.15),
    0px 0px 120px 620px rgba(255, 255, 255, 0.05)
    ;

`;
