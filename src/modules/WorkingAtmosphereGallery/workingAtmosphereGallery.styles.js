import styled from 'styled-components';

export const WorkingAtmosphereContainer = styled.div`
  picture > img {
    height: auto !important;
  }
  > img {
    height: auto !important;
  }

  img {
    filter: grayscale(100%);

    &:hover {
      filter: none;
    }
  }
`;
