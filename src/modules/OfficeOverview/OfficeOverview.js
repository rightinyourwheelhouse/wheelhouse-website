import Link from 'gatsby-link';
import React, { memo } from 'react';

import { OfficeItemContainer } from './officeOverview.styles';

import Card from '~components/Card';
import SubTitle from '~components/SubTitle';
import TwoColumns from '~components/TwoColumns';
import { useOfficeOverview } from '~services/office/useOfficeOverview';

const OfficeOverview = () => {
  const offices = useOfficeOverview();

  return (
    <div>
      <SubTitle>offices</SubTitle>
      <h2>Where to find us</h2>

      <OfficeItemContainer>
        <TwoColumns>
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
        </TwoColumns>
      </OfficeItemContainer>
    </div>
  );
};

export default memo(OfficeOverview);
