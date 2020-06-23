import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Section, Container } from '../components/layoutComponents';
import SubTitle from '../components/SubTitle';
import NavBar from '../components/NavBar';

import Layout from '../layouts/default';

import navigation from '../data/navigation';

const Career = () => {
  console.log('state handlers');

  return (
    <Layout>
      <NavBar items={navigation} />
      <Section>
        <Container>
          <SubTitle>Careers</SubTitle>
          <h1>
            Medior full-stack Developer
          </h1>
          <p>
            To enforce our team, we are currently looking for a passionate and eager medior full stack developer.
          </p>
          <p>
            If you are able to manage databases, write middleware and create awesome front ends, you could well be the next member of our family.
          </p>
          <p>
            As Wheelhouse ambassador, you will help our customers with your expertise in the newest technologies by building modern software solutions.
          </p>

          <h2>Your Foundations</h2>
          <ul>
            <li>
              You have a bachelor in Informatics or master in Computer Science (or related)
            </li>
            <li>
              You have at least 2 years of work experience as a full-stack developer
            </li>
            <li>
              You have significant knowledge of both back-end (Node.js, MongoDB, SQL, AMQP)
            </li>
            <li>
              and front-end development (ES6, HTML5, CSS3) development
            </li>
            <li>
              You have experience working with one of the following frameworks:
            </li>
            <li>
              Angular, Ionic, Express, Strongloop, ReactJS, Vue.js ...
            </li>
            <li>
              You master the common software engineering practices
            </li>
            <li>
              (git, unit testing, code documentation, continuous integration, dependency management, monitoring, version
            </li>
            <li>
              management …)
            </li>
            <li>
              You have a good understanding of database design concepts
            </li>
            <li>
              You know how to work hands-on as a developer in an agile environment
            </li>
            <li>
              You care about building and shipping high-quality code
            </li>
            <li>
              You love to experiment and explore new technologies/frameworks
            </li>
          </ul>
          ^
        </Container>
      </Section>
    </Layout>
  );
};

Career.propTypes = {};

export default memo(Career);
