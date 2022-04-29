import { config } from 'dotenv' //environment variables (stripe API key)
if (process.env.NODE_ENV !== 'production') {
    config();
}

import Stripe from 'stripe'; //initialize stripe
export const stripe = new Stripe(process.env.Stripe_Secret, {
    apiVersion: '2020-08-27',
});

import { app } from './api'; //start the API with ExpressJS 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`API available on http://localhost:${port}`));