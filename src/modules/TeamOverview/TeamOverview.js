import React, { memo } from 'react';

import { useTeam } from '../../api/team/useTeam';

const TeamOverview = () => {
  const { members } = useTeam();

  return (
    <div>
      {members.map(({ name }) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default memo(TeamOverview);
