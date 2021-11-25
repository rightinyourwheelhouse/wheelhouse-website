import PropTypes from 'prop-types';
import React, { memo } from 'react';

import ConsentItem from './_ConsentItem';

function ConsentList({ cookies, onChange }) {
  return (
    <div>
      {cookies.map(({ name, value, label, required }) => (
        <ConsentItem
          key={name}
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          required={required}
        />
      ))}
    </div>
  );
}

ConsentList.propTypes = {
  cookies: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      required: PropTypes.bool,
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  ),
  onChange: PropTypes.func,
};

ConsentList.defaultProps = {
  cookies: [],
  onChange: () => {},
};

export default memo(ConsentList);
