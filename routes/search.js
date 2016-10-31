const searchRouter = require('express').Router();
const bookService = require('../services/books.js')

searchRouter.get('/', bookService.searchBook, (req, res) => {
  if (req.session.userId) {
    res.render('users/search', {
      books: res.books,
    });
  } else {
    res.render('search', {
      books: res.books,
    });
  }

});

// searchRouter.get('/search', bookService.searchBook, (req, res) => {
//   res.render('/users/search', {
//     books: res.books,
//   });
// });

module.exports = searchRouter;
