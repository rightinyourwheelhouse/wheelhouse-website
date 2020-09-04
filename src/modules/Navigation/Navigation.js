import React, { memo } from 'react';

import NavBar from '~components/NavBar';

import { useNavigation } from '~api/navigation/useNavigation';

const Navigation = (props) => {
  const items = useNavigation();

  return <NavBar {...props} items={items} />;
};

export default memo(Navigation);
