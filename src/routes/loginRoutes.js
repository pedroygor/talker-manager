const express = require('express');
const crypto = require('crypto');

const route = express.Router();

route.post('/', (request, response) => {
  const token = crypto.randomBytes(8).toString('hex');
  // const login = { token, ...request.body };
  return response.status(200).json({ token });
});

module.exports = { route };