$(function(){
  var time = '2018/11/08 08:00:00';
  var time2 = '2018/11/12 22:00:00';
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
    $('.col-rig-01').html('<span>Sự kiện kết thúc sau</span>');
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
    $('.col-rig-01').html('<span>Sự kiện kết thúc sau</span>');
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

  $('#menu-uu-dai').on('click',function(){
    scrollwithPage('#kim-cuong-vien');
  });
  $('#menu-gian-hang').on('click',function(){
    scrollwithPage('#map');
  });

  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();
});

function scrollwithPage(value) {
	$('html, body').animate({
		scrollTop: $(value).offset().top
	}, 800);
}

function menuIcon(x) {
  x.classList.toggle("change");
  $('#menu').toggle('slow');
}
