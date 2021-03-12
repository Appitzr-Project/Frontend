import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const MenuOption = lazy(() => import("./MenuOption"));
const Profile = lazy(() => import("./Profile/Profile"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Detail = lazy(() => import("./Detail"));

const Venue = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/venue" component={MenuOption} />
          <Route path="/venue/profile" component={Profile} />
          <Route path="/venue/reviews" component={Reviews} />
          <Route path="/venue/dashboard" component={Dashboard} />
          <Route exact path="/venue/menu" component={View} />
          <Route path="/venue/menu/add" component={Add} />
          <Route path="/venue/detail" component={Detail} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Venue;
