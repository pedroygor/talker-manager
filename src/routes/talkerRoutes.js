const express = require('express');
const { getTalkerJson } = require('../utils/getJsonWithFs');

const route = express.Router();

route.get('/', async (request, response) => {
  const talkers = await getTalkerJson();
  return response.status(200).json(talkers);
});

route.get('/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getTalkerJson();
  const talker = talkers.find((item) => item.id === Number(id));
  if (!talker) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return response.status(200).json(talker);
});

module.exports = { route };