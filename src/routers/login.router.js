const express = require('express');
const { fieldEmailRequired } = require('../middlewares/fieldEmailRequired');
const { fieldEmailValid } = require('../middlewares/fieldEmailValid');
const { fieldPasswordValid } = require('../middlewares/fieldPasswordValid');
const { fieldPasswordRequired } = require('../middlewares/fieldPasswordRequired');
const { generateToken } = require('../utils/generateToken');

const route = express.Router();

route.post('/', 
  fieldEmailRequired, 
  fieldEmailValid, 
  fieldPasswordRequired, 
  fieldPasswordValid,
  (request, response) => {
  const token = generateToken();
  // const login = { token, ...request.body };
  return response.status(200).json({ token });
});

module.exports = { route };