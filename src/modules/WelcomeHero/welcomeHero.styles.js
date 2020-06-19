import styled from 'styled-components';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export const WelcomeHeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 90vh;
  align-content: center;
  align-items: center;
  text-align: left;
  background: ${colors.primary};
  justify-content: flex-start;
  padding: ${spacing.large} 0;

  h1 {
    max-width: 100%;
  }

  > div {
    min-height: 50vh;
  }

  div {
    font-size: 1.6rem;
    line-height: 1.7;
    color: ${colors.textLight};
    width: 100%;

    > div {
      max-width: 600px;
    }
  }

  button {
    margin-top: 90px;
  }

  svg {
    display: block;
    width: 100%;
    max-width: 110px;
  }
`;

export const ButtonContainer = styled.div`
  padding: 30px 0;
  button {
    overflow: visible;
  }
`;
