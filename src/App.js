import { lazy, Suspense } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/HomePage'))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default withAuthenticator(App);