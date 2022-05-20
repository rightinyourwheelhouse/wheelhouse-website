import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const OuterContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const List = styled.div`
  --background: ${({ background }) => background};
  --height: ${({ height }) => height || '30vw'};
  --itemWidth: ${({ itemWidth }) => itemWidth || '45vw'};
  --portraitWidth: ${({ portraitWidth }) => portraitWidth || '35vw'};
  --space: ${({ space }) => space};

  background: var(--background);
  display: flex;
  align-items: center;
  height: var(--height);
  max-height: 900px;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;

  &::-webkit-scrollbar {
    height: 0rem;
  }

  img,
  > div {
    height: 100%;
    width: auto;
    min-width: var(--itemWidth);

    &.portrait {
      min-width: var(--portraitWidth);
    }
  }

  > * + * {
    margin-left: var(--space);
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    > * + * {
      margin-left: var(--space);
    }
  }
`;

export const ArrowContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 50px;
  z-index: 8;

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 100px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &.right {
    right: 0;
    left: unset;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }

    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    width: 30px;
    stroke: var(--color-text-primary-200);

    @media screen and (min-width: ${breakpoints.medium}) {
      width: 70px;
    }
  }
`;
