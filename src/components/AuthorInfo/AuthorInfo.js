import Img from 'gatsby-image';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import {
  Avatar,
  InfoContainer,
  Description,
  Title,
  InfoContent,
  MainContentContainer,
  WrittenBy,
} from './authorInfo.styles';

import TwoColumns from '~components/TwoColumns';
import { useTeam } from '~services/team/useTeam';

const AuthorInfo = ({
  author,
  children,
  date,
  full = false,
  readTime,
  pickedBy,
}) => {
  const Wrapper = children ? TwoColumns : 'div';
  const { image, role, showPickedBy, slug, visible } =
    useTeam({ includeInvisible: true, name: author }) || {};

  if (pickedBy && !showPickedBy) {
    return null;
  }

  let Element = slug ? Link : 'div';

  if (!visible) {
    Element = 'div';
  }

  return (
    <InfoContainer>
      <Wrapper>
        <Element to={slug} as={Link}>
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
        </Element>

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
