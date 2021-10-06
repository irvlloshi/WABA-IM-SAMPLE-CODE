# WA-Messages-V1

```js
npm install

npm install --save-dev nodemon

ngrok http 5000

Create a V1 Messages Application

- use the curl sample `make-app.sh` and replace AppID, AppSecret and NGROK_URL.
- save APP_ID and PRIVATE_KEY as you will need it in the `.env`

```

Update .env with your credentials

> PRIVATE_KEY needs to be in format of example (string with \n and on one line)

```js
API_KEY=
API_SECRET=
APP_ID=
WHATSAPP_NUMBER=
TO_NUMBER=

PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n##########\n-----END PRIVATE KEY-----\n"
```

Start Express Server `webhook-server.js`

```js
nodemon webhook-server.js
```
