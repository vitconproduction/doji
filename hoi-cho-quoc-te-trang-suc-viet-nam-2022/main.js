$(function() {

    var win_width = $(window).width();
  
    // function numberWithCommas(x) {
    //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
  
    $('#lp-sp').not('.slick-initialized').slick({
      swipeToSlide: false,
      swipe: true,
      infinite: true,
      initialSlide: 3,
      speed: 2000,
      slidesToShow: 5,
      rows: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      vertical: false, //* trÆ°á»£t dá»c *//
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            rows: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
          }
        },
        // {
        //   breakpoint: 820,
        //   settings: {
        //     slidesToShow: 2,
        //     rows: 1,
        //     slidesToScroll: 1,
        //   }
        // },
      ]
    });
  
  });