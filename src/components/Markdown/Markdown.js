import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

import Paragraph from './_Paragraph';

import Image from '~components/Image';

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
