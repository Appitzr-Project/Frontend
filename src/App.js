import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/HomePage'))
const Scan = lazy(() => import('./components/Scan/index.js'));
const Notification = lazy(() => import('./components/Notification/Notification'))
const OrderThankYou = lazy(() => import('./components/OrderThankYou/OrderThankYou'))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scan" component={Scan} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/thank-you" component={OrderThankYou} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;