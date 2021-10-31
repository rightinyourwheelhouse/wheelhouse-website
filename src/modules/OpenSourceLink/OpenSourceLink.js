import React from 'react';

import OpenSourceProjectLinkComponent from '~components/OpensourceLink';
import { useGithubRepo } from '~services/openSourceProjects/useOpenSourceProjects';

function OpenSourceLink({ link }) {
  const project = useGithubRepo(link);

  return <OpenSourceProjectLinkComponent project={project} />;
}

export default OpenSourceLink;
