import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./components/HomePage'));
const Scan = lazy(() => import('./components/Scan/index.js'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scan" component={Scan} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
