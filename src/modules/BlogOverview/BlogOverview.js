import React, { memo } from 'react';
import Link from 'gatsby-link';
import readingTime from 'reading-time';

import SubTitle from '~components/SubTitle';
import Stack from '~components/Stack';
import Button from '~components/Button';

import { BlogItemContainer } from './blogOverview.styles';

import { useBlogOverview } from '~api/blog/useBlogOverview';

import colors from '~styles/colors';

const BlogOverview = () => {
  const [blogItems] = useBlogOverview(2);

  return (
    <div>
      <SubTitle>Blog</SubTitle>
      <h2>Some insight in how we think</h2>

      <Stack space="60px">
        <div>
          {blogItems.map(({ title, link, content: { encoded } }) => {
            const { text: time } = readingTime(encoded);
            return (
              <a key={title} href={link} rel="noopener noreferrer" target="_blank">
                <BlogItemContainer>
                  <h3>{title}</h3>
                  <p>{time}</p>
                </BlogItemContainer>
              </a>
            );
          })}
        </div>
        <div>
          <Button
            as={Link}
            to="/"
            color={colors.primary}
          >
            Discover more
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default memo(BlogOverview);
