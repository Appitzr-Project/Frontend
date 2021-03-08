import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";


const HomePage = lazy(() => import('./components/HomePage'))
const Scan = lazy(() => import('./components/Scan/index.js'));
const MemberLazy = lazy(() => import('./components/Member/index.js'));
const Notification = lazy(() => import('./components/Notification/Notification'));
const Venue = lazy(() => import("./components/Venue"));
const Support = lazy(() => import('./components/Support'));
const ProfileEdit = lazy(() => import('./components/ProfileEdit'));

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/scan" component={Scan} />
            <Route path="/member" component={MemberLazy} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/support" component={Support} />
            <Route path="/venue" component={Venue} />
            <Route path="/profile-edit" component={ProfileEdit} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
