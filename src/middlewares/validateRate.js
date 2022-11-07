const validateRate = (request, response, next) => {
  const MIN_VALUE_RATE = 1;
  const MAX_VALUE_RATE = 5;
  const { talk } = request.body;
  const rangeRateInvalid = Number(talk.rate) < MIN_VALUE_RATE || talk.rate > MAX_VALUE_RATE; 
  if (!('rate' in talk)) {
    return response.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!Number.isInteger(talk.rate) || rangeRateInvalid) {
    return response.status(400)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  return next();
};

module.exports = { validateRate };