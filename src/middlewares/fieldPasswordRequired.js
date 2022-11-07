const fieldPasswordRequired = (request, response, next) => {
  if (!('password' in request.body)) {
    return response.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  
  return next();
};

module.exports = { fieldPasswordRequired };