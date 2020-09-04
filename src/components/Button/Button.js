/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ButtonContainer } from './button.styles';

import colors from '~styles/colors';

const Button = ({
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
}) => (
  <ButtonContainer
    color={color}
    colorHover={colorHover}
    border={border}
    borderHover={borderHover}
    background={background}
    backgroundHover={backgroundHover}
    className={classnames({
      full,
    })}
  >
    <Element className="btn" {...props}>
      <span>
        {children}
      </span>
    </Element>
  </ButtonContainer>
);

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
  background: 'transparent',
  backgroundHover: colors.secundary,
  border: colors.secundary,
  borderHover: colors.secundary,
  color: colors.secundary,
  colorHover: colors.textLight,
  full: false,
};

export default memo(Button);
