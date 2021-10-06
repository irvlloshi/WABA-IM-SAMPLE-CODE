require('dotenv').config();
var jwt = require('jsonwebtoken');
var axios = require('axios');

var privateKey = process.env.PRIVATE_KEY;
var current = Date.now();

var data = JSON.stringify({
  from: '12019758605',
  to: '15754947093',
  channel: 'whatsapp',
  message_type: 'text',
  text: "Hello"
});

jwt.sign(
  {
    application_id: process.env.VIDS_APP_ID,
    iat: current,
    jti: '' + current,
  },
  privateKey,
  { algorithm: 'RS256' },
  function (err, token) {
    if (token) {
      console.log('\n✅ Received token\n', token);
    } else {
      console.log('\n💀 Unable to fetch token, token:', err);
    }
    var config = {
      method: 'post',
      url: 'https://api.nexmo.com/v1/messages',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('\n✅ ', JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);
