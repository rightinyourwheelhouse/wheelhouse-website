import PropTypes from 'prop-types';
import React, { memo } from 'react';

import AuthorInfo from '~components/AuthorInfo';
import Markdown from '~components/Markdown';

import { RecommendationContainer } from './recommendation.styles';

function Recommendation({ url, title, author, description, pickedBy }) {
  return (
    <RecommendationContainer>
      <a href={url} target="_blank" rel="nofollow noreferrer">
        {title}
      </a>
      {author && <h4>Author: {author}</h4>}
      <blockquote>
        {description && <Markdown>{description}</Markdown>}
      </blockquote>

      {pickedBy && <AuthorInfo author={pickedBy} full pickedBy />}
    </RecommendationContainer>
  );
}

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
