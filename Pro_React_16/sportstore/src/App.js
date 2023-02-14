import React, { Component } from 'react';

import { SportStoreDataStore } from "./data/DataStore";

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ShopConnector } from "./shop/ShopConnector";

const App = () => {
  return (
    <Provider store={SportStoreDataStore}>
      <Router>
        <Switch>
          <Route path={"/shop"} component={ShopConnector} />
          <Redirect to={"/shop"} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;