$('.hamburger').click(function() {
    $(this).toggleClass('is-active')
    $('.mobileMenu').toggleClass('menuActive')
    $('body').toggleClass('scroll')
})