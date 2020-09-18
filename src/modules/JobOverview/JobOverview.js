import React, { memo } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import Stack from '~components/Stack';

import { JobItemContainer, JobTitle, IconContainer } from './jobOverview.styles';

import CircleBackground from '~components/CircleBackground';

import { useJobOverview } from '~api/job/useJobOverview';

import Arrow from '~images/icons/arrow-top-right.svg';

const JobOverview = ({ current }) => {
  const jobs = useJobOverview({ count: 2, current });

  return (
    <div>
      <Stack space="60px">
        <div>
          {jobs.map(({ title, slug, city }) => (
            <Link to={`/careers/${slug}`} key={slug}>
              <JobItemContainer>
                <span>{city}</span>
                <JobTitle>{title}</JobTitle>
                <IconContainer>
                  <CircleBackground>
                    <Arrow />
                  </CircleBackground>
                </IconContainer>
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
