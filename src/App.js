import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const Venue = lazy(() => import("./components/Venue"));
const HomePage = lazy(() => import("./components/HomePage"));

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/venue" component={Venue} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
