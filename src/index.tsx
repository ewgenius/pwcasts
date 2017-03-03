import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';

const sw = require('file-loader?name=sw.js!ts-loader!./sw.ts');

async function initSW() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(sw);
      const subscription = await registration.pushManager.getSubscription();
      const subscribed = !(subscription === null);
    }
    catch (err) {
      console.log(err);
    }
  }
}

initSW();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
