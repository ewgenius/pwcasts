import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';

const sw = require('file-loader?name=sw.js!ts-loader!./sw.ts');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(sw)
    .then(registration => {
      console.log(registration);
    })
    .catch(err => {
      console.log(err);
    });
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
