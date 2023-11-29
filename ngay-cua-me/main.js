$(function(){

    $.ajax({
      url: "http://trangsuc.doji.vn/uploads-landing-page/lp/ngaycuame2018/json/sp.json?v=1.0",
      dataType: 'json',
      beforeSend: function(){
  
      },
      success: function(o){
        var sp_data = '<div class="row">';
        for( var i in o ){
          sp_data +=  '<div class="sp-item col-md-2 col-sm-4 col-xs-6" data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="center-bottom" data-aos-delay="'+(i*150)+'">'+
                        '<a class="readmore" href="'+o[i].link+'"><img class="img-responsive" src="'+o[i].image+'" /></a>'+
                        '<span><a class="readmore" href="'+o[i].link+'">Xem thĂªm</a></span>'+
                      '</div>';
        }
        sp_data += '</div>';
        $( '#sp-vtyt' ).html(sp_data);
      },
      complete: function(){
        var win_width = $(window).width();
        if( win_width > 768 ){
          $('#sp-vtyt').find('div a,div > span').hover(
            function() {
              $( this ).parent().find('span').css({'display':'block'});
              $( this ).parent().find('img').css({'opacity':'0.4'});
            }, function() {
              $( this ).parent().find('span').css({'display':'none'});
              $( this ).parent().find('img').css({'opacity':'1'});
            }
          );
        }
      }
    });
  
    $.ajax({
      url: "http://trangsuc.doji.vn/uploads-landing-page/lp/ngaycuame2018/json/sp1.json?v=1.0",
      dataType: 'json',
      beforeSend: function(){
  
      },
      success: function(o){
        var sp_data = '<div class="row">';
        for( var i in o ){
          sp_data +=  '<div class="sp-item col-md-2 col-sm-4 col-xs-6" data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="center-bottom" data-aos-delay="'+(i*150)+'">'+
                        '<a class="readmore" href="'+o[i].link+'"><img class="img-responsive" src="'+o[i].image+'" /></a>'+
                        '<span><a class="readmore" href="'+o[i].link+'">Xem thĂªm</a></span>'+
                      '</div>';
        }
        sp_data += '</div>';
        $( '#sp-adrr' ).html(sp_data);
      },
      complete: function(){
        var win_width = $(window).width();
        if( win_width > 768 ){
          $('#sp-adrr').find('div a,div > span').hover(
            function() {
              $( this ).parent().find('span').css({'display':'block'});
              $( this ).parent().find('img').css({'opacity':'0.4'});
            }, function() {
              $( this ).parent().find('span').css({'display':'none'});
              $( this ).parent().find('img').css({'opacity':'1'});
            }
          );
        }
      }
    });
  
    AOS.init();
  
  });