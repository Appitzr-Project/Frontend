import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const MenuOption = lazy(() => import("./components/MenuOption/MenuOption"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const HomePage = lazy(() => import("./components/HomePage"));

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/venue" component={MenuOption} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
