import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import favicon from 'src/assets/images/logo.png';

import { Home } from 'src/pages/Home';
import { Login } from 'src/pages/Login';
import { NotFound404 } from 'src/pages/404';

// TODO: Add HOC Lazyloader using `react-loadable`. Wait for Babel 7 support release.
// import { Home, Login, NotFound404 } from './lazyLoader'

export const Router = () => (
  // Using HashRouter to allow entering an URL directly, you can try to find some workaround for
  // BrowserRouter or Router with `history`. This aim to keep the code short and simple.
  <HashRouter>
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  </HashRouter>
);
