import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { useSelector } from 'react-redux';

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
const ConfirmationCode = lazy(() => import('./components/Authenticator/ConfirmationCodeTemplate'))
const ForgotPassword = lazy(() => import('./components/Authenticator/ForgotPassword'))
const VenueList = lazy(() => import("./routes/VenueList/index"));
const MenuList = lazy(() => import('./routes/MenuList'))
const Tos = lazy(() => import('./routes/TOS'))
const Privacy = lazy(() => import('./routes/Privacy'))

function ProtectedRoute({ component: Component, levelAccess = null, ...restProps }) {
  const auth = useSelector(state => state.auth);

  return (<Route {...restProps} render={() => {
    if (auth.user) {
      const groupUser = auth.user.signInUserSession.idToken.payload['cognito:groups'];

      if (levelAccess && groupUser && groupUser.includes('venue')) {
        return <Component />
      } else if (!levelAccess && groupUser && groupUser.includes('venue')) {
        return <Redirect to='/venue' />
      } else {
        return <Component />
      }
    } else {
      return <Redirect to='/login' />
    }
  }} />)
}

function App() {

  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute path="/scan" component={Scan} />
            <ProtectedRoute path="/member" component={MemberLazy} />
            <ProtectedRoute exact path="/support" component={Support} />
            <ProtectedRoute path="/venue" component={Venue} levelAccess="venue" />
            <ProtectedRoute path="/venues" component={Venues} />
            <ProtectedRoute path="/profile-edit" component={ProfileEdit} />
            <ProtectedRoute path="/promo" component={DiscountInfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/confirmation-code" component={ConfirmationCode} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/venue-list" component={VenueList} />
            <Route path="/menulist/:idVenue" component={MenuList} />
            <Route path="/tos" component={Tos} />
            <Route path="/privacy" component={Privacy} />
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;