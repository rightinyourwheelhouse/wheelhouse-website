import styled from 'styled-components';

export const BadgeContainer = styled.span`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  display: inline-block;
  margin-left: 8px;
  padding: 8px 10px 5px;
`;
