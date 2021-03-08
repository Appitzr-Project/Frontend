import { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/HomePage'))
const Scan = lazy(() => import('./components/Scan/index.js'));
const MemberLazy = lazy(() => import('./components/Member/index.js'));
const Notification = lazy(() => import('./components/Notification/Notification'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/scan" component={Scan} />
          <Route path="/member" component={MemberLazy} />
          <Route exact path="/notification" component={Notification} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;