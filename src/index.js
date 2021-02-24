import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducers';
import { apiMiddleware } from './redux/api/middleware.api';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware))
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={(<div>Loading..</div>)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();