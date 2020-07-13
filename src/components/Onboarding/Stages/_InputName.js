import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import Input from '~components/form/Input';

const InputName = ({ onChange, ...props }) => {
  const handleOnChange = useCallback(
    (e) => {
      const { target: { value } } = e;
      onChange(value);
    },
    [onChange],
  );

  return <Input {...props} onChange={handleOnChange} />;
};

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(InputName);
