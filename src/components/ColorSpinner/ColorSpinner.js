import React, {
  memo, useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { SpinnerContainer } from './colorSpinner.styles';

import colors from '~styles/colors';

const DEFAULT_COLORS = [
  '#0000E0',
  '#7600A8',
  '#554800',
  '#802200',
  '#B50000',
  '#BBFFE9',
];

const ColorSpinner = ({ children, color, colorSelection }) => {
  const [isHovering, setIsHovering] = useState(false);

  const allColors = [
    color,
    ...colorSelection,
  ];

  const [currentColor, setCurrentColor] = useState(allColors[0]);

  let currentColorIndex = 0;

  const handleNext = () => {
    if (currentColorIndex === allColors.length - 1) {
      currentColorIndex = 0;
    } else {
      currentColorIndex += 1;
    }

    setCurrentColor(allColors[currentColorIndex]);
  };

  useEffect(() => {
    let interval;

    if (isHovering) {
      handleNext();

      interval = setInterval(() => {
        handleNext();
      }, 400);
    }

    return () => {
      clearInterval(interval);
      setCurrentColor(allColors[0]);
    };
  }, [isHovering]);

  const onMouseOut = useCallback(
    () => {
      setIsHovering(false);
    },
    [],
  );

  const onMouseOver = useCallback(
    () => {
      setIsHovering(true);
    },
    [],
  );

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <SpinnerContainer onMouseOut={onMouseOut} onMouseOver={onMouseOver} color={currentColor}>
      {children}
    </SpinnerContainer>
  );
};

ColorSpinner.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf]).isRequired,
  color: PropTypes.string,
  colorSelection: PropTypes.arrayOf(PropTypes.string),
};

ColorSpinner.defaultProps = {
  color: colors.textPrimary,
  colorSelection: DEFAULT_COLORS,
};

export default memo(ColorSpinner);
