const validateAge = (request, response, next) => {
  const MIN_AGE = 18;
  if (!('age' in request.body) || request.body.age === '') {
    return response.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (request.body.age < MIN_AGE) {
    return response.status(400)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  return next();
};

module.exports = { validateAge }; 