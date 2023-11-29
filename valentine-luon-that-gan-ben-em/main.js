$(function(){
    // Nháº«n
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxhqEo0gRwBVLHLLM6YGzzYvJMI67w3vlxAODBB_IFZ86t4yS7t/exec",
      data: {category:0},
      dataType: 'jsonp',
      beforeSend: function(){
        $('#slide-bst-nhan').css({'text-align':'center'});
        $('#slide-bst-nhan').html('<img style="width:10%;" src="/uploads-landing-page/valentine/2018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#slide-bst-nhan').css({'text-align':''});
        var data = JSON.parse(o);
        var slideData = '';
        for(i in data){
          var arrSP = data[i].split(",");
          slideData += '<li data-aos="zoom-in" data-aos-duration="700"><img title="'+arrSP[0]+'" alt="'+arrSP[0]+'" src="'+arrSP[1]+'" /><span><a href="'+arrSP[2]+'">Xem chi tiáº¿t</a></span></li>';
        }
        $('#slide-bst-nhan').html(slideData);
      },
      complete: function(){
        var $slide = $("#slide-bst-nhan").lightSlider({
          gallery: false,
          item: 3,
          slideMove: 1,
          speed: 700,
          pause: 4000,
          loop: true,
          auto: true,
          pager: false,
          mode: 'slide',
          pauseOnHover: true,
          enableTouch: true,
          enableDrag: false,
          freeMove: false,
          controls: true,
          prevHtml: '<',
          nextHtml: '>',
          slideMargin: 40,
          responsive : [
            {
              breakpoint:768,
              settings: {
                item: 2,
                slideMove: 1,
                slideMargin:10,
              }
            }
          ]
        });
        $('.lp-bst-nhan .lSAction > .lSNext').on('click', function(){
          $slide.goToNextSlide();
        });
        $('.lp-bst-nhan .lSAction > .lSPrev').on('click', function(){
          $slide.goToPrevSlide();
        });
        $slide.find('li img,li span').hover(
          function() {
            $( this ).parent().find('span').css({'display':'block'});
          }, function() {
            $( this ).parent().find('span').css({'display':'none'});
          }
        );
      }
    });
    // Láº¯c tay
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxhqEo0gRwBVLHLLM6YGzzYvJMI67w3vlxAODBB_IFZ86t4yS7t/exec",
      data: {category:1},
      dataType: 'jsonp',
      beforeSend: function(){
        $('#slide-bst-lac-tay').css({'text-align':'center'});
        $('#slide-bst-lac-tay').html('<img style="width:10%;" src="/uploads-landing-page/valentine/2018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#slide-bst-lac-tay').css({'text-align':''});
        var data = JSON.parse(o);
        var slideData = '';
        for(i in data){
          var arrSP = data[i].split(",");
          slideData += '<li data-aos="zoom-in" data-aos-duration="700"><img title="'+arrSP[0]+'" alt="'+arrSP[0]+'" src="'+arrSP[1]+'" /><span><a href="'+arrSP[2]+'">Xem chi tiáº¿t</a></span></li>';
        }
        $('#slide-bst-lac-tay').html(slideData);
      },
      complete: function(){
        var $slide1 = $("#slide-bst-lac-tay").lightSlider({
          gallery: false,
          item: 3,
          slideMove: 1,
          speed: 700,
          pause: 4000,
          loop: true,
          auto: true,
          pager: false,
          mode: 'slide',
          pauseOnHover: true,
          enableTouch: true,
          enableDrag: false,
          freeMove: false,
          controls: true,
          prevHtml: '<',
          nextHtml: '>',
          slideMargin: 40,
          responsive : [
            {
              breakpoint:768,
              settings: {
                item: 2,
                slideMove: 1,
                slideMargin:10,
              }
            }
          ]
        });
        $('.lp-bst-lac-tay .lSAction > .lSNext').on('click', function(){
          $slide1.goToNextSlide();
        });
        $('.lp-bst-lac-tay .lSAction > .lSPrev').on('click', function(){
          $slide1.goToPrevSlide();
        });
        $slide1.find('li img,li span').hover(
          function() {
            $( this ).parent().find('span').css({'display':'block'});
          }, function() {
            $( this ).parent().find('span').css({'display':'none'});
          }
        );
      }
    });
    // Máº·t dĂ¢y
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxhqEo0gRwBVLHLLM6YGzzYvJMI67w3vlxAODBB_IFZ86t4yS7t/exec",
      data: {category:2},
      dataType: 'jsonp',
      beforeSend: function(){
        $('#slide-bst-mat-day').css({'text-align':'center'});
        $('#slide-bst-mat-day').html('<img style="width:10%;" src="/uploads-landing-page/valentine/2018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#slide-bst-mat-day').css({'text-align':''});
        var data = JSON.parse(o);
        var slideData = '';
        for(i in data){
          var arrSP = data[i].split(",");
          slideData += '<li data-aos="zoom-in" data-aos-duration="700"><img title="'+arrSP[0]+'" alt="'+arrSP[0]+'" src="'+arrSP[1]+'" /><span><a href="'+arrSP[2]+'">Xem chi tiáº¿t</a></span></li>';
        }
        $('#slide-bst-mat-day').html(slideData);
      },
      complete: function(){
        var $slide2 = $("#slide-bst-mat-day").lightSlider({
          gallery: false,
          item: 3,
          slideMove: 1,
          speed: 700,
          pause: 4000,
          loop: true,
          auto: true,
          pager: false,
          mode: 'slide',
          pauseOnHover: true,
          enableTouch: true,
          enableDrag: false,
          freeMove: false,
          controls: true,
          prevHtml: '<',
          nextHtml: '>',
          slideMargin: 40,
          responsive : [
            {
              breakpoint:768,
              settings: {
                item: 2,
                slideMove: 1,
                slideMargin:10,
              }
            }
          ]
        });
        $('.lp-bst-mat-day .lSAction > .lSNext').on('click', function(){
          $slide2.goToNextSlide();
        });
        $('.lp-bst-mat-day .lSAction > .lSPrev').on('click', function(){
          $slide2.goToPrevSlide();
        });
        $slide2.find('li img,li span').hover(
          function() {
            $( this ).parent().find('span').css({'display':'block'});
          }, function() {
            $( this ).parent().find('span').css({'display':'none'});
          }
        );
      }
    });
    // Hoa tai
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxhqEo0gRwBVLHLLM6YGzzYvJMI67w3vlxAODBB_IFZ86t4yS7t/exec",
      data: {category:3},
      dataType: 'jsonp',
      beforeSend: function(){
        $('#slide-bst-hoa-tai').css({'text-align':'center'});
        $('#slide-bst-hoa-tai').html('<img style="width:10%;" src="/uploads-landing-page/valentine/2018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#slide-bst-hoa-tai').css({'text-align':''});
        var data = JSON.parse(o);
        var slideData = '';
        for(i in data){
          var arrSP = data[i].split(",");
          slideData += '<li data-aos="zoom-in" data-aos-duration="700"><img title="'+arrSP[0]+'" alt="'+arrSP[0]+'" src="'+arrSP[1]+'" /><span><a href="'+arrSP[2]+'">Xem chi tiáº¿t</a></span></li>';
        }
        $('#slide-bst-hoa-tai').html(slideData);
      },
      complete: function(){
        var $slide3 = $("#slide-bst-hoa-tai").lightSlider({
          gallery: false,
          item: 3,
          slideMove: 1,
          speed: 700,
          pause: 4000,
          loop: true,
          auto: true,
          pager: false,
          mode: 'slide',
          pauseOnHover: true,
          enableTouch: true,
          enableDrag: false,
          freeMove: false,
          controls: true,
          prevHtml: '<',
          nextHtml: '>',
          slideMargin: 40,
          responsive : [
            {
              breakpoint:768,
              settings: {
                item: 2,
                slideMove: 1,
                slideMargin:10,
              }
            }
          ]
        });
        $('.lp-bst-hoa-tai .lSAction > .lSNext').on('click', function(){
          $slide3.goToNextSlide();
        });
        $('.lp-bst-hoa-tai .lSAction > .lSPrev').on('click', function(){
          $slide3.goToPrevSlide();
        });
        $slide3.find('li img,li span').hover(
          function() {
            $( this ).parent().find('span').css({'display':'block'});
          }, function() {
            $( this ).parent().find('span').css({'display':'none'});
          }
        );
      }
    });
  
    AOS.init();
  
  });