import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Paragraph from './_Paragraph';

function Markdown({ children }) {
  return (
    <ReactMarkdown components={{ p: Paragraph }}>{children}</ReactMarkdown>
  );
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Markdown;
