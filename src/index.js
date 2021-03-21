import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
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

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));
const persistor = persistStore(store);

Amplify.configure(awsExports);

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