import styled from 'styled-components';

export const FileUploadContainer = styled.div`
  > input {
    width: 1;
    height: 44px;
    opacity: 0;
    position: absolute;
    z-index: -99;
    color: var(--color-text-primary-100);
  }

  > label {
    display: flex;
    align-items: center;

    > div:not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export const Caption = styled.div`
  font-size: 16px;
  line-height: 150%;
  opacity: 0.7;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 12px;
`;
