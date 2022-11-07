const express = require('express');
const crypto = require('crypto');
const { fieldEmailRequired } = require('../middlewares/fieldEmailRequired');
const { fieldEmailValid } = require('../middlewares/fieldEmailValid');
const { fieldPasswordValid } = require('../middlewares/fieldPasswordValid');
const { fieldPasswordRequired } = require('../middlewares/fieldPasswordRequired');

const route = express.Router();

route.post('/', 
  fieldEmailRequired, 
  fieldEmailValid, 
  fieldPasswordRequired, 
  fieldPasswordValid,
  (request, response) => {
  const token = crypto.randomBytes(8).toString('hex');
  // const login = { token, ...request.body };
  return response.status(200).json({ token });
});

module.exports = { route };