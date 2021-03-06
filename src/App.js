import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const MenuOption = lazy(() => import("./Components/MenuOption/MenuOption"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews"));
const Profile = lazy(() => import("./Components/Profile/Profile"));
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
            <Route path="/venue/reviews" component={Reviews} />
            <Route path="/venue/profile" component={Profile} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
