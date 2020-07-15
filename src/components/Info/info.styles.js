import styled from 'styled-components';

import colors from '~styles/colors';

export const InfoContainer = styled.div``;

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
