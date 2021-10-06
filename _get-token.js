require('dotenv').config();
var jwt = require('jsonwebtoken');
var privateKey = process.env.PRIVATE_KEY;
var current = Date.now();

jwt.sign(
  {
    application_id: process.env.VIDS_APP_ID,
    iat: current,
    jti: '' + current,
  },
  privateKey,
  { algorithm: 'RS256' },
  function (err, token) {
    console.log(token);
  }
);
