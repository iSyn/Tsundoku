
$(() => {
  console.log('scripts.js linked')

  $('.cover-the-page').click(() => {
    $('.account-modal').css('display', 'none')
    $('.cover-the-page').css('display', 'none')
    $('.modal').css('display', 'none')
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
    $('.modal').css('display', 'none')
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




})
