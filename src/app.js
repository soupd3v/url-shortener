//App 
import express from 'express';
import urlRoutes from './routes/urlRoutes.js';
import syncDB from '../src/database/sync.js';
const app = express();

app.use(express.json());
app.use(urlRoutes);

export default app;