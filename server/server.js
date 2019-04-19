const express = require('express');
const axios = require('axios');
const massive = require('massive');
const ctrl = require('./controller');

require('dotenv').config();

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;



massive(CONNECTION_STRING).then(databaseInstance => {
  app.set('database', databaseInstance);
  app.listen( SERVER_PORT, () => {
    console.log(`LISENING ON PORT: ${SERVER_PORT}`);
  });
});

app.get('/api/inventory', ctrl.getInventory)

