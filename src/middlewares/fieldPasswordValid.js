const fieldPasswordValid = (request, response, next) => {
  const MIN_LENGTH_PASSWORD = 6;
  const validPassoword = request.body.password.length >= MIN_LENGTH_PASSWORD;

  if (!validPassoword) {
    return response.status(400)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return next();
};

module.exports = { fieldPasswordValid };