import express, { Request, Response, NextFunction} from 'express';
export const app = express();

app.use( express.json() )

import cors from 'cors';
import { createStripeCheckoutSession } from './checkout';

app.use( cors({ origin: true }) );

app.post('/test', (req, res) => {
    const amount = req.body.amount;

    res.status(200).send({ with_tax: amount * 7 });
});

 // Catch async errors when awaiting promises 
 function runAsync(callback: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
      callback(req, res, next).catch(next);
    };
  }
  //Checkouts
  app.post(
    '/checkouts/',
    runAsync(async ({ body }: Request, res: Response) => {
      res.send(await createStripeCheckoutSession(body.line_items));
    })
  );