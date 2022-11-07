const express = require('express');
const bodyParser = require('body-parser');
const { route: TalkerRoutes } = require('./routes/talkerRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/talker', TalkerRoutes);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Iniciando projeto');
});
