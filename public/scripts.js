$(() => {

  console.log('scripts.js linked')

  $books = $('.books')

  $books.click((e) => {
    console.log(e)
  })


  const checkInputArea = () => {
    if ($('.input-area').val() != "") {
      console.log($('.input-area').val())
    }
  }

  $(document).keypress((e) => {
    if(e.which === 13) { checkInputArea() }
  })



})
