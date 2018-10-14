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
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MenuBar from 'containers/MenuBar/Loadable';
import Footer from 'components/Footer';
import TestPage from 'containers/TestPage/Loadable';
import AuthPage from 'containers/AuthPage/Loadable';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export const PublicLayout = () => (
  <div>
    <Switch>
      <Route path="/test" component={TestPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export const ProtectedLayout = () => (
  <div>
    <MenuBar />
    <Switch>
      <Route exact path="/app/" component={HomePage} />
      <Route path="/app/features" component={FeaturePage} />
    </Switch>
    <Footer />
  </div>
);

export class App extends React.PureComponent {
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Bitcoin Management Platform"
          defaultTitle="Bitcoin Management Platform"
        >
          <meta
            name="description"
            content="Front end for bitcoin management platform"
          />
        </Helmet>

        <Switch>
          <Route path="/app" component={ProtectedLayout} />
          <Route path="/" component={PublicLayout} />
        </Switch>
      </AppWrapper>
    )
  };
}

export default App;