$(function() {

  var winWidth = $(window).width();

  setTimeout(function() {
    $('.slow-img').each(function() {
      $(this).attr('src', $(this).attr('data-img'));
    });
  }, 2000);

  var banner_slider = $('#banner').not('.slick-initialized').slick({
    swipeToSlide: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: false,
    fade: true,
    autoplay: true,
    centerMode: false,
    centerPadding: "0",
    autoplayspeed: 3000,
    variableWidth: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $(window).bind('load', function(e) {

    // $('#preload').addClass('remove');

    setTimeout(function() {
      var iframe = document.getElementById('video-ytb');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/ixE5APQ7clQ?rel=0');

    }, 3000);

    var iframe = document.getElementById('video-ytb2');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/eWu1mRl45TU?rel=0');

    var $vid = $('#video-ytb').parent();
    var vWid = $vid.width();
    $vid.find('iframe').css({
      'width': vWid,
      'height': vWid * 480 / 853,
    });

    var $vid2 = $('#video-ytb2').parent();
    var vWid2 = $vid2.width();
    $vid2.find('iframe').css({
      'width': vWid2,
      'height': vWid2 * 480 / 853,
    });

    if (winWidth < 768) {

      $('.menu-button').on('click', function() {

        $(this).toggleClass('change');

        $(this).parent().find('ul').addClass('show-menu');

      });

      $('.close').on('click', function() {

        $('.menu-button').toggleClass('change');

        $(this).parent().toggleClass('show-menu');

      });

      $('nav').append('<div class="fb-like mobile" data-href="http://trangsuc.doji.vn/microsite/wedding-land-khoanh-khac-luon-sang-mai/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');

      $('.fb-like').css({
        opacity: 1,
      });

    }

    $.ajax({
      url: "json/product.json?v=1.06",
      dataType: 'json',
      beforeSend: function() {

      },
      success: function(o) {
        var listing = '';

        for (i in o) {
          listing += '<div class="item">' +
            '<div class="image wow zoomIn" data-wow-delay="' + (i * 0.125) + 's">' +
            '<a href="' + o[i].link + '"><img alt="' + o[i].title + '" src="' + o[i].image + '" /></a>' +
            '</div>' +
            '<div class="title wow fadeInUp" data-wow-offset="100" data-wow-delay="' + (i * 0.125) + 's">' +
            '<a href="' + o[i].link + '">' + o[i].title + '</a>' +
            '</div>' +
            '<div class="price wow fadeInUp" data-wow-offset="100" data-wow-delay="' + (i * 0.125) + 's">' +
            o[i].price +
            '</div>' +
            '</div>';
        }

        listing += '<div class="view-all"><a target="_blank" href="http://trangsuc.doji.vn/nhan-cuoi">Xem toàn bộ >>></a></div>';

        $('#listing-by-json').html(listing);
      },
      complete: function() {

      }
    });

    $.ajax({
      url: "json/news.json?v=1.07",
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
              '<div class="des wow fadeInUp" data-wow-offset="100" data-wow-delay="' + (i * 0.125) + 's">' +
              o[i].des +
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
              //   '<div class="des wow fadeInUp" data-wow-offset="100" data-wow-delay="' + (i * 0.125) + 's">' +
              //   o[i].des +
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
          infinite: false,
          speed: 300,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }
    });

    $('body').append('<div class="fb-like desktop" data-href="http://trangsuc.doji.vn/microsite/wedding-land-khoanh-khac-luon-sang-mai/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');

    $(window).scroll(function() {

      if ($(this).scrollTop() > 150) {

        $('nav').addClass('mfixed');

      } else {

        $('nav').removeClass('mfixed');

      }

      if ($(this).scrollTop() > 200) {

        $('#scrollTop').fadeIn(200);

        if (winWidth > 767) {
          $('.fb-like').css({
            opacity: 1,
          });
        } else {
          $('.fb-like').css({
            opacity: 1,
          });
        }

      } else {

        $('#scrollTop').fadeOut(200);

        if (winWidth > 767) {
          $('.fb-like').css({
            opacity: 0,
          });
        } else {
          $('.fb-like').css({
            opacity: 1,
          });
        }

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
