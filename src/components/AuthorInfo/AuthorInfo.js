import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { memo } from 'react';

import TwoColumns from '~components/TwoColumns';
import { useTeam } from '~services/team/useTeam';

import {
  Avatar,
  InfoContainer,
  Description,
  Title,
  InfoContent,
  MainContentContainer,
  WrittenBy,
} from './authorInfo.styles';

function AuthorInfo({ author, children, full = false, pickedBy }) {
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
                <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} />
              </Avatar>
            )}
            <div>
              {full && !pickedBy && <WrittenBy>Written by</WrittenBy>}
              <Title full={full}>{author}</Title>

              {full && role && <Description>{role}</Description>}
            </div>
          </MainContentContainer>
        </Element>

        {children && <InfoContent>{children}</InfoContent>}
      </Wrapper>
    </InfoContainer>
  );
}

AuthorInfo.defaultProps = {
  children: null,
  full: false,
  pickedBy: false,
  readTime: null,
};

export default memo(AuthorInfo);
