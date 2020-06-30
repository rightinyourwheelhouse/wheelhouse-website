import React, { memo } from 'react';

import NavBar from '../../components/NavBar';

import { useJobOverview } from '../../api/job/useJobOverview';

const Navigation = (props) => {
  const [jobs] = useJobOverview();

  return <NavBar {...props} careerCount={jobs.length} />;
};

export default memo(Navigation);
