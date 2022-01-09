
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { RootCmp } from './root-cmp';
import { Provider } from 'react-redux'
import { store } from './store/store'
import './assets/styles/main.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RootCmp />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

