$(function(){

    var win_width = $(window).width();
    $('.the-le').find('a').on('click',function(){
      $('body').addClass('hide-overflow');
      $('#the-le').show('fast');
      $('#the-le').find('.close').on('click',function(){
        $('#the-le').hide();
        $('body').removeClass('hide-overflow');
      });
    });
  
  });