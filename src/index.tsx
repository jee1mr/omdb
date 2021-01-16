// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

// App Imports
import { RouteWithSubRoutes, ROUTES } from './setup/routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {ROUTES.map((route) => {
        return <RouteWithSubRoutes {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
