// IMPORTS
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

// APP CONFIGS
const app = express();

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
