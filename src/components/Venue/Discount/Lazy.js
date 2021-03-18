import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const DiscountList = lazy(() => import('./List'));
const DiscountAdd = lazy(() => import('./Add'));
const DiscountEdit = lazy(() => import('./Edit'));

const Venue = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/venue/discount" component={DiscountList} />
          <Route path="/venue/discount/add" component={DiscountAdd} />
          <Route path="/venue/discount/edit" component={DiscountEdit} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Venue;
