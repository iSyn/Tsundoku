const router = require('express').Router();
const bookService = require('../services/books.js')

router.get('/search', bookService.searchBook, (req, res) => {
  res.render('search', {
    books: res.books,
  });
});

module.exports = router;
