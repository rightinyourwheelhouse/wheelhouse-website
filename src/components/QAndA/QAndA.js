import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Markdown from '~components/Markdown';
import TwoColumns from '~components/TwoColumns';

import { QAndAContainer, QAndAItemContainer } from './qAndA.styles';

function QAndA({ items }) {
  return (
    <QAndAContainer>
      {items.map(({ q, a }) => (
        <QAndAItemContainer key={q}>
          <TwoColumns firstColumnWidth="30%">
            <div>
              <h3>{q}</h3>
            </div>
            <div>
              <Markdown>{a}</Markdown>
            </div>
          </TwoColumns>
        </QAndAItemContainer>
      ))}
    </QAndAContainer>
  );
}

QAndA.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      a: PropTypes.string,
      q: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(QAndA);
