// IMPORTS
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');
const Pusher = require('pusher');

// APP CONFIGS
const app = express();

const apiRoute = require('./routers');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, {
  useCreateIndex: true,
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true,
});

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  // encrypted: true,
  useTLS: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('DB watching');

  const msgCollection = db.collection('messages');
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
        _id: messageDetails._id,
      });
    } else {
      console.log('Error Triggering Pusher');
    }
  });
});

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(
  cors({
    origin: process.env.XORIGIN,
  })
);
app.use(helmet());

// UNMOUNTING ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello Whatsapp Clone',
  });
});

app.use('/api/v1/messages', apiRoute);

// LISTENERS
app.listen(process.env.PORT, () =>
  console.log('Whatapp Clone server has started...')
);
