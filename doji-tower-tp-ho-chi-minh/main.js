$(function(){
    var win_width = $(window).width();
  
    wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 250,
      mobile: true,
      live: true
    })
    wow.init();
  });