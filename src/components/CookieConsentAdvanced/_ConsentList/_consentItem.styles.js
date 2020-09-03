import styled from 'styled-components';

export const ConsentItemContainer = styled.div`
  --opacity: ${({ required }) => (required ? '0.5' : '1')};

  display: flex;
  align-content: center;
  opacity: var(--opacity);
  margin-bottom: var(--spacing-small);

  > div {
    width: 50%;

    &:first-of-type {
      span {
        line-height: 30px;
      }
    }

    &:nth-of-type(2) {
      text-align: right;
    }

    &:not(:last-of-type) {
      padding-right: var(--spacing-small);
    }
  }
`;
