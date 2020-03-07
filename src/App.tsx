import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { routes } from './domain/route';

const createRoute = () => {
  return routes.map(route => (
    <Route
      key={route.name}
      exact
      path={route.path}
      component={route.component}
    />
  ));
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>{createRoute()}</Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
