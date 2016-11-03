/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createUser }    = require('../models/user.js');
const { authenticate }   = require('../lib/auth');
const { logIn }  = require('../lib/auth');
const { saveFavorite, getFavorites } = require('../models/favorites')


const usersRouter  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, logIn, (req, res) => {
  res.redirect('/users/home');
});

usersRouter.get('/index', (req, res) => {
  res.render('/users/index')
})

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/home', authenticate, (req, res) => {
  const greetings = [
    'Did you start reading yet',
    'Stop dillydallying and read!',
    'Ugh... just pick up your book and read',
    'Hey you... yea you... READ!',
    'read, read, read, read',
    'Are you going to read yet?'
  ]

  let whichGreeting = Math.floor(Math.random() * greetings.length)

  res.render('users/index', {
    user: res.user,
    greeting: greetings[whichGreeting]
  });
});

usersRouter.get('/profile', authenticate, getFavorites, (req, res) => {
  console.log('faves ', res.favorites)
  res.render('users/profile', {
    faves: res.favorites || [],
  });
});

usersRouter.post('/search', authenticate, saveFavorite, (req, res) => {
  res.redirect('/users/home')
})

module.exports = usersRouter;
