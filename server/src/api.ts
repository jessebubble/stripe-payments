import express from 'express';
export const app = express();

app.use( express.json() )

import cors from 'cors';

app.use( cors({ origin: true }) );

app.post('/test', (req, res) => {
    const amount = req.body.amount;

    res.status(200).send({ with_tax: amount * 7 });
});