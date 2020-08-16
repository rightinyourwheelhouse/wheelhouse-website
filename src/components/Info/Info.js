import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import {
  Avatar, InfoContainer, Description, Title, InfoContent, MainContentContainer,
} from './info.styles';

import TwoColumns from '~components/TwoColumns';

import { useTeam } from '~api/team/useTeam';

const Info = ({
  author, children, date, readTime,
}) => {
  const Wrapper = children ? TwoColumns : 'div';
  const { image } = useTeam(author, true) || {};

  return (
    <InfoContainer>
      <Wrapper>
        <MainContentContainer>
          {image && (
          <Avatar>
            <Img fluid={image.childImageSharp.fluid} />
          </Avatar>
          )}
          <div>
            <Title>{author}</Title>
            <Description>{`${date} · ${readTime}`}</Description>
          </div>
        </MainContentContainer>
        {children && <InfoContent>{children}</InfoContent>}
      </Wrapper>
    </InfoContainer>
  );
};

Info.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf,
  ]),
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
};

Info.defaultProps = {
  children: null,
};

export default memo(Info);
