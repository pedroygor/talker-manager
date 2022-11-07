const validateName = (request, response, next) => {
  const MIN_LENGTH_NAME = 3;
  if (!('name' in request.body) || request.body.name === '') {
    return response.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (request.body.name.length < MIN_LENGTH_NAME) {
    return response.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  return next();
};

module.exports = { validateName };