$(function() {

  var winWidth = $(window).width();

  setTimeout(function() {
    $('.slow-img').each(function() {
      $(this).attr('src', $(this).attr('data-img'));
    });
  }, 2000);

  $(window).bind('load', function(e) {

    // $('#preload').addClass('remove');

    setTimeout(function() {
      var iframe = document.getElementById('video-ytb');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/ixE5APQ7clQ?rel=0');
    }, 3000);

    var $vid = $('.video').find('.video-ytb');
    var vWid = $vid.width();
    $vid.find('iframe').css({
      'width': vWid,
      'height': vWid * 480 / 853,
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
      url: "json/product.json?v=1.02",
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

        $('#listing-by-json').html(listing);
      },
      complete: function() {

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

  $('#scrollTop').on('click', function(event) {

    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 300);

  });

});
