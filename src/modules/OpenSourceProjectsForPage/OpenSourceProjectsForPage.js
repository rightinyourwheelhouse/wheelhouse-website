import React from 'react';

import OpenSourceProjectLinkComponent from '~components/OpensourceLink';

import { useBestRepoByEmployees } from '~services/openSourceProjects/useOpenSourceLinks';

function OpenSourceProjectsForPage() {
  const projects = useBestRepoByEmployees();

  return projects.map(project => (
    <OpenSourceProjectLinkComponent key={project.htmlUrl} project={project} />
  ));
}

export default OpenSourceProjectsForPage;
