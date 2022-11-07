const fieldEmailRequired = (request, response, next) => {
  if (!('email' in request.body)) {
    return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  
  return next();
};

module.exports = { fieldEmailRequired };