import { stripe } from './';
import Stripe from 'stripe';

export async function createStripeCheckoutSession( // Creates a Stripe Checkout session with line items
    line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
  ) {

// Example Item
/* {
    name: 'T-shirt',
    description: 'Comfortable cotton t-shirt',
    images: [''],
    amount: 500, 
    currency: 'usd',
    quantity:  1,
} */
  
    const url = 'process.env.WEBAPP_URL';
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/failed`,
    });
  
    return session;
  }