$(() => {
  console.log('mobileEventListeners.js LINKED')

  $('img').on('tap', ((e) => {
    const modalID = $(e.target).data('modalid');
    console.log('MODAL ID IS: '+ modalID)
    $(modalID).css('display', 'block');
    $('.cover-page').css('display', 'block')
  }))

  $('.cover-page').on('tap', (() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  }))

  $('.header-container').on('tap', (() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  }))

  $('.fa-times').on('tap', (() => {
    $('.modal').hide()
    $('.cover-page').css('display', 'none')
  }))

  $('.main-header').on('tap', (() => {
    $('.sub-header').css('display', 'inline')
  }))

  $('.main-header').on('tap', (() => {
    $('.sub-header').css('display', 'none')
  }))


  $('.accounts-button').on('tap', (() => {
    $('.account-modal').css('display', 'block')
    $('.page-container-cover').css('display', 'block')
    $('.dropdown-content').hide()
  }))

  $('.account-close-window').on('tap', (() => {
    $('.account-modal').css('display', 'none')
    $('.page-container-cover').css('display', 'none')
  }))

  $('.fa-user').on('tap', (() => {
    $('.dropdown-content').show()
  }))

  $('.tsundoku-it-broken').on('tap', (() => {
    $('.account-modal').css('display', 'block')
    $('.page-container-cover').css('display', 'block')
  }))

  $('.tsundoku-it').on('tap', (() => {
    $('.tsundokud-modal').css('display', 'block')
    $('.modal').css('display','none')
    setTimeout(() => {
      $('.tsundokud-modal').css('display', 'none')
      $('.cover-page').css('display', 'none')
    }, 1000)
  }))




})
