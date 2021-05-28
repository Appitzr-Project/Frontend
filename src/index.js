import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducers';
import { apiMiddleware } from './redux/api/middleware.api';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
// import Authenticator from './components/Authenticator/Authenticator';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

const oauthRedirect = awsExports.oauth.redirectSignIn.split(",");
const localRedirect = oauthRedirect.filter((val) => val.includes('localhost'))[0];
const productionRedirect = oauthRedirect.filter((val) => !val.includes('localhost'))[0];

const updatedAwsConfig = {
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: isLocalhost ? localRedirect : productionRedirect,
    redirectSignOut: isLocalhost ? localRedirect : productionRedirect,
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));
const persistor = persistStore(store);

Amplify.configure(updatedAwsConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading..</div>}>
        {/* <Authenticator>  */}
        <App />
        {/* </Authenticator> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
