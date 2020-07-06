import styled from 'styled-components';

import colors from '~styles/colors';
import fonts from '~styles/fonts';

export const GalleryItemContainer = styled.div`
  margin-bottom: 60px;

  a {
    text-decoration: none;
    background: none;
    color: ${colors.textPrimary};
  }
`;

export const GalleryImage = styled.div`
    position: relative;
    padding-top: 120%;
    margin-bottom: 15px;
    overflow: hidden;
    background: ${colors.primary};

    &:hover {
      img {
        opacity: .5;
        transform: scale(1.1) translate(-50%, -50%);
      }
    }

    img {
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }
`;

export const GalleryContent = styled.div`
  h3 {
    text-transform: none;
  }

  p {
    font-size: 1.2rem;
    font-family: ${fonts.family};
    font-weight: 300;
    margin: 0;
  }
`;
