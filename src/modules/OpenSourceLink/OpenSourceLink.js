import React from 'react';

import OpenSourceLinkComponent from '~components/OpensourceLink';
import { useUserRepos } from '~services/openSourceProjects/useOpenSourceProjects';

function OpenSourceLink({ link }) {
  const items = useUserRepos(link);

  return <OpenSourceLinkComponent items={items} />;
}

export default OpenSourceLink;
