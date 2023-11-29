$(function(){
    var win_width = $(window).width();
  
    $('[data-fancybox="building-image"]').fancybox({
      transitionEffect: 'slide',
    });
  
    var newsSlide = $('#news-slide').not('.slick-initialized').slick({
      dots: true,
      infinite: false,
      autoplay: false,
      centerMode: false,
      focusOnSelect: true,
      // initialSlide: 1,
      slidesToScroll: 3,
      slidesToShow: 3,
      items: 3,
      rows: 2,
      controls: true,
      slideMargin: 20,
      prevArrow: "",
      nextArrow: "",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  
    // if(win_width > 767){
    //   $('#lp-content').find('.nav-fixed').hover(
    //     function() {
    //       $( this ).addClass( "show-img" );
    //     }, function() {
    //       $( this ).removeClass( "show-img" );
    //     }
    //   );
    // }else{
    //   $('#lp-content').find('.nav-fixed').find('span').on('click',function(e){
    //     $(this).parent().addClass('show-img');
    //     $(this).parent().find('.close').on('click',function(){
    //       $(this).parent().removeClass('show-img');
    //     });
    //   });
    // }
  
    $(window).scroll(function(){
      if( $(this).scrollTop() > 150 ){
        $('.scroll-down').hide('slow');
      } else {
        $('.scroll-down').show('slow');
      }
    });
  
  });