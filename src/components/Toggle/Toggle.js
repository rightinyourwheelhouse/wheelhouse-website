import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ToggleInput, ToggleLabel } from './toggle.styles';

const Toggle = ({
  disabled, id, onChange, value,
}) => (
  <>
    <ToggleInput
      disabled={disabled}
      id={id}
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
    <ToggleLabel
      htmlFor={id}
    >
      <span />
    </ToggleLabel>
  </>
);

Toggle.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Toggle.defaultProps = {
  disabled: false,
  onChange: null,
  value: false,
};

export default memo(Toggle);
