import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const MemberPage = lazy(() => import('./Home/index.js'));
const MemberOrderSummary = lazy(() => import('./OrderSummary/index.js'));
const Notification = lazy(() => import('./Notification/Notification'));

function Member() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/member" component={MemberPage} />
          <Route path="/member/order-summary" component={MemberOrderSummary} />
          <Route path="/member/notification" component={Notification} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Member;
