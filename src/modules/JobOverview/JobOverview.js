import React, { memo } from 'react';
import Link from 'gatsby-link';

import SubTitle from '../../components/SubTitle';
import Stack from '../../components/Stack';

import { JobItemContainer } from './jobOverview.styles';

import { useJobOverview } from '../../api/job/useJobOverview';

const JobOverview = () => {
  const [jobItems] = useJobOverview(2);

  return (
    <div>
      <SubTitle>careers</SubTitle>
      <h2>Work with us</h2>

      <Stack space="60px">
        <div>
          {jobItems.map(({ title, slug, city }) => (
            <Link to={`/careers/${slug}`} key={slug}>
              <JobItemContainer>
                <h3>{title}</h3>
                <p>{city}</p>
              </JobItemContainer>
            </Link>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default memo(JobOverview);
