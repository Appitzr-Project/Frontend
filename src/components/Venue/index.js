import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Add, View } from './menu'
const MenuOption = lazy(() => import("./MenuOption"));
const Profile = lazy(() => import("./Profile/Profile"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Detail = lazy(() => import("./Detail"));
<<<<<<< HEAD
=======
const MenuList = lazy(() => import("./menu"));
>>>>>>> 2bc60098cf6f020766f7c7207acb838774ed30da
const MenuAdd = lazy(() => import("./menu/MenuAdd"));

const Venue = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/venue" component={MenuOption} />
          <Route path="/venue/profile" component={Profile} />
          <Route path="/venue/reviews" component={Reviews} />
          <Route path="/venue/dashboard" component={Dashboard} />
<<<<<<< HEAD
          <Route exact path="/venue/menu" component={View} />
=======
          <Route exact path="/venue/menu" component={MenuList} />
>>>>>>> 2bc60098cf6f020766f7c7207acb838774ed30da
          <Route path="/venue/menu/add" component={MenuAdd} />
          <Route path="/venue/detail" component={Detail} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Venue;
