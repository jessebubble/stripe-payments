import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Elements } from  '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  'pk_test_51KulHKGcny6FGoik7O1X4Dw9wGhn9ShVHWPNXoDk64ECGbhF8xRBbiBadsb08aZTY44pcGu1RoDwXUj7fVZ1tAgf00qbivpehh'
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);