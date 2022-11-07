const validateWatchedAt = (request, response, next) => {
  const { talk } = request.body;
  const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!('watchedAt' in talk)) {
    return response.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!talk.watchedAt.match(dateFormat)) {
    return response.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  return next();
};

module.exports = { validateWatchedAt };