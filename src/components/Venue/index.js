import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const MenuOption = lazy(() => import("./MenuOption"));
const Profile = lazy(() => import("./Profile/Profile"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Detail = lazy(() => import("./Detail"));
const Orders = lazy(() => import("./Orders"));
const Scan = lazy(() => import("./Scan"));
const OrderDetail = lazy(() => import("./OrderDetail"));
const MenuList = lazy(() => import("./Menu"));
const MenuAdd = lazy(() => import("./MenuForm"))
const MenuEdit = lazy(() => import("./MenuForm/edit"))
const DiscountLazy = lazy(() => import("./Discount/Lazy"))


function ProtectedRouteVenue({ component: Component , ...restProps }) {
  const auth = useSelector(state => state.auth );

  return(<Route {...restProps } render={() => {
    if(auth.user) {
      const groupUser = auth.user.signInUserSession.idToken.payload['cognito:groups'];

      if(groupUser && groupUser.includes('venue')) {
        return <Component />
      } else {
        return window.location.href = '/';
      }
    } else {
      return window.location.href = '/login';
    }
  }} />)
}

const Venue = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <ProtectedRouteVenue exact path="/venue" component={MenuOption} />
          <Route path="/venue/profile" component={Profile} />
          <ProtectedRouteVenue path="/venue/reviews" component={Reviews} />
          <ProtectedRouteVenue path="/venue/dashboard" component={Dashboard} />
          <ProtectedRouteVenue path="/venue/detail" component={Detail} />
          <ProtectedRouteVenue path="/venue/orders" component={Orders} />
          <ProtectedRouteVenue path="/venue/scan" component={Scan} />
          <ProtectedRouteVenue path="/venue/order-detail" component={OrderDetail} />
          <ProtectedRouteVenue path="/venue/menu/list" component={MenuList} />
          <ProtectedRouteVenue path="/venue/menu/add" component={MenuAdd} />
          <ProtectedRouteVenue path="/venue/menu/edit/:menuId" component={MenuEdit} />
          <ProtectedRouteVenue path="/venue/discount" component={DiscountLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Venue;
