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
  author,
  children,
  date,
  full = false,
  readTime,
  pickedBy,
}) => {
  const Wrapper = children ? TwoColumns : 'div';
  const {
    image, role, description, showPickedBy,
  } = useTeam({ includeInvisible: true, name: author }) || {};

  if (pickedBy && !showPickedBy) {
    return null;
  }

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
            {full && !pickedBy && <WrittenBy>Written by</WrittenBy>}
            <Title full={full}>{author}</Title>
            {date && readTime && !full && (
              <Description>{`${date} · ${readTime}`}</Description>
            )}
            {full && role && <Description>{role}</Description>}
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
  date: PropTypes.string,
  full: PropTypes.bool,
  pickedBy: PropTypes.bool,
  readTime: PropTypes.string,
};

AuthorInfo.defaultProps = {
  children: null,
  date: null,
  full: false,
  pickedBy: false,
  readTime: null,
};

export default memo(AuthorInfo);
