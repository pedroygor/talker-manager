const fieldEmailValid = (request, response, next) => {
  const mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const validEmail = request.body.email.match(mailformat);
  
  if (!validEmail) {
    return response.status(400)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
  }

  return next();
};

module.exports = { fieldEmailValid };