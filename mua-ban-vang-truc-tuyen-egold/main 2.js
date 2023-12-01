$(function() {
    $('#lp-htch').on('click',function(){
      $('#lp-htch-popup').addClass('show-pop');
    });
  
    $('#lp-htch-popup').find('.close').on('click',function(){
      $('#lp-htch-popup').removeClass('show-pop');
    });
  
    $(document).mouseup(function(e) {
      var container = $("#lp-htch-popup").find('.wrap-pop');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#lp-htch-popup').removeClass('show-pop');
      }
    });
  });