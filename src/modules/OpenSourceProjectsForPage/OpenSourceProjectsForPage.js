import React from 'react';

import OpenSourceLinkComponent from '~components/OpensourceLink';

import { useOpenSourceLinks } from '~services/openSourceProjects/useOpenSourceLinks';
import { useUserRepos } from '~services/openSourceProjects/useOpenSourceProjects';

function OpenSourceProjectsForPage() {
  const links = useOpenSourceLinks();
  const items = links.map(useUserRepos);
  return items.map(item => (
    <OpenSourceLinkComponent key={item.repoFullName} items={item} />
  ));
}

export default OpenSourceProjectsForPage;
