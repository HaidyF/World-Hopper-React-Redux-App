import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import { CountriesReducer } from './Reducers/CountriesReducer';
import App from './App';

const store = createStore(CountriesReducer, 
  composeWithDevTools(applyMiddleware(thunk)
))

ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>,

  document.getElementById('root')
);
