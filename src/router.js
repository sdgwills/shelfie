import React from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';



export default (
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/add' component={Form} />
          </Switch>
)
