import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

import Paragraph from './_Paragraph';

import Image from '~components/Image';

const Markdown = ({ children }) => (
  <ReactMarkdown
    renderers={{
      image: Image,
      paragraph: Paragraph,
    }}
  >
    {children}
  </ReactMarkdown>
);

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
};

export default memo(Markdown);
