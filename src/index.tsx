import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App name="Andrew" />
  </React.StrictMode>,
  document.getElementById('app')
);
