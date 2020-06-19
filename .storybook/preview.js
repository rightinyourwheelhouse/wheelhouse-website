import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';

import { withKnobs } from "@storybook/addon-knobs";

//need this for gatsby storybook error
global.__BASE_PATH__ = '';

addDecorator(withKnobs);
addDecorator(story => (
  <div style={{padding: "20px"}}>
    <GlobalStyle />
    {story()}
  </div>
));