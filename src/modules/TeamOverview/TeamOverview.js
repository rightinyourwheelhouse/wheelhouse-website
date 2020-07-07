import React, { memo } from 'react';

import { useTeam } from '../../api/team/useTeam';

import { CardsContainer } from './teamOverview.styles';

import TeamCard from '~components/TeamCard';

const TeamOverview = () => {
  const { members } = useTeam();

  return (
    <div>
      <h2>Our talent pool</h2>
      <CardsContainer>
        {members.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </CardsContainer>
    </div>
  );
};

export default memo(TeamOverview);
