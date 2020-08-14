import styled from 'styled-components';

import colors from '~styles/colors';

export const InfoContainer = styled.div``;

export const InfoContent = styled.div`
  div {
    display: inline-block;
    width: 24px;

    &:not(:last-child){
      margin-right: 12px;
    }

    svg {
      height: 24px;
      width: 24px;
      line-height: 24px;
    }
  }
`;

export const Avatar = styled.div`
  --avatar-size: 36px;
  width: calc(var(--avatar-size) * 2);
  height: var(--avatar-size);
  border-radius: 100%;
  overflow: hidden;

  > div {
    height: var(--avatar-size);
    width: var(--avatar-size);
  }
`;

export const Title = styled.span`
  --color: ${colors.textPrimary};

  font-size: 16px !important;
  line-height: 20px;
  color: var(--color);
`;

export const Description = styled.div`
  --color: rgba(117, 117, 117, 0.9);

  font-size: 16px !important;
  color: var(--color);
`;
