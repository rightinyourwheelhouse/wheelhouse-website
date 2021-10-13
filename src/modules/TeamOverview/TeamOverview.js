import React, { memo } from 'react';

import { CardsContainer } from './teamOverview.styles';

import { useTeam } from '../../api/team/useTeam';

import SubTitle from '~components/SubTitle';
import TeamCard from '~components/TeamCard';

const TeamOverview = () => {
  const members = useTeam();

  return (
    <div>
      <SubTitle>We are</SubTitle>
      <h2>Our talent pool</h2>
      <CardsContainer>
        {members.map(member => (
          <TeamCard key={member.name} {...member} />
        ))}
      </CardsContainer>
    </div>
  );
};

export default memo(TeamOverview);
