import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Lander from '../../components/Lander';

const publicPath = '/';

export const routeCodes = {
  LANDER: publicPath,
  OTHER: `${publicPath}other`
};

export default () => (
  <Switch>
    <Route exact path={publicPath} component={Lander} />
  </Switch>
);
