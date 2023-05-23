import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer.js';
import { legacy_createStore } from 'redux';

const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Används för att få igång våran Redux devtools
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
    <Provider store= { store } >
    <App />
    </Provider>
  </React.StrictMode>,
)
