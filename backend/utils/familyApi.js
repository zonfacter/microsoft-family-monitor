const axios = require('axios');

const familyApi = axios.create({
  baseURL: 'https://family.microsoft.com',
});

module.exports = familyApi;
