import React, { memo } from 'react';

import CardCareers from '../CardCareers/cardCareers';

function CardDiversity() {
  return (
    <CardCareers>
      <div>
        <h2>Hey, you!</h2>
        <p>
          Talent goes beyond any label. For us, your gender identity, sexuality,
          nationality, religion, or any other label make no difference. At
          Wheelhouse, we care about who you are and what you can do.{' '}
        </p>
        <p>
          Did you know that research proved male candidates apply for a job when
          they check off 60% of the requirements, whereas women need to
          recognize themselves 100% in the job before even considering it? So,
          dear job seeker, ignore the qualifications, and let’s see if we are a
          good match.
        </p>
      </div>
    </CardCareers>
  );
}

export default memo(CardDiversity);
