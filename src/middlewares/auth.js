const auth = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.length !== 16) {
    return response.status(401).json({ message: 'Token inválido' });
  }

  return next();
};

module.exports = { auth };