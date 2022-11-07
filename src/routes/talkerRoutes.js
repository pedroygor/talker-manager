const express = require('express');
const { getTalkerJson } = require('../utils/getJsonWithFs');

const route = express.Router();

route.get('/', async (request, response) => {
  const talkers = await getTalkerJson();
  response.status(200).json(talkers);
});

module.exports = { route };