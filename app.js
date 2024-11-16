import dot from 'dotenv'
dot.config();
import 'express-async-errors';

import { sendEmail } from './controllers/sendEmail.js';
import express, { json } from 'express';
const app = express();

// error handler
import notFoundMiddleware from './middleware/not-found.js';
import {errorHandlerMiddleware} from './middleware/error-handler.js';

app.use(json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">Send email</a>');
});
app.get('/send',sendEmail)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
