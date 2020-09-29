// IMPORTS
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');

// APP CONFIGS
const app = express();

mongoose
  .connect(process.env.DB_CONNECTION, {
    useCreateIndex: true,
    useNewUrlParser: true,
    keepAlive: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MONGO_DB CONNECTED'))
  .catch((err) => console.log(err.message));

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());

// UNMOUNTING ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello Whatsapp Clone',
  });
});

// LISTENERS
app.listen(process.env.PORT, () =>
  console.log('Whatapp Clone server has started...')
);
