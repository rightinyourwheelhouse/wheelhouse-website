import styled from 'styled-components';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

export const InfoContainer = styled.div``;

export const InfoContent = styled.div`
  div {
    display: inline-block;
    width: 24px;

    &:not(:last-child) {
      margin-right: 12px;
    }

    svg {
      height: 24px;
      width: 24px;
      line-height: 24px;
    }
  }
`;

export const WrittenBy = styled.span`
  color: rgb(117, 117, 117);
  display: block;
  font-size: 14px;
  letter-spacing: 0.7px;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const AuthorDescription = styled.p`
  --color: rgba(117, 117, 117, 0.9);

  margin-top: ${spacing.default};
  color: var(--color);
  font-size: 18px;
  line-height: 24px;
`;

export const Avatar = styled.div`
  --avatar-size: ${({ full }) => (full ? '60px' : '40px')};
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 100%;
  overflow: hidden;
  margin-right: 12px;
  position: relative;
  flex: 0 0 var(--avatar-size);

  > div {
    height: var(--avatar-size);
    width: var(--avatar-size);
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export const Title = styled.span`
  --color: ${colors.textPrimary};
  font-weight: bold;
  font-size: ${({ full }) => (full ? '24px' : '16px')} !important;
  line-height: 0px;
  color: var(--color);
`;

export const Description = styled.div`
  --color: rgba(117, 117, 117, 0.9);

  margin-top: 6px;
  font-size: 16px !important;
  color: var(--color);
`;
