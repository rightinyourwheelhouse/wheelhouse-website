import React from 'react';

import { Section, Container } from '~components/layoutComponents';
import SEO from '~components/SEO';
import Content from '~components/Content';

import Layout from '~layouts/default';

import Navigation from '~modules/Navigation';

const InsightsPage = () => (
  <Layout>
    <SEO title="Wheelhouse website privacy policy" description="just another privacy policy" />
    <Navigation />

    <Section>
      <Container>
        <Content>
          <h1>Privacy policy</h1>
          <p>
            Wheelhouse NV, gevestigd aan Veldkant 33A, 2550 Kontich, is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals
            weergegeven in deze privacyverklaring.
          </p>
          <h2>Persoonsgegevens die wij verwerken</h2>
          <p>
            Wheelhouse NV verwerkt je persoonsgegevens doordat je gebruik maakt
            van onze diensten en/of omdat je deze gegevens zelf aan ons
            verstrekt.Hieronder vind je een overzicht van de persoonsgegevens
            die wij verwerken:
          </p>
          <ul>
            <li>Voor- en achternaam</li>
            <li>E-mailadres</li>
            <li>Gegevens over jouw activiteiten op onze website</li>
            <li>
              Gegevens over jouw surfgedrag over verschillende websites heen
              (bijvoorbeeld omdat dit bedrijf onderdeel is van een
              advertentienetwerk)
            </li>
            <li>Internetbrowser en apparaat type</li>
          </ul>
          <h2>Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h2>
          <p>
            Onze website en/of dienst heeft niet de intentie gegevens te
            verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij
            ze toestemming hebben van ouders of voogd. We kunnen echter niet
            controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan
            ook aan betrokken te zijn bij de online activiteiten van hun
            kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld
            worden zonder ouderlijke toestemming. Als je er van overtuigd bent
            dat wij zonder die toestemming persoonlijke gegevens hebben
            verzameld over een minderjarige, neem dan contact met ons op via
            hello@wheelhouse.be, dan verwijderen wij deze informatie.
          </p>
          <p>
            Met welk doel en op basis van welke grondslag wij persoonsgegevens
            verwerken Wheelhouse NV verwerkt jouw persoonsgegevens voor de
            volgende doelen:
          </p>
          <ul>
            <li>Verzenden van onze nieuwsbrief en/of reclamefolder</li>
            <li>
              Je te kunnen bellen of e-mailen indien dit nodig is om onze
              dienstverlening uit te kunnen voeren
            </li>
            <li>
              Je te informeren over wijzigingen van onze diensten en producten
            </li>
            <li>
              Wheelhouse NV analyseert jouw gedrag op de website om daarmee de
              website te verbeteren en het aanbod van producten en diensten af
              te stemmen op jouw voorkeuren.
            </li>
          </ul>
          <h2>Delen van persoonsgegevens met derden</h2>
          <p>
            Wheelhouse NV verstrekt uitsluitend aan derden en alleen als dit
            nodig is voor de uitvoering van onze overeenkomst met jou of om te
            voldoen aan een wettelijke verplichting.
          </p>
          <h2>Cookies of vergelijkbare technieken die wij gebruiken</h2>
          <p>
            Wheelhouse NV gebruikt functionele, analytische en tracking cookies.
            Een cookie is een klein tekstbestand dat bij het eerste bezoek aan
            deze website wordt opgeslagen in de browser van je computer, tablet
            of smartphone. Wheelhouse NV gebruikt cookies met een puur
            technische functionaliteit. Deze zorgen ervoor dat de website naar
            behoren werkt en dat bijvoorbeeld jouw voorkeursinstellingen
            onthouden worden. Deze cookies worden ook gebruikt om de website
            goed te laten werken en deze te kunnen optimaliseren. Daarnaast
            plaatsen we cookies die jouw surfgedrag bijhouden zodat we op maat
            gemaakte content en advertenties kunnen aanbieden.Bij jouw eerste
            bezoek aan onze website hebben wij je al geïnformeerd over deze
            cookies en hebben we je toestemming gevraagd voor het plaatsen
            ervan.Je kunt je afmelden voor cookies door je internetbrowser zo in
            te stellen dat deze geen cookies meer opslaat. Daarnaast kun je ook
            alle informatie die eerder is opgeslagen via de instellingen van je
            browser verwijderen.
          </p>
          <p>
            Op deze website worden ook cookies geplaatst door derden. Hieronder
            een overzicht:
          </p>
          <p>
            Cookie: Google Analytics
            {' '}
            <br />
            Naam: _ga, _gid, _gat_gtag
            {' '}
            <br />
            Functie: Analytische cookie die websitebezoek meet
            {' '}
            <br />
            Bewaartermijn: 2 jaar
          </p>
          <h2>Gegevens inzien, aanpassen of verwijderen</h2>
          <p>
            Je hebt het recht om je persoonsgegevens in te zien, te corrigeren
            of te verwijderen. Daarnaast heb je het recht om je eventuele
            toestemming voor de gegevensverwerking in te trekken of bezwaar te
            maken tegen de verwerking van jouw persoonsgegevens door Wheelhouse
            NV en heb je het recht op gegevensoverdraagbaarheid. Dat betekent
            dat je bij ons een verzoek kan indienen om de persoonsgegevens die
            wij van jou beschikken in een computerbestand naar jou of een ander,
            door jou genoemde organisatie, te sturen. Je kunt een verzoek tot
            inzage, correctie, verwijdering, gegevensoverdraging van je
            persoonsgegevens of verzoek tot intrekking van je toestemming of
            bezwaar op de verwerking van jouw persoonsgegevens sturen naar
            hello@wheelhouse.be.
          </p>
        </Content>
      </Container>
    </Section>
  </Layout>
);

export default InsightsPage;
