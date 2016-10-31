
$(() => {
  console.log('scripts.js linked')


  $('img').click((e) => {
    const modalID = $(e.target).data('modalid');
    $(modalID).css('display', 'block');
    $('.cover-page').css('display', 'block')
  })

  $('.cover-page').click(() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  })

  $('.header-container').click(() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  })

  $('.fa-times').click(() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  })

  $('.main-header').mouseover(() => {
    $('span').css('display', 'inline')
  })

  $('.main-header').mouseout(() => {
    $('span').css('display', 'none')
  })


  $('.accounts-button').click(() => {
    $('.account-modal').css('display', 'block')
    $('.page-container-cover').css('display', 'block')
    $('.dropdown-content').hide()
  })

  $('.account-close-window').click(() => {
    $('.account-modal').css('display', 'none')
    $('.page-container-cover').css('display', 'none')
  })

  $('.fa-user').mouseover(() => {
    $('.dropdown-content').show()
  })

  $('.tsundoku-it-broken').click(() => {
    $('.account-modal').css('display', 'block')
    $('.page-container-cover').css('display', 'block')
  })

})
