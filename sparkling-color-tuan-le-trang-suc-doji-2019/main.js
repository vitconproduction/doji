$(function(){

    var win_width = $(window).width();
    $('.the-le').find('a').on('click',function(){
      $('body').addClass('hide-overflow');
      $('#the-le').show('fast');
      $('#the-le').find('.close').on('click',function(){
        $('#the-le').hide();
        $('body').removeClass('hide-overflow');
      });
    });
  
    $(window).bind('load',function(e){
      var $vid = $('#lp-content').find('.countdown').find('.video');
      var vWid = $vid.width();
      $vid.find('iframe').css({
        'width': vWid,
        'height': vWid * 480 / 853,
      });
  
      var $vid1 = $('#lp-content').find('.video-gallery').find('.video-listing-day').find('.video');
      var vWid1 = $vid1.width();
      $vid1.find('iframe').css({
        'width': vWid1,
        'height': vWid1 * 480 / 853,
      });
  
      if( win_width > 800 ){
        $('#lp-content').find('.day-content').find('.item.content').css({
          'max-height': $('#lp-content').find('.day-content').find('.item.image-tab-item').find('img').height(),
        });
  
        $( "#schedule-tabs" ).tabs( "option", "active", 4 );
      }
    });
  
    var tabAnimation = {
      show: { effect: "slide", duration: 500 },
    };
    // $( "#schedule-tabs" ).tabs(tabAnimation);
  
    $( "#schedule-tabs" ).tabs(tabAnimation).addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#schedule-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  
    var time = '2019/10/16 08:30:00';
    var time2 = '2019/10/20 22:00:00';
    $('#clock').countdown(time)
    .on('update.countdown', function(event) {
        $(this).html(''
            +'<div class="days clock-part"><span>'    + event.strftime('%D') + '</span><span>Ngày</span></div>'
            +'<div class="hours clock-part"><span>'   + event.strftime('%H') + '</span><span>Giờ</span></div>'
            +'<div class="mins clock-part"><span>'    + event.strftime('%M') + '</span><span>Phút</span></div>'
            +'<div class="seconds clock-part"><span>' + event.strftime('%S') + '</span><span>Giây</span></div>'
        );
      // debugger;
    })
    .on('finish.countdown', function(event) {
      $('.col-rig-01').html('<span>Sự kiện kết thúc sau</span>');
        clock2();
    });
  
    function clock2(){
        if( $('#clock').val() === '' ){
            $('#clock').html('Sự kiện đã kết thúc!').css({'font-size':'18px','color':'#af0025'});
        $('.col-rig-01').html('');
        }
        $('#clock').countdown(time2)
        .on('update.countdown', function(event) {
      $('.col-rig-01').html('<span>Sự kiện kết thúc sau</span>');
      $(this).removeAttr('style');
        $(this).html(''
        +'<div class="days clock-part"><span>'    + event.strftime('%D') + '</span><span>Ngày</span></div>'
        +'<div class="hours clock-part"><span>'   + event.strftime('%H') + '</span><span>Giờ</span></div>'
        +'<div class="mins clock-part"><span>'    + event.strftime('%M') + '</span><span>Phút</span></div>'
        +'<div class="seconds clock-part"><span>' + event.strftime('%S') + '</span><span>Giây</span></div>'
        );
        })
        .on('finish.countdown', function(event) {
          $(this).html('Sự kiện đã kết thúc!').css({'font-size':'18px','color':'#af0025'});
        $('.col-rig-01').html('');
        });
    }
  
    var $lpSLider = $('#lp-slide').lightSlider({
      item: 1,
      adaptiveHeight: true,
      auto: true,
      speed: 1000,
      pause: 3000,
      mode: 'fade',
      loop: true,
      pager: false,
      slideMargin: 0,
      onSliderLoad: function(el){
        $(el).css({
          'height': $(window).width() * 530 / 1366,
        });
        $(el).find('.slide-img > a').css({
          'height': $(window).width() * 530 / 1366,
        });
      },
      responsive : [
        {
          breakpoint:800,
          settings: {
            onSliderLoad: function(el){
              $(el).css({
                'height': $(window).width() * 853 / 1280,
              });
              $(el).find('.slide-img > a').css({
                'height': $(window).width() * 853 / 1280,
              });
            },
          }
        },
        {
          breakpoint:480,
          settings: {
            onSliderLoad: function(el){
              $(el).css({
                'height': $(window).width() * 1080 / 1280,
              });
              $(el).find('.slide-img > a').css({
                'height': $(window).width() * 1080 / 1280,
              });
            },
          }
        }
      ]
    });
  
    $('#listingNews').not('.slick-initialized').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
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
  
    $( window ).resize(function() {
  
      var $vid = $('#lp-content').find('.countdown').find('.video');
      var vWid = $vid.width();
      $vid.find('iframe').css({
        'width': vWid,
        'height': vWid * 480 / 853,
      });
  
    });
  
    AOS.init();
  
  });