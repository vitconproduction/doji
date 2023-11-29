$( window ).scroll(function() {
	var hei = ($(".bg-body2").height() - $("#nav-lp").height() - $(".xem-them-dong-nhan-cuoi").height()) - 20;
	var nav_lp_top = $(window).scrollTop();
	if(nav_lp_top > (hei - 70)){
		$("#nav-lp").css({"position":"absolute","top":hei+"px","right":"15px","":""});
	}else{
		$("#nav-lp").attr("style","");
	}
});