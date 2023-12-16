const fs = require('fs');
const request = require('request');
const { google } = require('googleapis');
const key = require('./key.json');

const { client_email, private_key } = key;

const jwtClient = new google.auth.JWT(
  client_email,
  null,
  private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

jwtClient.authorize((err, tokens) => {
  if (err) {
    console.error(err);
    return;
  }

  const batch = fs.readFileSync('urls.txt', 'utf-8').split('\n');
  const items = batch.map(line => ({
    'Content-Type': 'application/http',
    'Content-ID': '',
    body: `POST /v3/urlNotifications:publish HTTP/1.1\nContent-Type: application/json\n\n${JSON.stringify({
      url: line,
      type: 'URL_UPDATED'
    })}`
  }));

  const options = {
    url: 'https://indexing.googleapis.com/batch',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/mixed'
    },
    auth: { bearer: tokens.access_token },
    multipart: items
  };

  request(options, (error, response, responseBody) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(responseBody);
  });
});
