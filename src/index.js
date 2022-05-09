import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
// import { devToolsEnhancer } from 'redux-devtools-extension'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));


const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));


root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
