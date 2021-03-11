import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Add, View } from './menu'
const MenuOption = lazy(() => import("./MenuOption"));
const Profile = lazy(() => import("./Profile/Profile"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
<<<<<<< HEAD
// const Menu = lazy(() => import("./menu"));
// const MenuAdd = lazy(() => import("./menu/add.js"));
=======
const Detail = lazy(() => import("./Detail"));
>>>>>>> f0bf1e4e1c6ad1e0e19ecc9662fffe38475ee0ab

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
          <Route path="/venue/menu/add" component={Add} />
=======
          <Route path="/venue/detail" component={Detail} />
>>>>>>> f0bf1e4e1c6ad1e0e19ecc9662fffe38475ee0ab
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Venue;
