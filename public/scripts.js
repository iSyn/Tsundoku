$(() => {

  console.log('scripts.js linked')

  $books = $('.books')

  $books.click((e) => {
    console.log(e)
  })

})
