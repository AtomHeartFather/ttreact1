import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  )



render(
    app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
