import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ConsentItemContainer } from './_consentItem.styles';

import Toggle from '~components/Toggle';

const ConsentItem = ({
  name, label, value, onChange, required,
}) => {
  const handleChange = useCallback(() => {
    onChange(name, !value);
  }, [value]);

  return (
    <ConsentItemContainer required={required}>
      <div>
        <span>
          {label}
        </span>
      </div>
      <div>
        <Toggle id={name} onChange={handleChange} label={label} value={value || required} />
      </div>
    </ConsentItemContainer>
  );
};

ConsentItem.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.bool,
};

ConsentItem.defaultProps = {
  onChange: () => {},
  required: false,
  value: false,
};

export default memo(ConsentItem);
