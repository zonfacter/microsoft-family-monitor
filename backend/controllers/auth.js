const axios = require('axios');

exports.login = (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.MS_CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.MS_REDIRECT_URI,
    response_mode: 'query',
    scope: 'user.read',
  });
  res.redirect(`https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`);
};

exports.callback = async (req, res) => {
  // TODO: Exchange auth code for tokens
  res.send('OAuth callback placeholder');
};
