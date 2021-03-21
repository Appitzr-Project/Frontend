import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserAction } from './redux/actions/auth.action';

const HomePage = lazy(() => import('./components/Member'))
const Scan = lazy(() => import('./components/Scan/index.js'));
const MemberLazy = lazy(() => import('./components/Member/index.js'));
const Venue = lazy(() => import("./components/Venue"));
const Venues = lazy(() => import("./components/Venues"));
const Support = lazy(() => import('./components/Support'));
const ProfileEdit = lazy(() => import('./components/ProfileEdit'));
const DiscountInfo = lazy(() => import('./components/DiscountInfo'))
const Login = lazy(() => import('./components/Authenticator/Login'))
const Register = lazy(() => import('./components/Authenticator/Register'))
const ConfirmationCode = lazy(() => import('./components/Authenticator/ConfirmationCode'))

function ProtectedRoute({ component: Component , ...restProps }) {
  const auth = useSelector(state => state.auth )

  return(<Route {...restProps } render={() => {
    if(auth.user) 
      return <Component />
    else
      return <Redirect to='/login' />
  }} />)
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUserAction())
  }, [])

  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute path="/scan" component={Scan} />
            <ProtectedRoute path="/member" component={MemberLazy} />
            <ProtectedRoute exact path="/support" component={Support} />
            <ProtectedRoute path="/venue" component={Venue} />
            <ProtectedRoute path="/venues" component={Venues} />
            <ProtectedRoute path="/profile-edit" component={ProfileEdit} />
            <ProtectedRoute path="/promo" component={DiscountInfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/confirmation-code" component={ConfirmationCode} />
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
