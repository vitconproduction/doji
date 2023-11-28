$(function() {

  var winWidth = $(window).width();

  setTimeout(function() {
    $('.slow-img').each(function() {
      $(this).attr('src', $(this).attr('data-img'));
    });
  }, 2000);

  var time = '2019/11/14 08:30:00';
  var time2 = '2019/11/18 22:00:00';
  $('#clock').countdown(time)
    .on('update.countdown', function(event) {
      $(this).html('' +
        '<div class="days clock-part"><span>' + event.strftime('%D') + '</span><span>Ngày</span></div>' +
        '<div class="hours clock-part"><span>' + event.strftime('%H') + '</span><span>Giờ</span></div>' +
        '<div class="mins clock-part"><span>' + event.strftime('%M') + '</span><span>Phút</span></div>' +
        '<div class="seconds clock-part"><span>' + event.strftime('%S') + '</span><span>Giây</span></div>'
      );
      // debugger;
    })
    .on('finish.countdown', function(event) {
      $('.col-rig-01').html('<span>Sự kiện kết thúc sau</span>');
      clock2();
    });

  function clock2() {
    if ($('#clock').val() === '') {
      $('#clock').html('Sự kiện đã kết thúc!').css({
        'font-size': '18px',
        'color': '#af0025'
      });
      $('.col-rig-01').html('');
    }
    $('#clock').countdown(time2)
      .on('update.countdown', function(event) {
        $('.col-rig-01').html('<span>Sự kiện kết thúc sau</span>');
        $(this).removeAttr('style');
        $(this).html('' +
          '<div class="days clock-part"><span>' + event.strftime('%D') + '</span><span>Ngày</span></div>' +
          '<div class="hours clock-part"><span>' + event.strftime('%H') + '</span><span>Giờ</span></div>' +
          '<div class="mins clock-part"><span>' + event.strftime('%M') + '</span><span>Phút</span></div>' +
          '<div class="seconds clock-part"><span>' + event.strftime('%S') + '</span><span>Giây</span></div>'
        );
      })
      .on('finish.countdown', function(event) {
        $(this).html('Sự kiện đã kết thúc!').css({
          'font-size': '18px',
          'color': '#af0025'
        });
        $('.col-rig-01').html('');
      });
  }

  $(window).bind('load', function(e) {

    // $('#preload').addClass('remove');

    setTimeout(function() {
      var iframe = document.getElementById('video-ytb');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/kwP6i6LhcXo?rel=0');
    }, 3000);

    var $vid = $('.video');
    var vWid = $vid.width();
    $vid.find('iframe').css({
      'width': vWid,
      'height': vWid * 480 / 853,
    });

    if (winWidth < 769) {
      $('.nhan-cuoi-wrap').find('.left').find('img').attr('src', 'images/loving-heart-dn-oct-mb.png');

      $('.giai-thuong').find('.item:nth-child(3)').find('.image').find('img').attr('src', 'images/tpbank-mb.png');
    }
    if (winWidth < 768) {

      $('.nhan-cuoi-wrap').find('.left').find('img').attr('src', 'images/loving-heart-dn-oct-mb.png');

      $('.giai-thuong').find('.item:nth-child(3)').find('.image').find('img').attr('src', 'images/tpbank-mb.png');

      $('.menu-button').on('click', function() {

        console.log("111");

        $(this).toggleClass('change');

        $(this).parent().find('ul').addClass('show-menu');

      });

      $('.close').on('click', function() {

        $('.menu-button').toggleClass('change');

        $(this).parent().toggleClass('show-menu');

      });

      $('nav').append('<div class="fb-like mobile" data-href="http://trangsuc.doji.vn/microsite/hoi-cho-quoc-te-trang-suc-viet-nam-2019/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');

      $('.fb-like').css({
        opacity: 1,
      });

    }

    $.ajax({
      url: "json/news.json?v=1.03",
      dataType: 'json',
      beforeSend: function() {

      },
      success: function(o) {
        var listing = '',
          item = 3;

        listing += '<div class="row">';

        listing += '<div id="listingnews">';

        for (i in o) {

          // if (winWidth > 767) {

            listing += '<div class="item col-sm-4 col-xs-12 col-12">' +
              '<div class="image wow zoomIn" data-wow-delay="' + (i * 0.125) + 's">' +
              '<a target="_blank" href="' + o[i].link + '"><img alt="' + o[i].title + '" src="' + o[i].image + '" /></a>' +
              '</div>' +
              '<div class="title wow fadeInUp" data-wow-offset="100" data-wow-delay="' + (i * 0.125) + 's">' +
              '<a target="_blank" href="' + o[i].link + '">' + o[i].title + '</a>' +
              '</div>' +
              '</div>';

          // } else if (winWidth <= 767) {

            // if (i < item) {

              // listing += '<div class="item col-sm-4 col-xs-12 col-12">' +
              //   '<div class="image wow zoomIn" data-wow-delay="' + (i * 0.125) + 's">' +
              //   '<a href="' + o[i].link + '"><img alt="' + o[i].title + '" src="' + o[i].image + '" /></a>' +
              //   '</div>' +
              //   '<div class="title wow fadeInUp" data-wow-offset="100" data-wow-delay="' + (i * 0.125) + 's">' +
              //   '<a href="' + o[i].link + '">' + o[i].title + '</a>' +
              //   '</div>' +
              //   '</div>';

            // }

          // } else {

          // }

        }

        listing += '</div>';

        listing += '</div>';

        listing += '<div class="row"><div class="view-all"><a target="_blank" href="http://trangsuc.doji.vn/tin-tuc">Xem toàn bộ >>></a></div></div>';

        $('#listing-news').html(listing);
      },
      complete: function() {
        $('#listingnews').not('.slick-initialized').slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    });

    $('nav').append('<div class="fb-like desktop" data-href="http://trangsuc.doji.vn/microsite/hoi-cho-quoc-te-trang-suc-viet-nam-2019/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');

    $(window).scroll(function() {

      if ($(this).scrollTop() > 150) {

        $('nav').addClass('mfixed');

      } else {

        $('nav').removeClass('mfixed');

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

  $('#uu-dai-go').on('click', function(event) {

    $('html, body').animate({
      scrollTop: $('#uu-dai').offset().top - 115
    }, 700);

    $('.menu-button').removeClass('change');

    $('.main-nav').removeClass('show-menu');

    event.preventDefault();
    return false;

  });

  $('#localtion-go').on('click', function(event) {

    $('html, body').animate({
      scrollTop: $('#map').offset().top - 115
    }, 700);

    $('.menu-button').removeClass('change');

    $('.main-nav').removeClass('show-menu');

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
