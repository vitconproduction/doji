$(function() {

    $('.lp-slider').not('.slick-initialized').slick({
      swipeToSlide: false,
      swipe: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      rows: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '0',
      prevArrow: '<span class="slick-prev slick-arrow"><</span>',
      nextArrow: '<span class="slick-next slick-arrow">></span>',
      vertical: false, //* trÆ°á»£t dá»c *//
      // variableWidth: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            rows: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            rows: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  
    var win_width = $(window).width();
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p_lp_sale = url.searchParams.get("lp_sale");
  
    if ($('#' + p_lp_sale).length > 0 && p_lp_sale == 'lpsale') {
      var lp_sale_height = $('#' + p_lp_sale).offset().top;
  
      $('html, body').animate({
        scrollTop: lp_sale_height - 115
      }, 700);
    }
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 250,
      mobile: true,
      live: true
    })
    wow.init();
  
  });