import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { InfoItemContainer, ItemNumber } from './infoItem.styles';

const InfoItem = ({ children, number, title }) => {
  console.log('state handlers');

  return (
    <InfoItemContainer>
      <ItemNumber>
        0
        {number}
      </ItemNumber>
      <h3>{title}</h3>
      <p>{children}</p>
    </InfoItemContainer>
  );
};

InfoItem.propTypes = {
  children: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(InfoItem);
