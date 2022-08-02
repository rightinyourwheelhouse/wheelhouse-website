import Link from 'gatsby-link';
import React, { memo } from 'react';

import Card from '~components/Card';
import SubTitle from '~components/SubTitle';
import ThreeColumns from '~components/ThreeColumns';
import { useOfficeOverview } from '~services/office/useOfficeOverview';

import { OfficeItemContainer } from './officeOverview.styles';

import Button from '../../components/Button';
import {useCaseOverview} from "~services/case/useCaseOverview";

function OfficeOverview() {
  const offices = useOfficeOverview();
  const cases = useCaseOverview();

  return (
    <div>
      <SubTitle>offices</SubTitle>
      <h2>Where to find us</h2>

      <OfficeItemContainer>
        <ThreeColumns>
          {offices.map(({ name, street, city, slug, mail, phone }) => (
            <Card key={name}>
              <h3>{name}</h3>
              <p>
                {street} <br /> {city}
              </p>
              <p>
                <a href={`mailto:${mail}`}>{mail}</a>
                <br />
                <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <Button to={`/offices/${slug}`} as={Link} key={slug}>
                How to get there
              </Button>
            </Card>
          ))}
        </ThreeColumns>
      </OfficeItemContainer>

        {cases.map(({ name, street, city, slug, mail, phone }) => (
            <Card key={name}>
                <h3>{name}</h3>
                <p>
                    {street} <br /> {city}
                </p>
                <p>
                    <a href={`mailto:${mail}`}>{mail}</a>
                    <br />
                    <a href={`tel:${phone}`}>{phone}</a>
                </p>
                <Button to={`/offices/${slug}`} as={Link} key={slug}>
                    How to get there
                </Button>
            </Card>
        ))}
    </div>
  );
}

export default memo(OfficeOverview);
