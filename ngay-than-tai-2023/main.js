$(function(){

    var winWidth = $(window).width();
  
    if (winWidth > 768) {
      $(window).scroll(function () {
        var pos = $(this).scrollTop();
  
        if($('.cau_doi').length > 0){
  
          var pointEnd = $('#content-lp').height() - pos;
  
          var posCD = $('.cau_doi').offset();
          var distantTopCD = posCD.top;
  
          if( pointEnd <= 0){
            return false;
          }
  
          var height = pos;
          if (pos > distantTopCD) {
            setTimeout(function(){
              $('.cau_doi').animate({
                  top: height + 200
              }, 15);
            }, 200);
          } else {
              $('.cau_doi').css({
                  top: height + 200
              });
          }
        }
      });
    } else {
        $('.cau_doi').attr({'src': '', 'style': ''});
    }
  
    var lp_activity = $('.lp-activity').not('.slick-initialized').slick({
      swipeToSlide: false,
      swipe: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 2,
      arrows: true,
      dots: false,
      autoplay: false,
      autoplaySpeed: 1000,
      centerMode: false,
      vertical: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            arrows: true,
          }
        },
      ],
    });
  
    // AOS.init({
    //   duration: 800,
    //   anchorPlacement: 'top',
    // });
  });