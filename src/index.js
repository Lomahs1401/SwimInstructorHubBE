import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import configDB from './config/configDB.js';
import pkg from 'body-parser';
const { json } = pkg;

configDB.connect();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(json({limit: '50mb'}));
app.use(morgan('combined'));

// Routes init
routes(app);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})