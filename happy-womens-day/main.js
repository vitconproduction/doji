$(function(){

    var win_width = $(window).width();
  
    $('.lp-content_bottom-content-2').find('.right').find('iframe').css({
      'height': $('.lp-content_bottom-content-2').find('.right').find('iframe').width() * 480 / 853
    });
  
    $('.image-sp').find('.image-sp_element').hover(
    function() {
        $( this ).find('span').addClass( "show-view" );
      }, function() {
        $( this ).find('span').removeClass( "show-view" );
      }
    );
  
    var star = $('#starshine'),
        template = $('.template.shine'),
        stars =  50,
        sparkle = 20;
    if(win_width < 768){
      stars = 20;
    }
    var size = 'small';
    var createStar = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle) + 's',
        mozAnimationDelay: (Math.random() * sparkle) + 's'
      }).addClass(size).appendTo(star);
    };
    for(var i = 0; i < stars; i++) {
      if(i % 2 === 0) {
        size = 'small';
      } else if(i % 3 === 0) {
        size = 'medium';
      } else {
        size = 'large';
        // size = 'medium';
      }
      createStar();
    }
  
    var star1 = $('#starshine1'),
        stars1 =  7,
        sparkle1 = 20;
    if(win_width < 768){
      stars1 = 10;
    }
    var size1 = 'small';
    var createStar1 = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle1) + 's',
        mozAnimationDelay: (Math.random() * sparkle1) + 's'
      }).addClass(size1).appendTo(star1);
    };
    for(var i = 0; i < stars1; i++) {
      if(i % 2 === 0) {
        size1 = 'small';
      } else if(i % 3 === 0) {
        size1 = 'medium';
      } else {
        size1 = 'large';
        // size = 'medium';
      }
      createStar1();
    }
  
    var star3 = $('#starshine2'),
        stars3 =  25,
        sparkle3 = 15;
    var size3 = 'small';
    var createStar3 = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle3) + 's',
        mozAnimationDelay: (Math.random() * sparkle3) + 's'
      }).addClass(size3).appendTo(star3);
    };
    for(var i = 0; i < stars3; i++) {
      if(i % 2 === 0) {
        size3 = 'small';
      } else if(i % 3 === 0) {
        size3 = 'medium';
      } else {
        size3 = 'large';
        // size = 'medium';
      }
      createStar3();
    }
  
    var star2 = $('#starshine3'),
        stars2 =  20,
        sparkle2 = 15;
    var size2 = 'small';
    var createStar2 = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle2) + 's',
        mozAnimationDelay: (Math.random() * sparkle2) + 's'
      }).addClass(size2).appendTo(star2);
    };
    for(var i = 0; i < stars2; i++) {
      if(i % 2 === 0) {
        size2 = 'small';
      } else if(i % 3 === 0) {
        size2 = 'medium';
      } else {
        size2 = 'large';
        // size = 'medium';
      }
      createStar2();
    }
  
    wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset: 50,
      mobile:       true,       // default
      live:         true        // default
    })
    wow.init();
  
  });