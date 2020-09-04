import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { InfoListContainer } from './infoList.styles';

import InfoItem from './_InfoItem';

const InfoList = ({ items }) => (
  <InfoListContainer>
    {items.map(({ description, title }, i) => (
      <InfoItem
        key={title}
        title={title}
        number={`${i + 1}.`}
      >
        {description}
      </InfoItem>
    ))}
  </InfoListContainer>
);

InfoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

InfoList.defaultProps = {
  items: [],
};

export default memo(InfoList);
