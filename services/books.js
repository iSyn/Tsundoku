const fetch = require('node-fetch');

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

const API_URL = 'https://www.googleapis.com/books/v1/volumes?'
const API_KEY = process.env.GOOGLEBOOKS_KEY
const SEARCH = 'harry+potter'

const searchBook = (req, res, next) => {
  fetch(`${API_URL}q=${SEARCH}&maxResults=40&key=${API_KEY}`)
  .then(r => r.json())
  .then(result => {
    res.books = result.items

    next()
  })
  .catch(err => {
    console.log('Error: ', err)
    next()
  })
}



module.exports = { searchBook };
