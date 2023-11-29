$(function(){

    $.ajax({
      url: "http://trangsuc.doji.vn/uploads-landing-page/lp/nc082018/json/salsa.json?v=1.01",
      dataType: 'json',
      beforeSend: function(){
        $('#sp-salsa').find('.list-sp').css({'text-align':'center'});
        $('#sp-salsa').find('.list-sp').html('<img class="loading" style="width:90px !important;" src="http://trangsuc.doji.vn/uploads-landing-page/lp/nc082018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#sp-salsa').find('.list-sp').css({'text-align':''});
        var spData = '';
        for(i in o){
          spData += '<div class="item">'+
            '<div class="item-wrap">'+
              '<div class="price">'+
                o[i]['price']+
              '</div>'+
              '<a href="'+ o[i]['link'] +'"><img src="'+ o[i]['image'] +'" alt=""></a>'+
            '</div>'+
          '</div>';
        }
        $('#sp-salsa').find('.list-sp').html(spData);
      },
      complete: function(){
        $('#sp-salsa').find('.list-sp').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          autoplay: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          swipe: true,
          prevArrow: '',
          nextArrow: '',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
                swipe: true
              }
            }
          ]
        });
      }
    });
  
    $.ajax({
      url: "http://trangsuc.doji.vn/uploads-landing-page/lp/nc082018/json/mono.json",
      dataType: 'json',
      beforeSend: function(){
        $('#sp-mono').find('.list-sp').css({'text-align':'center'});
        $('#sp-mono').find('.list-sp').html('<img class="loading" style="width:90px !important;" src="http://trangsuc.doji.vn/uploads-landing-page/lp/nc082018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#sp-mono').find('.list-sp').css({'text-align':''});
        var spData = '';
        for(i in o){
          spData += '<div class="item">'+
            '<div class="item-wrap">'+
              '<div class="price">'+
                o[i]['price']+
              '</div>'+
              '<a href="'+ o[i]['link'] +'"><img src="'+ o[i]['image'] +'" alt=""></a>'+
            '</div>'+
          '</div>';
        }
        $('#sp-mono').find('.list-sp').html(spData);
      },
      complete: function(){
        $('#sp-mono').find('.list-sp').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          autoplay: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          swipe: true,
          prevArrow: '',
          nextArrow: '',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
                swipe: true
              }
            }
          ]
        });
      }
    });
  
    $.ajax({
      url: "http://trangsuc.doji.vn/uploads-landing-page/lp/nc082018/json/eros.json",
      dataType: 'json',
      beforeSend: function(){
        $('#sp-eros').find('.list-sp').css({'text-align':'center'});
        $('#sp-eros').find('.list-sp').html('<img class="loading" style="width:90px !important;" src="http://trangsuc.doji.vn/uploads-landing-page/lp/nc082018/img/loading-paged.gif" />');
      },
      success: function(o){
        $('#sp-eros').find('.list-sp').css({'text-align':''});
        var spData = '';
        for(i in o){
          spData += '<div class="item">'+
            '<div class="item-wrap">'+
              '<div class="price">'+
                o[i]['price']+
              '</div>'+
              '<a href="'+ o[i]['link'] +'"><img src="'+ o[i]['image'] +'" alt=""></a>'+
            '</div>'+
          '</div>';
        }
        $('#sp-eros').find('.list-sp').html(spData);
      },
      complete: function(){
        $('#sp-eros').find('.list-sp').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          autoplay: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          swipe: true,
          prevArrow: '',
          nextArrow: '',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
                swipe: true
              }
            }
          ]
        });
      }
    });
  
  });