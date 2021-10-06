require('dotenv').config();
var jwt = require('jsonwebtoken');
var axios = require('axios');

var privateKey = process.env.PRIVATE_KEY
var current = Date.now();

var data = JSON.stringify({
  from: '12019758605',
  to: '15754947093',
  channel: 'whatsapp',
  message_type: 'custom',
  custom: {
    type: 'template',
    template: {
      namespace: "9b6b4fcb_da19_4a26_8fe8_78074a91b584",
      name: "vids_interactive_demo",
      language: {
        policy: "deterministic",
        code: "en"
      }
    }
  },
});

jwt.sign(
  {
    application_id: "5704cb13-2af3-44f4-8bee-6824979b2a05",
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
