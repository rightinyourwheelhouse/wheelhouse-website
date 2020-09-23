/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import 'netlify-cms-yoast-seo/dist/main.css';

const PagePreview = ({ entry }) => {
  const { YOAST } = window;

  const title = entry.getIn(['data', 'title']) || '';

  YOAST.setContent({
    description: entry.getIn(['data', 'description']) || '',
    keyword: entry.getIn(['data', 'keyword']) || '',
    text: 'dsdf',
    title,
    titleWidth: title.split('').length * 5, // 5px is an average width of each character ;)
  });

  const { content, seo } = YOAST.getScores() || {};

  return (
    <div className="yoast">
      <h3 className="yoast__heading">SEO</h3>
      {seo && (
      <ul className="yoast__items">
        {seo.map(({ rating, text }, i) => (
          <li key={i} className={`yoast__item yoast__item--${rating}`}>
            {text.replace(/<(?:.|\n)*?>/gm, '')}
          </li>
        ))}
      </ul>
      )}
      <h3 className="yoast__heading">Content</h3>
      <ul className="yoast__items">
        {content && content.map(({ rating, text }, i) => (
          <li key={i} className={`yoast__item yoast__item--${rating}`}>
            {text.replace(/<(?:.|\n)*?>/gm, '')}
          </li>
        ))}
      </ul>
    </div>
  );
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default PagePreview;
