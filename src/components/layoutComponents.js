import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';
import colors from '~styles/colors';
import spacing from '~styles/spacing';

import { invertColor } from '~utils/color';

export const Container = styled.div`
  --offset: ${({ offset }) => offset || 0};
  --width: ${({ width }) => width || '1240px'};
  --height: ${({ height }) => height || 0};
  --centered: ${({ centered }) => (centered ? 'center' : 'left')};
  --offset: ${({ offset }) => offset || 0};
  --relative: ${({ relative }) => (relative ? 'relative' : 'inherit')};

  margin: 0 auto 0;
  margin-top: var(--offset);
  max-width: var(--width);
  min-height: var(--height);
  padding-top: 0;
  padding: 0px 2.1rem;
  position: var(--relative);
  text-align: var(--centered);
  z-index: 3;

  * {
    color: ${({ color }) => color};
  }
`;

export const ContrastColor = styled.div`
  --color: ${({ color }) =>
    color ? invertColor(color, true) : colors.textPrimary100};
  color: var(--color);

  p,
  a,
  h2,
  mark,
  li {
    color: currentColor;
  }

  svg {
    path {
      fill: currentColor;
    }
  }
`;

export const Section = styled.section`
  --background: ${({ background }) => background || 'transparent'};
  --space: ${({ space }) => space || spacing.large} 0;
  --overflow: ${({ overflow }) => overflow || 'hidden'};

  background: var(--background);
  box-sizing: border-box;
  display: block;
  min-height: 0;
  padding: var(--space);
  position: relative;
  overflow-y: var(--overflow);
  overflow-x: hidden;

  > img {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: var(--space);
  }
`;

export const Row = styled.div`
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};

  @media screen and (min-width: 768px) {
    display: flex;
    flex: ${props => (props.flex ? props.flex : 'initial')};
    flex-direction: row;
    flex-wrap: ${props => (props.wrap ? props.wrap : 'initial')};
    align-content: ${props =>
      props.alignContent ? props.alignContent : 'initial'};
    justify-content: ${props =>
      props.justifyContent ? props.justifyContent : 'initial'};
  }
`;
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => (props.width ? props.width : 'auto')};
`;
