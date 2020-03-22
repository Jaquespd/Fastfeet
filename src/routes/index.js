import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Delivery from '../pages/Delivery';
import DeliveryForm from '../pages/Delivery/Form';
import Deliveryman from '../pages/Deliveryman';
import Recipient from '../pages/Recipient';
import Problem from '../pages/Problem';

import Dashboard from '../pages/Dashboard';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />

      <Route path="/delivery" component={Delivery} exact isPrivate />
      <Route path="/delivery/form" component={DeliveryForm} exact isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
