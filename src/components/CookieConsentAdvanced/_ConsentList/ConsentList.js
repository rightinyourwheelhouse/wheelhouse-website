import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ConsentItem from './_ConsentItem';

const ConsentList = ({ cookies, onChange }) => (
  <div>
    {cookies.map(({
      name, value, label, required,
    }) => (
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

ConsentList.propTypes = {
  cookies: PropTypes.arrayOf(
    PropTypes.shape({
      ...ConsentItem.propTypes,
    })
  ),
  onChange: PropTypes.func,
};

ConsentList.defaultProps = {
  cookies: [],
  onChange: () => {},
};

export default memo(ConsentList);
