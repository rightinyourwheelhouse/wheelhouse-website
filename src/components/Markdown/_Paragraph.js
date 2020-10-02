import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => {
  const hasImage = !!children.find(
    (child) => typeof child === 'object' && child.key && !!child.key.match(/image/g)
  );
  return hasImage ? children : <p>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Paragraph);
