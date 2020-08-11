import React, { memo } from 'react';

import ParallaxLayers from '~components/ParallaxLayers';

const ParallaxWelcomeHero = ({ children }) => (
  <ParallaxLayers images={[
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true',
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true',
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true',
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true',
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true',
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true',
    'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true',
  ]}
  >
    {children}
  </ParallaxLayers>

);

export default memo(ParallaxWelcomeHero);
