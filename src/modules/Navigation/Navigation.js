import React, { memo } from 'react';

import NavBar from '~components/NavBar';

import { useJobOverview } from '~api/job/useJobOverview';
import { useNavigation } from '~api/navigation/useNavigation';

const Navigation = (props) => {
  const jobs = useJobOverview();
  const items = useNavigation();

  return <NavBar {...props} items={items} careerCount={jobs.length} />;
};

export default memo(Navigation);
