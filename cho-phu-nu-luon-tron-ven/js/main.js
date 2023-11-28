$(function() {

  var winWidth = $(window).width();

  var banner_slider = $('#banner').not('.slick-initialized').slick({
    swipeToSlide: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    centerMode: false,
    centerPadding: "0",
    autoplayspeed: 2500,
    variableWidth: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var slide_bst = $('#slide-bst').not('.slick-initialized').slick({
    swipeToSlide: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    centerMode: false,
    centerPadding: "0",
    autoplayspeed: 1500,
    variableWidth: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $(window).bind('load', function(e) {

    if (winWidth <= 1024) {

      $('.menu-button').on('click', function() {

        $(this).toggleClass('change');

        $(this).parent().find('ul').addClass('show-menu');

      });

      $('.close').on('click', function() {

        $('.menu-button').toggleClass('change');

        $(this).parent().toggleClass('show-menu');

      });

    }

    $(window).scroll(function() {

      if ($(this).scrollTop() > 160) {

        $('nav').addClass('mfixed');

      } else {

        $('nav').removeClass('mfixed');

      }

      if ($(this).scrollTop() > 200) {

        $('#scrollTop').fadeIn(200);

      } else {

        $('#scrollTop').fadeOut(200);

      }

    });

    $('#video').find('iframe').each(function(index){
      $(this).css({
        'height': ($(this).width() * 720 / 1280) + 'px'
      });
    });

    wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 150,
      mobile: true,
      live: true
    })
    wow.init();

  });

  $('#scroll-down').on('click', function(event) {

    $('html, body').animate({
      scrollTop: $('.about').offset().top - 115
    }, 700);

    event.preventDefault();
    return false;

  });

  $('#scrollTop').on('click', function(event) {

    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 300);

  });

  $('#xem-uu-dai').find('a').on('click', function() {
    $('#uu-dai').addClass('hienthi');
    $('body').addClass('over-flow-ele');
  });

  $('#uu-dai').find('.quit').on('click', function() {
    $('#uu-dai').removeClass('hienthi');
    $('body').removeClass('over-flow-ele');
  });

  // $('#uu-dai-fix').find('a.go-uu-dai').on('click', function() {
  //   $('html, body').animate({
  //     scrollTop: $('#gift').offset().top
  //   }, 700);
  //   $('#uu-dai-fix').removeClass('left-ele');
  // });

  $('#uu-dai-fix').find('a.go-uu-dai').on('click', function() {
    $('#uu-dai').addClass('hienthi');
    $('body').addClass('over-flow-ele');
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() > $('#ha-part').offset().top + 100) {
      $('#uu-dai-fix').addClass('fix-ele');
    } else {
      $('#uu-dai-fix').removeClass('fix-ele');
    }

  });

  $('#uu-dai-fix').find('a.open').on('click', function() {
    $('#uu-dai-fix').toggleClass('left-ele');
  });

});
