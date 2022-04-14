require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { cors } = require('./middlewares/cors');
const { login, createUser } = require('./controllers/users');
const { authValidation } = require('./middlewares/validation');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);

app.post('/signin', authValidation, login);
app.post('/signup', authValidation, createUser);

app.use(auth);
app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errorLogger);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Ссылка на сервер');
});
