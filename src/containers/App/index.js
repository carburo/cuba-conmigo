/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage';
import AboutPage from 'containers/About/Loadable';
import TravelPage from 'containers/Travel/Loadable';
import ServicesPage from 'containers/Services/Loadable';
import ContactPage from 'containers/Contact/Loadable';
import TranslationsPage from 'containers/Translations/Loadable';
import LegalPage from 'containers/Legal/Loadable';

import './bootstrap.css';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Cuba Conmigo"
        defaultTitle="Cuba Conmigo"
      >
        <meta name="description" content="Cuba Conmigo." />
      </Helmet>
      <Header />
      <main role="main">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={HomePage} />
        </Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/travel" component={TravelPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/translations" component={TranslationsPage} />
        <Route path="/legal" component={LegalPage} />
      </main>
      <Footer />
    </AppWrapper>
  );
}
