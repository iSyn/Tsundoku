$(() => {
  console.log('mobileEventListeners.js LINKED')

  $('img').tap((e) => {
    const modalID = $(e.target).data('modalid');
    console.log('MODAL ID IS: '+ modalID)
    $(modalID).css('display', 'block');
    $('.cover-page').css('display', 'block')
  })

  $('.cover-page').tap(() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  })

  $('.header-container').tap(() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  })

  $('.fa-times').tap(() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  })

  $('.main-header').tap(() => {
    $('.sub-header').css('display', 'inline')
  })

  $('.main-header').tap(() => {
    $('.sub-header').css('display', 'none')
  })


  $('.accounts-button').tap(() => {
    $('.account-modal').css('display', 'block')
    $('.page-container-cover').css('display', 'block')
    $('.dropdown-content').hide()
  })

  $('.account-close-window').tap(() => {
    $('.account-modal').css('display', 'none')
    $('.page-container-cover').css('display', 'none')
  })

  $('.fa-user').tap(() => {
    $('.dropdown-content').show()
  })

  $('.tsundoku-it-broken').tap(() => {
    $('.account-modal').css('display', 'block')
    $('.page-container-cover').css('display', 'block')
  })

  $('.tsundoku-it').tap(() => {
    $('.tsundokud-modal').css('display', 'block')
    $('.modal').css('display','none')
    setTimeout(() => {
      $('.tsundokud-modal').css('display', 'none')
      $('.cover-page').css('display', 'none')
    }, 1000)
  })




})
