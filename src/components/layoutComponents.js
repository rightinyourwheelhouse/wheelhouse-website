import styled from 'styled-components';

import spacing from '~styles/spacing';
import colors from '~styles/colors';
import breakpoints from '~styles/breakpoints';

export const Container = styled.div`
  --offset: ${({ offset }) => offset || 0};
  --width: ${({ width }) => width || '1240px'};
  --height: ${({ height }) => height || 0};
  --centered: ${({ centered }) => (centered ? 'center' : 'left')};
  --offset: ${({ offset }) => offset || 0};
  --relative: ${({ relative }) => (relative ? 'relative' : 'inherit')};

  margin: 0 auto;
  max-width: var(--width);
  padding: 0px 2.1rem;
  padding-top: 0;
  text-align: var(--centered);
  z-index: 3;
  min-height: var(--height);
  position: var(--relative);
  margin-top: var(--offset);

  * {
    color: ${({ color }) => color};
  }
`;

export const LightContent = styled.div`
  color: ${colors.textLight};

  p,
  a,
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

  /* overflow: var(--overflow); */
  position: relative;

  > img {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: var(--space);
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
