import React, { memo } from 'react';
import Link from 'gatsby-link';

import SubTitle from '~components/SubTitle';
import Stack from '~components/Stack';
import Card from '~components/Card';
import TwoColumns from '~components/TwoColumns';

import { OfficeItemContainer } from './officeOverview.styles';

import { useOfficeOverview } from '~api/office/useOfficeOverview';

const OfficeOverview = () => {
  const offices = useOfficeOverview();

  return (
    <div>
      <SubTitle>offices</SubTitle>
      <h2>Where to find us</h2>

      <OfficeItemContainer>
        <TwoColumns>
          {offices.map(({
            name, address, slug, mail, phone,
          }) => (
            <Card>
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
