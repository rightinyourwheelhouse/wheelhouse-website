import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  filter: brightness(0.1);
  transition: filter 0.3s;
`;

export const CardContainer = styled.div`
  &:hover {
    ${ImageContainer} {
      filter: unset;
    }
  }
`;

export const Caption = styled.div`
  font-weight: 400;
  line-height: 1.66666667;
  align-items: center;
  margin-bottom: var(--spacing-default);
  min-height: 115px;

  * {
    display: inline;
  }
`;
