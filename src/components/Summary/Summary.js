import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { SummaryContainer, Title, List } from './summary.styles';

function Summary({ title, items }) {
  return (
    <SummaryContainer>
      {title && <Title>{title}</Title>}
      <List>
        {items.map(({ label, disabled }) => (
          <li key={label} className={disabled && 'disabled'}>
            {label}
          </li>
        ))}
      </List>
    </SummaryContainer>
  );
}

Summary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

Summary.defaultProps = {
  title: null,
};

export default memo(Summary);
