import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const MemberPage = lazy(() => import('./Home/index.js'));
const ProfilePage = lazy(() => import('./Profile/index.js'));
const MemberOrderSummary = lazy(() => import('./OrderSummary/index.js'));
const OrderHistory = lazy(() => import('./OrderHistory/OrderHistory.jsx'));
const Notification = lazy(() => import('./Notification/Notification'));
const ProfileEdit = lazy(() => import('../ProfileEdit/index'));
const Support = lazy(() => import('../Support/index'));
const OrderThankYou = lazy(() => import('./OrderThankYou/OrderThankYou'));
const Review = lazy(() => import('./Review/Review'));
const OrderDetail = lazy(() => import('./OrderDetail'));
const MemberOrderMenu = lazy(() => import('./OrderMenu'));

function Member() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MemberPage} />
          <Route exact path="/member" component={ProfilePage} />
          <Route path="/member/order-summary" component={MemberOrderSummary} />
          <Route path="/member/order-detail" component={OrderDetail} />
          <Route path="/member/order/history" component={OrderHistory} />
          <Route path="/member/notification" component={Notification} />
          <Route path="/member/profile-edit" component={ProfileEdit} />
          <Route exact path="/member/contact/support" component={Support} />
          <Route path="/member/thank-you" component={OrderThankYou} />
          <Route path="/member/review" component={Review} />
          <Route exact path="/member/order-menu" component={MemberOrderMenu} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Member;
