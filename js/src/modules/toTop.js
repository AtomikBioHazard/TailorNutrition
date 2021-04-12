let toTop = $('.to-top');
toTop.on('click', function () {
  $('html,body').animate({
    scrollTop: $('html,body').offset().top
  });
});

export {toTop};