import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const Venue = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/venue" component={MenuOption} />
          <Route path="/venue/profile" component={Profile} />
          <Route path="/venue/reviews" component={Reviews} />
          <Route path="/venue/dashboard" component={Dashboard} />
          <Route path="/venue/detail" component={Detail} />
          <Route path="/venue/orders" component={Orders} />
          <Route path="/venue/scan" component={Scan} />
          <Route path="/venue/order-detail" component={OrderDetail} />
          <Route path="/venue/menu/list" component={MenuList} />
          <Route path="/venue/menu/add" component={MenuAdd} />
          <Route path="/venue/menu/edit/:menuId" component={MenuEdit} />
          <Route path="/venue/discount" component={DiscountLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Venue;
