$(function() {

  var winWidth = $(window).width();

  $(window).bind('load', function(e) {

    if ($('.cau_doi').length > 0) {

      if (winWidth > 768) {
        $(window).scroll(function() {

          if ($(this).scrollTop() > 450) {

            $('.cau_doi').css('display','block');

            var pos = $(this).scrollTop();
            var pointEnd = $('#main').height() - pos;

            var posCD = $('.cau_doi').offset();
            var distantTopCD = posCD.top;

            if (pointEnd <= 0) {
              return false;
            }

            var height = pos;
            if (pos > distantTopCD) {
              setTimeout(function() {
                $('.cau_doi').animate({
                  'top': height + 30,
                }, 15);
              }, 200);
            } else {
              $('.cau_doi').css({
                'top': height + 30,
              });
            }

          }else{
            $('.cau_doi').css('display','none');
          }

        });
      } else {
        $('.cau_doi').attr({
          'src': '',
          'style': ''
        });
      }
    }

    if (winWidth <= 1024) {

      $('.menu-button').on('click', function() {

        $(this).toggleClass('change');

        $(this).parent().find('ul').addClass('show-menu');

      });

      $('.close').on('click', function() {

        $('.menu-button').toggleClass('change');

        $(this).parent().toggleClass('show-menu');

      });

      // $('nav').append('<div class="fb-like mobile" data-href="http://trangsuc.doji.vn/microsite/au-vang-phuc-long/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');

      // $('.fb-like').css({
      //   opacity: 1,
      // });

    }

    // $('nav').append('<div class="fb-like desktop" data-href="http://trangsuc.doji.vn/microsite/au-vang-phuc-long/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');

    $(window).scroll(function() {

      if ($(this).scrollTop() > 450) {

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

});
