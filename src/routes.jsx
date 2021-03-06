import React from 'react';
import { Route } from 'react-router'

/* containers */
import { App } from 'containers/App';
import { PaymentMethodPage } from 'containers/PaymentMethodPage';
import { CreditCardPage } from 'containers/CreditCardPage';

export default (
  <Route path="/" component={ App }>
    <Route path="paymentmethod" component={ PaymentMethodPage } />
    <Route path="creditcard" component={ CreditCardPage } />
  </Route>
);