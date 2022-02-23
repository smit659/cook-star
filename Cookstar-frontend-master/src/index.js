import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ContextAPI} from './context'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </React.StrictMode>,
  document.getElementById('root')
);