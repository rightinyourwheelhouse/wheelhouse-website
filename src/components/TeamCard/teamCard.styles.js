import styled from 'styled-components';

export const CardContainer = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Caption = styled.div`
  font-weight: 400;
  line-height: 1.66666667;
  align-items: center;
  margin-bottom: var(--spacing-default);

  * {
    display: inline;
  }
`;
