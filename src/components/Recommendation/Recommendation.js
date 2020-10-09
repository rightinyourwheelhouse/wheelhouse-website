import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Markdown from '~components/Markdown';

import { RecommendationContainer } from './recommendation.styles';

const Recommendation = ({
  url, title, author, description,
}) => (
  <RecommendationContainer>
    <a href={url} target="_blank" rel="nofollow noreferrer">
      {title}
    </a>
    {author && (
      <span>
        Author:
        {' '}
        {author}
      </span>
    )}
    <blockquote>
      {description && <Markdown source={description} />}
    </blockquote>
  </RecommendationContainer>
);

Recommendation.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

Recommendation.defaultProps = {
  author: null,
  description: null,
  title: null,
  url: null,
};

export default memo(Recommendation);
