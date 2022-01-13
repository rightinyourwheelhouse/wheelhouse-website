/* eslint-disable react/jsx-props-no-spreading */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import colors from '~styles/colors';

import { ButtonContainer } from './button.styles';

function Button({
  background,
  backgroundHover,
  border,
  borderHover,
  children,
  color,
  colorHover,
  as: Element,
  full,
  ...props
}) {
  return (
    <ButtonContainer
      color={color}
      colorHover={colorHover}
      background={background}
      backgroundHover={backgroundHover}
      border={border}
      borderHover={borderHover}
      className={classnames({
        full,
      })}
    >
      <Element className="btn" {...props}>
        {children}
      </Element>
    </ButtonContainer>
  );
}

Button.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  background: PropTypes.string,
  backgroundHover: PropTypes.string,
  border: PropTypes.string,
  borderHover: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  full: PropTypes.bool,
};

Button.defaultProps = {
  as: 'button',
  background: colors.primary,
  backgroundHover: colors.primary,
  border: 'transparent',
  borderHover: 'transparent',
  color: colors.textPrimary100,
  colorHover: colors.textPrimary100,
  full: false,
};

export default memo(Button);
