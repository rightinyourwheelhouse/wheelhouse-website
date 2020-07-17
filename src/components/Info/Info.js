import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  InfoContainer, Description, Title, InfoContent,
} from './info.styles';

import TwoColumns from '~components/TwoColumns';

const Info = ({ children, description, title }) => {
  const Wrapper = children ? TwoColumns : 'div';

  return (
    <InfoContainer>
      <Wrapper>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        {children && <InfoContent>{children}</InfoContent>}
      </Wrapper>
    </InfoContainer>
  );
};

Info.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf,
  ]),
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Info.defaultProps = {
  children: null,
};

export default memo(Info);
