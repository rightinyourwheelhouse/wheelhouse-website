import React, { memo } from 'react';

import NavBar from '~components/NavBar';
import { useJobOverview } from '~services/job/useJobOverview';
import { useNavigation } from '~services/navigation/useNavigation';

function Navigation(props) {
  const jobs = useJobOverview();
  const items = useNavigation();

  return <NavBar {...props} items={items} careerCount={jobs.length} />;
}

export default memo(Navigation);
