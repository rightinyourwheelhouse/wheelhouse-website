import styled from 'styled-components';

import spacing from '../styles/spacing';
import colors from '../styles/colors';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ width }) => width || '1240px'};
  padding: 0px 1.0875rem;
  padding-top: 0;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  z-index: 3;
  min-height: ${({ height }) => height || 0};
  position: ${({ relative }) => (relative ? 'relative' : 'inherit')};

  * {
    color: ${({ color }) => color};
  }
`;

export const LightContent = styled.div`
  color: ${colors.textLight};

  p, a, li {
    color: currentColor;
  }
`;

export const Section = styled.section`
  background: ${({ background }) => background || 'transparent'};
  box-sizing: border-box;
  display: block;
  min-height: 0;
  overflow: ${({ overflow }) => overflow || 'hidden'};
  padding: ${({ space }) => space || spacing.big} 0;
  position: relative;

  > img {
    margin-bottom: 30px;
  }
`;

export const Row = styled.div`
  flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};

  @media screen and (min-width: 768px) {
    display: flex;
    flex: ${(props) => (props.flex ? props.flex : 'initial')};
    flex-direction: row;
    flex-wrap: ${(props) => (props.wrap ? props.wrap : 'initial')};
    align-content: ${(props) => (props.alignContent ? props.alignContent : 'initial')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'initial')};
  }
`;
export const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'initial')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'initial')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
