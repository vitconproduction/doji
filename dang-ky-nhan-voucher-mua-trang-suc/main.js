jQuery(function($){
	/* voucher */
$('#name').on('input', function () {
    var input = $(this);
    var is_name = input.val();
    if (is_name && is_name !== "") {
        input.removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
    }
});
$('#birthday').on('input', function () {
    var input = $(this);
    var re = /^([0-9]*)$/;
    var is_phone = re.test(input.val());
    if (is_phone && (input.val() !== '')) {
        input.removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
    }
});
$('#gioitinh1 input').each(function () {
    var $input = $(this);
    $input.removeClass("valid").addClass("invalid");
    $("#gioitinh1 img").on("click", function () {
        $("#gioitinh1 img").each(function () {
            $(this).attr("src", "https://vitconproduction.github.io/doji/dang-ky-nhan-voucher-mua-trang-suc//images/radio-img-1.png");
            $(this).prev().attr("checked", false);
        });
        $(this).attr("src", "https://vitconproduction.github.io/doji/dang-ky-nhan-voucher-mua-trang-suc//images/radio-img-2.png");
        $(this).prev().attr("checked", true);
        $('#gioitinh1 input').removeClass("invalid").addClass("valid");
    });
});
$('#addr').on('input', function () {
    var input = $(this);
    var is_addr = input.val();
    if (is_addr && is_addr !== "") {
        input.removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
    }
});
$('#quanhuyen').on('input', function () {
    var input = $(this);
    var is_addr = input.val();
    if (is_addr && is_addr !== "") {
        input.removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
    }
});
$('#city').on('input', function () {
    var input = $(this);
    var is_addr = input.val();
    if (is_addr && is_addr !== "") {
        input.removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
    }
});
$('#phone').on('input', function () {
    var input = $(this);
    var re = /^([0-9]*)$/;
    var is_phone = re.test(input.val());
    if (is_phone && (input.val() !== '')) {
        input.removeClass("invalid").addClass("valid");
        $("#er_phone_da_dung").removeClass("phone_da_dung_show").addClass("phone_da_dung");
    } else {
        input.removeClass("valid").addClass("invalid");
    }
});
$('#diadiemkhac').on('input', function () {
    var input = $(this);
    var is_diadiemkhac = input.val();
    if (is_diadiemkhac) {
        input.removeClass("invalid").addClass("valid");
        $('#diadiem').removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
        $('#diadiem').removeClass("valid").addClass("invalid");
    }
});
$('#email').on('input', function () {
    var input = $(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email = re.test(input.val());
    if (is_email && (input.val() != '')) {
        input.removeClass("invalid").addClass("valid");
    } else {
        input.removeClass("valid").addClass("invalid");
        $("#er_email_da_dung").removeClass("em_da_dung_show").addClass("em_da_dung");
    }
});

$("#dangKyVoucher").submit(function (event) {
    $("#er_phone_da_dung").removeClass("phone_da_dung_show").addClass("phone_da_dung");
    var form_data = $("#dangKyVoucher").serializeArray();
    form_data.push({name: "gioitinh"});
    var error_free = true;
    for (var input in form_data) {
        var element = $("#" + form_data[input]['name']);
        var valid = element.hasClass("valid");
        var error_element = $("#er_" + form_data[input]['name']);
        if (!valid) {
            error_element.removeClass("error").addClass("error_show");
            error_free = false;
        } else {
            error_element.removeClass("error_show").addClass("error");
        }
    }
    event.preventDefault();
    if (!error_free) {
        var pos = $('#nhanvoucher').offset();
        var distantTop = pos.top;
        var h_main = $("#h-main").height();
        var scrollPoint = (distantTop - h_main - h_main);
        $("html, body").animate({scrollTop: scrollPoint}, 1000);
        event.preventDefault();
    } else {
        $('body').css({"cursor": "progress"});
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyb5TcmhCWMY4fhNgnHEq54Im0rfSA23w6sEtzPoJwgqtnlJpW0/exec",
            type: "GET",
            data: $("#dangKyVoucher").serialize(),
            dataType: 'jsonp',
            success: function (o, t, r) {
				console.log(o);
                if ("error_email" === o.ercode && $('#email').val() !== '') {
                    //alert("Email Ä‘Ă£ Ä‘Æ°á»£c sá»­ dá»¥ng!");
                    $("#er_email_da_dung").removeClass("em_da_dung").addClass("em_da_dung_show");
                    $("#er_phone_da_dung").removeClass("phone_da_dung_show").addClass("phone_da_dung");
                    $("#er_email").removeClass("error_show").addClass("error");
                    var pos = $('#nhanvoucher').offset();
                    var distantTop = pos.top;
                    var h_main = $("#h-main").height();
                    var scrollPoint = (distantTop - h_main - h_main);
                    $("html, body").animate({scrollTop: scrollPoint}, 1000);
                    $('body').css({"cursor": "default"});
                    return false;
                } else if ("error_sdt" === o.ercode && $('#phone').val() !== '') {
                    //alert("Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Ă£ Ä‘Æ°á»£c sá»­ dá»¥ng!");
                    $("#er_phone_da_dung").removeClass("phone_da_dung").addClass("phone_da_dung_show");
                    $("#er_email_da_dung").removeClass("em_da_dung_show").addClass("em_da_dung");
                    $("#er_phone").removeClass("error_show").addClass("error");
                    var pos = $('#nhanvoucher').offset();
                    var distantTop = pos.top;
                    var h_main = $("#h-main").height();
                    var scrollPoint = (distantTop - h_main - h_main);
                    $("html, body").animate({scrollTop: scrollPoint}, 1000);
                    $('body').css({"cursor": "default"});
                    return false;
                } else if (o.status === "OK") {
                    $("#er_email_da_dung").removeClass("em_da_dung_show").addClass("em_da_dung");
                    $("#er_phone_da_dung").removeClass("phone_da_dung_show").addClass("phone_da_dung");
                    $('.textcongrat').append(
					'<div class="text_chuc_mung">ChĂºc má»«ng báº¡n Ä‘Ă£ Ä‘Äƒng kĂ½ thĂ nh cĂ´ng!<br />'
					// +'Tiáº¿p tá»¥c <a href="'+ window.location.href +'">Ä‘Äƒng kĂ½</a>'
					+' GhĂ© thÄƒm gian hĂ ng DOJI táº¡i Há»™i chá»£ VIJF 2019 <a href="http://trangsuc.doji.vn/microsite/hoi-cho-quoc-te-trang-suc-viet-nam-2019/">táº¡i Ä‘Ă¢y</a></div>'
					);
                    $('body').css({"cursor": "default"});
				
                    var $form = $("#dangKyVoucher");
                    var $inputs = $form.find("input, select, button, textarea,#gioitinh1 img");
                    $inputs.prop("disabled", true);
                    return false;
                }else if (o.ercode !== ""){
$('.textcongrat').append(
					'<div class="text_chuc_mung">'
					+o.ercode
					+'<br />GhĂ© thÄƒm gian hĂ ng DOJI táº¡i Há»™i chá»£ VIJF 2019 <a href="http://trangsuc.doji.vn/microsite/hoi-cho-quoc-te-trang-suc-viet-nam-2019/">táº¡i Ä‘Ă¢y</a></div>'
					);
                    $('body').css({"cursor": "default"});
				
                    var $form = $("#dangKyVoucher");
                    var $inputs = $form.find("input, select, button, textarea,#gioitinh1 img");
                    $inputs.prop("disabled", true);
                    return false;					
				}else {
                    $('body').css({"cursor": "default"});
                    var pos = $('#nhanvoucher').offset();
                    var distantTop = pos.top;
                    var h_main = $("#h-main").height();
                    var scrollPoint = (distantTop - h_main - h_main);
                    $("html, body").animate({scrollTop: scrollPoint}, 1000);
                }
            },
            complete: function () {

            },
			error: function( e ){
				
			}
        });
        event.preventDefault();
    }
});
});