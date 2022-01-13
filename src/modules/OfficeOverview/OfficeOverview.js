import Link from 'gatsby-link';
import React, { memo } from 'react';

import Card from '~components/Card';
import SubTitle from '~components/SubTitle';
import ThreeColumns from '~components/ThreeColumns';
import { useOfficeOverview } from '~services/office/useOfficeOverview';

import { OfficeItemContainer } from './officeOverview.styles';

function OfficeOverview() {
  const offices = useOfficeOverview();

  return (
    <div>
      <SubTitle>offices</SubTitle>
      <h2>Where to find us</h2>

      <OfficeItemContainer>
        <ThreeColumns>
          {offices.map(({ name, address, slug, mail, phone }) => (
            <Card key={name}>
              <Link to={`/offices/${slug}`} key={slug}>
                <h3>{name}</h3>
                <p>{address}</p>
              </Link>
              <p>
                <a href={`mailto:${mail}`}>{mail}</a>
                <br />
                <a href={`tel:${phone}`}>{phone}</a>
              </p>
            </Card>
          ))}
        </ThreeColumns>
      </OfficeItemContainer>
    </div>
  );
}

export default memo(OfficeOverview);
