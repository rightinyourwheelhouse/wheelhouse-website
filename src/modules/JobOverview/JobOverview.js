import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import * as React from 'react';

import CircleBackground from '~components/CircleBackground';
import Stack from '~components/Stack';
import SubTitle from '~components/SubTitle';

import Arrow from '~images/icons/arrow-top-right.svg';
import { useJobOverview } from '~services/job/useJobOverview';

import {
  JobItemContainer,
  JobTitle,
  IconContainer,
} from './jobOverview.styles';

function JobOverview({ current, title, subTitle }) {
  const jobs = useJobOverview({ count: 2, current });

  if (!jobs || jobs.length === 0) {
    return null;
  }

  return (
    <div>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {title && <h2>{title}</h2>}

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
}

JobOverview.propTypes = {
  current: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

JobOverview.defaultProps = {
  current: null,
};

export default JobOverview;
