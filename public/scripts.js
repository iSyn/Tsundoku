
$(() => {
  console.log('scripts.js linked')

  $('.cover-the-page').click(() => {
    $('.account-modal').css('display', 'none')
    $('.cover-the-page').css('display', 'none')
    $('.search-book-modal-container').css('display', 'none')
    $('.cover-the-page').css('display', 'none')
  })

  $('img').click((e) => {
    const modalID = $(e.target).data('modalid');
    $(modalID).css('display', 'block');
    $('.cover-the-page').css('display', 'block')
  })

  $('.dropdown-content-button').click(() => {
    $('.dropdown-content').hide()
    $('.cover-the-page').css('display', 'block')
    $('.account-modal').css('display', 'block')
  })

  $('.fa-times').click(() => {
    $('.cover-the-page').css('display', 'none')
    $('.account-modal').css('display', 'none')
    $('.search-book-modal-container').css('display', 'none')
  })

  $('.main-header').mouseover(() => {
    $('.sub-header').css('display', 'inline')
  })

  $('.main-header').mouseout(() => {
    $('.sub-header').css('display', 'none')
  })

  $('.fa-user').mouseover(() => {
    $('.dropdown-content').show()
  })

  $('.dropdown-content').click(() => {
    $('.dropdown-content').hide()
  })

  $('.tsundoku-it-broken').click(() => {
    $('.account-modal').css('display', 'block')
  })

  $('.tsundoku-it').click(() => {
    $('.tsundokud-modal').css('display', 'block')
    $('.modal').css('display','none')
    setTimeout(() => {
      $('.tsundokud-modal').css('display', 'none')
    }, 1000)
  })


  $('.login-password').keypress(() => {
    console.log('typing password!')
  })

  const checkPasswordSame = (() => {
    setTimeout(() => {
      let passwordVal = $('.login-password').val()
      console.log(passwordVal)
      let confirmVal = $('.login-confirmpassword').val()
      console.log(confirmVal)

      if (passwordVal === confirmVal) {
        $('.login-confirmpassword').css('border', '1px solid black');
      } else {
        $('.login-confirmpassword').css('border', '1px solid red');
      }
    },50)
  })

  $('.login-confirmpassword').keypress(() => {
    checkPasswordSame()
  })




})
