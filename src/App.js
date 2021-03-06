import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/HomePage'))
const Notification = lazy(() => import('./components/Notification/Notification'))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/notification" component={Notification} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;