import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';

import { listTweets } from './models/listTweets.js';
import { listUsers } from './models/listUsers.js';

const app = express();

app.use(cors());
app.use(json());

const usuarios = new listUsers();
const tweets = new listTweets();

app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  usuarios.newUser({ username, avatar })

  res.status(200).send('OK deu tudo certo');
});

app.post('/tweets', (req, res) => {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  const { avatar } = usuarios.getUserByName(username);
  tweets.newTweet({ username, tweet, avatar });

  res.status(201).send('OK, seu tweet foi criado');
});

app.get('/tweets/:username', (req, res) => {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.getTweets().filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
});

app.get('/tweets', (req, res) => {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.getTweets().length <= 10) {
    return res.send(reverseTweets());
  }
  res.status(200).send(tweets.getTweets().reverse().slice(start, end));
});

function reverseTweets() {
  return [...tweets.getTweets()].reverse();
}

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
