import { darken } from 'polished';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  --background: ${({ background }) => background};
  --backgroundHover: ${({ backgroundHover }) => backgroundHover};
  --foreground: ${({ color }) => color};
  --foregroundHover: ${({ colorHover }) => colorHover};
  --border: ${({ border }) => border};
  --borderHover: ${({ borderHover }) => borderHover};

  > div,
  .btn {
    align-items: center;
    background: var(--background);
    border-radius: var(--rounded-corners);
    border: 1px solid var(--border);
    color: var(--foreground);
    cursor: pointer;
    display: inline-block;
    font-family: var(--font-family);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    line-height: 1.1rem;
    padding: 16px 32px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    &:hover {
      color: var(--foregroundHover);
      background: var(--backgroundHover);
      border: 1px solid var(--borderHover);
      transform: translateY(-2px);
    }

    &:focus {
      background: ${({ backgroundHover }) => darken(0.2, backgroundHover)};
      color: var(--foreground);
      transition: all 0.3s;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &.full {
    width: 100%;
    display: block;
  }
`;

export default ButtonContainer;
