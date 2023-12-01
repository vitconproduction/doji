$(function() {

    var win_with = $(window).width();
  
    // $(window).bind('load',function(){
    //   $('#lp-video').find('.video').find('iframe').css({
    //     'height': $('#lp-video').find('.video').find('iframe').width() * 1080 / 1920
    //   });
    // });
  
    $('#lp-slider-view-1').not('.slick-initialized').slick({
      swipeToSlide: false,
      swipe: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      centerMode: false,
      vertical: false,
      fade: true,
      cssEase: 'linear',
      // margin: "0 25px 25px 0",
      margin: "0",
    });
  
    // $('#lp-slider-view-2').not('.slick-initialized').slick({
    //   infinite: false,
    //   speed: 1500,
    //   slidesToShow: 3,
    //   arrows: false,
    //   dots: true,
    //   autoplay: true,
    //   autoplaySpeed: 4000,
    //   centerMode: true,
    //   initialSlide: 0,
    // });
  
    $('#lp-technology-listing').find('.item').on('click', function() {
      $("#show-technology").addClass('show');
      // $("body").addClass('overflow-hidden');
      var title = $(this).data('title');
      var desc = $(this).data('desc');
      var img = $(this).data('img');
  
      $('#show-technology').find('.lp-image').find('img').attr('src',img);
      $('#show-technology').find('.lp-title').html(title);
      $('#show-technology').find('.lp-desc').html(desc);
    });
  
  
    $(document).mouseup(function(e) {
      var container = $(".wrap-show-technology");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#show-technology").removeClass('show');
        // $("body").removeClass('overflow-hidden');
      }
    });
  
    $(".wrap-show-technology").find('.close').on('click', function() {
      $("#show-technology").removeClass('show');
      // $("body").removeClass('overflow-hidden');
    });
  
    wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 250,
      mobile: true,
      live: true
    })
    wow.init();
  
  });