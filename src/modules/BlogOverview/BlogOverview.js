import React, { memo } from 'react';
import readingTime from 'reading-time';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Stack from '~components/Stack';

import { BlogItemContainer, BlogContainer } from './blogOverview.styles';

import { useBlogOverview } from '~api/insights/useBlogOverview';

import { toKebab } from '~utils/string';

const BlogOverview = ({ count, current }) => {
  const [blogItems] = useBlogOverview({ count, current });

  return (
    <BlogContainer>
      <Stack space="60px">
        <div>
          {blogItems.map(({ title, content: { encoded } }) => {
            const { text: time } = readingTime(encoded);
            const url = `/insights/${toKebab(title)}`;

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

BlogOverview.propTypes = {
  count: PropTypes.number,
  current: PropTypes.string,
};

BlogOverview.defaultProps = {
  count: null,
  current: null,
};

export default memo(BlogOverview);
