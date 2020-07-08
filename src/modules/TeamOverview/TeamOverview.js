import React, { memo } from 'react';
import Link from 'gatsby-link';

import { useTeam } from '../../api/team/useTeam';
import { useNewMemberImage } from '../../api/images/useNewMemberImage';

import { CardsContainer } from './teamOverview.styles';

import TeamCard from '~components/TeamCard';

const TeamOverview = () => {
  const { members } = useTeam();
  const newMemberImage = useNewMemberImage();

  return (
    <div>
      <h2>Our talent pool</h2>
      <CardsContainer>
        {members.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
        <Link to="/careers">
          <TeamCard name="Do you" description="think you're a match? Contact us." image={newMemberImage} />
        </Link>
      </CardsContainer>
    </div>
  );
};

export default memo(TeamOverview);
