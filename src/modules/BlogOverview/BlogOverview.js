import React, { memo } from 'react';
import readingTime from 'reading-time';
import Link from 'gatsby-link';

import SubTitle from '~components/SubTitle';
import Stack from '~components/Stack';

import { BlogItemContainer, BlogContainer } from './blogOverview.styles';

import { useBlogOverview } from '~api/blog/useBlogOverview';

import { toKebab } from '~utils/string';

const BlogOverview = () => {
  const [blogItems] = useBlogOverview(2);

  return (
    <BlogContainer>
      <SubTitle>Blog</SubTitle>
      <h2>Some insight in how we think</h2>

      <Stack space="60px">
        <div>
          {blogItems.map(({ title, content: { encoded } }) => {
            const { text: time } = readingTime(encoded);
            const url = `/blog/${toKebab(title)}`;

            return (
              <Link key={title} to={url} rel="noopener noreferrer" target="_blank">
                <BlogItemContainer>
                  <h3>{title}</h3>
                  <p>{time}</p>
                </BlogItemContainer>
              </Link>
            );
          })}
        </div>
      </Stack>
    </BlogContainer>
  );
};

export default memo(BlogOverview);
