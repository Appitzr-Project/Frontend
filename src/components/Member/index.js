import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const MemberPage = lazy(() => import('./Home/index.js'));
const MemberOrderSummary = lazy(() => import('./OrderSummary/index.js'));

function Member() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/member" component={MemberPage} />
          <Route exact path="/" component={MemberPage} />
          <Route exact path="/member/" component={ProfilePage} />
          <Route path="/member/order-summary" component={MemberOrderSummary} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Member;
