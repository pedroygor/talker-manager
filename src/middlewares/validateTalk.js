const validateTalk = (request, response, next) => {
  if (!('talk' in request.body)) {
    return response.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  return next();
};

module.exports = { validateTalk };