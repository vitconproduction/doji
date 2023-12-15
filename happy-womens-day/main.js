$(function(){
    $('.lp-content_bottom-content-2').find('.right').find('iframe').css({
      'height': $('.lp-content_bottom-content-2').find('.right').find('iframe').width() * 480 / 853
    });
  
    $('.image-sp').find('.image-sp_element').hover(
    function() {
        $( this ).find('span').addClass( "show-view" );
      }, function() {
        $( this ).find('span').removeClass( "show-view" );
      }
    );
  });