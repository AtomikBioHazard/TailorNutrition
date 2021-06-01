let test = $('#test');
test.on('ready', function(){
  $(window).scroll(function(){
    let windowWidth = $(window).width();
    if(windowWidth > 800){
      let scroll = $(window).scrollTop();
      $('main .container').css({
        'transform': 'translate(0px,' + scroll / 2 + '%)'
      });
    }
  });
  $(window).rezise(function(){
    let windowWidth = $(window).width();
    if(windowWidth < 800){
      $('main .container').css({
        'transform': 'translate(0px, 0px)'
      });
    }
  });
});

export {test};