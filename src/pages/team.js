import React from 'react';
import Link from 'gatsby-link';

import { Section, Container, LightContent } from '~components/layoutComponents';
import BlogText from '~components/BlogText';
import Button from '~components/Button';
import SEO from '~components/SEO';
import Summary from '~components/Summary';
import SubTitle from '~components/SubTitle';
import TwoColumns from '~components/TwoColumns';

import Layout from '~layouts/default';

import JobOverview from '~modules/JobOverview';
import Navigation from '~modules/Navigation';
import TeamOverview from '~modules/TeamOverview';
import WorkingAtmosphere from '~modules/WorkingAtmosphere';

import navigation from '~data/navigation';

import colors from '~styles/colors';

const TeamPage = () => (
  <Layout>
    <SEO title="Wheelhouse consist of these people" />
    <Navigation items={navigation} />

    <Section>
      <Container>
        <BlogText>
          <SubTitle>team</SubTitle>
          <h2>Feeling at home</h2>
          <p>
            Our door is always open to new enthusiastic colleagues. We welcome you
            to a fun family where everyone feels comfortable and supports each
            other. Our passionate team will gladly guide you through Wheelhouse!
          </p>
          <Button
            as={Link}
            to="/careers"
          >
            View open positions
          </Button>
        </BlogText>
      </Container>
    </Section>

    <WorkingAtmosphere />

    <Section>
      <Container>
        <TeamOverview />
      </Container>
    </Section>

    <Section background={colors.backgroundSecundary}>
      <Container>
        <LightContent>
          <TwoColumns>
            <div>
              <Summary
                title="What we do"
                items={[
                  { label: 'Think about UX' },
                  { label: 'Coach and code' },
                  { label: 'Love clean code' },
                  { label: 'Bring added value with design' },
                  { label: 'Make excisting teams stronger' },
                  { label: 'Turn spaghetti into code' },
                ]}
              />
            </div>
            <div>
              <Summary
                title="What we don't do"
                items={[
                  { disabled: true, label: 'Make false promises' },
                  { disabled: true, label: 'Give up' },
                  { disabled: true, label: 'Make plans for world domination' },
                  { disabled: true, label: 'Quick and dirty' },
                  { disabled: true, label: 'Prototyping' },
                  { disabled: true, label: 'Leave unfinished burgers behind' },
                ]}
              />
            </div>
          </TwoColumns>
        </LightContent>
      </Container>
    </Section>

    <Section>
      <Container>

        <JobOverview />

      </Container>
    </Section>
  </Layout>
);

export default TeamPage;
