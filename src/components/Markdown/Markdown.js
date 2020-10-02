import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Image from '~components/Image';

import Paragraph from './_Paragraph';

const Markdown = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      image: Image,
      paragraph: Paragraph,
    }}
  />
);

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};

export default memo(Markdown);
