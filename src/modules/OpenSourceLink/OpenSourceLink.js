import React, { memo, useEffect, useState } from 'react';

import OpenSourceLinkComponent from '~components/OpenSourceLink';
import { useUserRepos } from '~services/openSourceProjects/useOpenSourceProjects';

const OpenSourceLink = ({ link }) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setInfo = async () => setItems(await useUserRepos(link));
    setInfo();
  }, [link]);
  return <OpenSourceLinkComponent items={items} />;
};

export default memo(OpenSourceLink);
