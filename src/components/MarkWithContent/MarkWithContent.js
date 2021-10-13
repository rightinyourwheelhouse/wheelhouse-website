import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';

import { Mark, Image, TextContainer } from './markWithContent.styles';

const MarkWithContent = ({ children, contentVisible, hideText, text }) => {
  const [imageVisible, setImageVisible] = useState(false);

  const onHover = useCallback(() => {
    if (!imageVisible) {
      setImageVisible(true);
    }
  }, [imageVisible]);

  const onMouseOut = useCallback(() => {
    setImageVisible(false);
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <Mark onMouseOver={onHover} onMouseOut={onMouseOut}>
      {`${text}`}
      <Image className={(imageVisible || contentVisible) && 'active'}>
        {!hideText && <TextContainer>{text}</TextContainer>}
        {children}
      </Image>
    </Mark>
  );
};

MarkWithContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  contentVisible: PropTypes.bool,
  hideText: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

MarkWithContent.defaultProps = {
  contentVisible: null,
  hideText: false,
};

MarkWithContent.displayName = 'MarkWithContent';

export default memo(MarkWithContent);
