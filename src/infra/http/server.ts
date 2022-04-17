import express from 'express';

import { app } from './app';
import { router as routes } from './routes';

app.use(express.json());
app.use('/api', routes);

app.listen(process.env.PORT, () => console.log('App Started'));
