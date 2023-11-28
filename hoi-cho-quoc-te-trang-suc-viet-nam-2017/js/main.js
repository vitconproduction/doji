$(function(){
  var time = '2017/11/8 08:00:00';
  var time2 = '2017/11/12 22:00:00';
  $('#clock').countdown(time)
  .on('update.countdown', function(event) {
  	$(this).html(''
  		+'<div class="days clock-part"><span>'    + event.strftime('%d') + '</span><span>Ngày</span></div>'
  		+'<div class="hours clock-part"><span>'   + event.strftime('%H') + '</span><span>Giờ</span></div>'
  		+'<div class="mins clock-part"><span>'    + event.strftime('%M') + '</span><span>Phút</span></div>'
  		+'<div class="seconds clock-part"><span>' + event.strftime('%S') + '</span><span>Giây</span></div>'
  	);
    // debugger;
  })
  .on('finish.countdown', function(event) {
    $('.col-rig-01').html('<span>Kết thúc</span><span>sau</span>');
  	clock2();
  });

  function clock2(){
    // console.log($('#clock').val());
  	if( $('#clock').val() === '' ){
  		$('#clock').html('Hội chợ đã kết thúc!').css({'font-size':'18px','color':'#af0025','padding-top':'18px'});
      $('.col-rig-01').html('');
      console.log('1');
  	}
    console.log('2');
  	$('#clock').countdown(time2)
  	.on('update.countdown', function(event) {
    $('.col-rig-01').html('<span>Kết thúc</span><span>sau</span>');
    $(this).removeAttr('style');
  	$(this).html(''
      +'<div class="days clock-part"><span>'    + event.strftime('%d') + '</span><span>Ngày</span></div>'
      +'<div class="hours clock-part"><span>'   + event.strftime('%H') + '</span><span>Giờ</span></div>'
      +'<div class="mins clock-part"><span>'    + event.strftime('%M') + '</span><span>Phút</span></div>'
      +'<div class="seconds clock-part"><span>' + event.strftime('%S') + '</span><span>Giây</span></div>'
  	);
  	})
  	.on('finish.countdown', function(event) {
  	  $(this).html('Hội chợ đã kết thúc!').css({'font-size':'18px','color':'#af0025','padding-top':'18px'});
      $('.col-rig-01').html('');
  	});
  }

  var window_width = $(window).width();
  if( window_width > 768 ){
    $('.banner').css({'height':$('.banner').width()*451/1024});
    $('.ts-cuoi').css({'height':$('.ts-cuoi').width()*406/1024});
    $('.giai-thuong-combo').css({'height':$('.giai-thuong-combo').width()*385/1566});
    $('.giai-thuong').css({'height':$('.giai-thuong').width()*636/1024});
    $('.giai-thuong-game').css({'height':$('.giai-thuong-game').width()*461/1024});
    $('.kim-cuong-banner').css({'height':$('.kim-cuong-banner').width()*317/1024});
    $('.da-mau').css({'height':$('.da-mau').width()*318/1024});
  }else if( window_width == 768 ){
    $('.banner').css({'height':$('.banner').width()*451/1024});
    $('.ts-cuoi').css({'height':$('.ts-cuoi').width()*406/1024});
    $('.giai-thuong-combo').css({'height':$('.giai-thuong-combo').width()*385/1566});
    $('.giai-thuong-game').css({'height':$('.giai-thuong-game').width()*1640/768});
    $('.kim-cuong-banner').css({'height':$('.kim-cuong-banner').width()*393/768});
  }else if( window_width < 768 ){
    // $('.banner').css({'height':$('.banner').width()*500/414});
    $('.giai-thuong-game').css({'height':$('.giai-thuong-game').width()*1070/414});
  }
    screen.orientation.onchange = function () {
      var window_width = $(window).width();
      if( window_width > 768 ){
        $('.banner').css({'height':$('.banner').width()*451/1024});
        $('.ts-cuoi').css({'height':$('.ts-cuoi').width()*406/1024});
        $('.giai-thuong-combo').css({'height':$('.giai-thuong-combo').width()*385/1566});
        $('.giai-thuong-game').css({'height':$('.giai-thuong-game').width()*461/1024});
        $('.kim-cuong-banner').css({'height':$('.kim-cuong-banner').width()*317/1024});
        $('.da-mau').css({'height':$('.da-mau').width()*318/1024});
      }else if( window_width == 768 ){
        $('.banner').css({'height':$('.banner').width()*451/1024});
        $('.ts-cuoi').css({'height':$('.ts-cuoi').width()*406/1024});
        $('.giai-thuong-combo').css({'height':$('.giai-thuong-combo').width()*385/1566});
        $('.giai-thuong-game').css({'height':$('.giai-thuong-game').width()*1640/768});
        $('.kim-cuong-banner').css({'height':$('.kim-cuong-banner').width()*393/768});
        $('.da-mau').css({'height':$('.da-mau').width()*318/1024});
      }else if( window_width < 768 ){
        // $('.banner').css({'height':$('.banner').width()*500/414});
        $('.giai-thuong-game').css({'height':$('.giai-thuong-game').width()*1070/414});
      }
    }
    // $('.banner').css({'height':$('.banner').width()*451/1024});
    // $('.ts-cuoi').css({'height':$('.ts-cuoi').width()*406/1024});
    // $('.giai-thuong-combo').css({'height':$('.giai-thuong-combo').width()*385/1566});
    // $('.kim-cuong-banner').css({'height':$('.kim-cuong-banner').width()*317/1024});
    // $('.da-mau').css({'height':$('.da-mau').width()*318/1024});
  // }
  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();
});