import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import {
  Avatar,
  AuthorDescription,
  InfoContainer,
  Description,
  Title,
  InfoContent,
  MainContentContainer,
  WrittenBy,
} from './authorInfo.styles';

import TwoColumns from '~components/TwoColumns';

import { useTeam } from '~api/team/useTeam';

const AuthorInfo = ({
  author, children, date, full = false, readTime,
}) => {
  const Wrapper = children ? TwoColumns : 'div';
  const { image, role, description } = useTeam({ includeInvisible: true, name: author }) || {};

  return (
    <InfoContainer>
      <Wrapper>
        <MainContentContainer>
          {image && (
            <Avatar full={full}>
              <Img fluid={image.childImageSharp.fluid} />
            </Avatar>
          )}
          <div>
            {full && <WrittenBy>Written by</WrittenBy>}
            <Title full={full}>{author}</Title>
            {!full && <Description>{`${date} · ${readTime}`}</Description>}
            {full && role && <Description>{role}</Description>}
            {full && description && (
              <AuthorDescription>{description}</AuthorDescription>
            )}
          </div>
        </MainContentContainer>
        {children && <InfoContent>{children}</InfoContent>}
      </Wrapper>
    </InfoContainer>
  );
};

AuthorInfo.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf,
  ]),
  date: PropTypes.string.isRequired,
  full: PropTypes.bool,
  readTime: PropTypes.string.isRequired,
};

AuthorInfo.defaultProps = {
  children: null,
  full: false,
};

export default memo(AuthorInfo);
