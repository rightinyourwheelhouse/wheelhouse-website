import React, { memo } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import Stack from '~components/Stack';

import { JobItemContainer, JobTitle } from './jobOverview.styles';

import { useJobOverview } from '~api/job/useJobOverview';

const JobOverview = ({ current }) => {
  const jobs = useJobOverview({ count: 2, current });

  return (
    <div>
      <Stack space="60px">
        <div>
          {jobs.map(({ title, slug, city }) => (
            <Link to={`/careers/${slug}`} key={slug}>
              <JobItemContainer>
                <JobTitle>{title}</JobTitle>
                <p>{city}</p>
              </JobItemContainer>
            </Link>
          ))}
        </div>
      </Stack>
    </div>
  );
};

JobOverview.propTypes = {
  current: PropTypes.string,
};

JobOverview.defaultProps = {
  current: null,
};

export default memo(JobOverview);
