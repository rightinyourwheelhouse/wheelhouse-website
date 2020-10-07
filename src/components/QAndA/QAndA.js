import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Markdown from '~components/Markdown';
import TwoColumns from '~components/TwoColumns';

import { QAndAContainer, QAndAItemContainer } from './qAndA.styles';

const QAndA = ({ items }) => (
  <QAndAContainer>
    {
       items.map(({ q, a }) => (
         <QAndAItemContainer>
           <TwoColumns>
             <div>
               <h3>{q}</h3>
             </div>
             <div>
               <Markdown source={a} />
             </div>
           </TwoColumns>
         </QAndAItemContainer>
       ))
     }
  </QAndAContainer>
);

QAndA.propTypes = {
  items: PropTypes.arrayOf({
    q: PropTypes.string,
    a: PropTypes.string,
  }).isRequired,
};

export default memo(QAndA);
