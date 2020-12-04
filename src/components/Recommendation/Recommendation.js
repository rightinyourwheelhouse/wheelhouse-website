import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Markdown from '~components/Markdown';

import AuthorInfo from '~components/AuthorInfo';

import { RecommendationContainer } from './recommendation.styles';

const Recommendation = ({
  url, title, author, description, pickedBy,
}) => (
  <RecommendationContainer>
    <a href={url} target="_blank" rel="nofollow noreferrer">
      {title}
    </a>
    {author && (
    <h4>
      Author:
      {' '}
      {author}
    </h4>
    )}
    <blockquote>
      {description && <Markdown source={description} />}
    </blockquote>

    {pickedBy && <AuthorInfo author={pickedBy} full pickedBy />}
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
