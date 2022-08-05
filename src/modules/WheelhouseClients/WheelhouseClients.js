import { StaticImage } from 'gatsby-plugin-image';
import React, { memo } from 'react';

import {
  ImageContainer,
  WheelhouseClientsContainer,
} from './wheelhouseClients.styles';

import Content from '../../components/Content';
import SubTitle from '../../components/SubTitle';

import ThreeColumns from '../../components/ThreeColumns';

function WheelhouseClients() {
  return (
    <WheelhouseClientsContainer>
      <Content>
        <SubTitle>What we do</SubTitle>
        <h2> Meet our clients</h2>
      </Content>
      <ThreeColumns>
        <ImageContainer>
          <a
            href="https://www.covestro.com/en"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              objectFit="contain"
              src="../../images/logos/logo-covestro.png"
              alt="logo van Covestro"
            />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href="https://dexxter.be/" target="_blank" rel="noreferrer">
            <StaticImage
              objectFit="contain"
              src="../../images/logos/logo-dexxter.png"
              alt="logo van Dexxter"
            />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href="https://hallar.io/" target="_blank" rel="noreferrer">
            <StaticImage
              objectFit="contain"
              src="../../images/logos/logo-hallar.png"
              alt="logo van Hallar"
            />
          </a>
        </ImageContainer>
      </ThreeColumns>
    </WheelhouseClientsContainer>
  );
}

export default memo(WheelhouseClients);
