const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');
const config = require('config');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const dbConfig = config.get('dbConfig');
const db = knex(dbConfig);

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
app.post('/signin', (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});
app.get('/profile/:id', (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.put('/image', (req, res) => {
  image.handleImage(req, res, db);
});
app.post('/imageurl', (req, res) => {
  image.handleApiCall(req, res3);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
