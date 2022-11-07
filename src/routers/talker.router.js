const express = require('express');
const { auth } = require('../middlewares/auth');
const { validateAge } = require('../middlewares/validateAge');
const { validateName } = require('../middlewares/validateName');
const { validateRate } = require('../middlewares/validateRate');
const { validateTalk } = require('../middlewares/validateTalk');
const { validateWatchedAt } = require('../middlewares/validateWatchedAt');
const { createFileTalker } = require('../utils/createTalker');
const { getTalkerJson } = require('../utils/getJsonWithFs');

const route = express.Router();

const nextID = 5;

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

route.post(
  '/', 
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (request, response) => {
    const talker = { id: nextID, ...request.body };
    await createFileTalker(talker);
    return response.status(201).json(talker);
  },
);

route.put(
  '/:id', 
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (request, response) => {
    const { id } = request.params;
    const talkers = await getTalkerJson();
    const talker = talkers.find((talk) => talk.id === Number(id));
    talker.name = request.body.name;
    talker.age = request.body.age;
    talker.rate = request.body.rate;
    talker.talk = request.body.talk;
    await createFileTalker(talker);
    return response.status(200).json(talker);
  },
);

module.exports = { route };