import express from 'express';
import './database/connection';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`--- Server running on port ${PORT} ---`));
