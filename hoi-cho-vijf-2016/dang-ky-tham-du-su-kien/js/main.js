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
//$('#gioitinh').on('change', function () {
//    var input = $(this);
//    var is_gioitinh = input.val();
//    if (is_gioitinh && is_gioitinh !== "") {
//        input.removeClass("invalid").addClass("valid");
//    } else {
//        input.removeClass("valid").addClass("invalid");
//    }
//});
$('#gioitinh1 input').each(function () {
    var $input = $(this);
    $input.removeClass("valid").addClass("invalid");
//    $input.on('change', function () {
//        $('#gioitinh1 input').removeClass("invalid").addClass("valid");
    $("#gioitinh1 img").on("click", function () {
        $("#gioitinh1 img").each(function () {
            $(this).attr("src", "images/radio-img-1.png");
            $(this).prev().attr("checked", false);
        });
        $(this).attr("src", "images/radio-img-2.png");
        $(this).prev().attr("checked", true);
        $('#gioitinh1 input').removeClass("invalid").addClass("valid");
    });
//    });
});

$('#choose1 input').each(function () {
    var $input = $(this);
    $input.removeClass("valid").addClass("invalid");
//    $input.on('change', function () {
//        $('#choose1 input').removeClass("invalid").addClass("valid");
    $("#choose1 img").on("click", function () {
        $("#choose1 img").each(function () {
            $(this).attr("src", "images/radio-img-1.png");
            $(this).prev().attr("checked", false);
        });
        $(this).attr("src", "images/radio-img-2.png");
        $(this).prev().attr("checked", true);
        $('#choose1 input').removeClass("invalid").addClass("valid");
    });
//    });
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
var diadiem4_input = $('.formRowDiadiem4 input');
diadiem4_input.each(function (e) {
    $(this).change(function () {
        var is_diadiem = '';
        var input = $(this);
        if (this.checked) {
            input.removeClass("invalid").addClass("valid");
            is_diadiem = $('#diadiem').val() + ',' + input.val();
            $('#diadiem').val(is_diadiem);
        } else {
            $('#diadiemkhac').removeClass("valid").addClass("invalid");
            input.removeClass("valid").addClass("invalid");
            var rep_diadiem = $('#diadiem').val();
            is_diadiem = rep_diadiem.replace(',' + input.val(), '');
            $('#diadiem').val(is_diadiem);
        }
        if (diadiem4_input.hasClass('valid')) {
            $('#diadiemkhac').removeClass("invalid").addClass("valid");
            $('#diadiem').removeClass("invalid").addClass("valid");
        } else {
            if ($('#diadiemkhac').val() === '') {
                $('#diadiemkhac').removeClass("valid").addClass("invalid");
                $('#diadiem').removeClass("valid").addClass("invalid");
            } else {
                $('#diadiemkhac').removeClass("invalid").addClass("valid");
                $('#diadiem').removeClass("invalid").addClass("valid");
            }
        }
    });
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
    form_data.push({name: "choose"});
    var error_free = true;
    for (var input in form_data) {
        var element = $("#" + form_data[input]['name']);
        console.log(element);
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
        var scrollPoint = (distantTop - h_main);
        $("html, body").animate({scrollTop: scrollPoint}, 1000);
        event.preventDefault();
    } else {
        console.log($("#dangKyVoucher").serialize());
        $('body').css({"cursor": "progress"});
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzBftyN2geJAZt4yOOhqpkMns2odww_tXpcI8orkkiu5r3pvZgW/exec",
            type: "GET",
            data: $("#dangKyVoucher").serialize(),
            dataType: 'jsonp',
            success: function (o, t, r) {
                console.log(o);
                if ("error_email" === o.ercode && $('#email').val() !== '') {
                    //alert("Email đã được sử dụng!");
                    $("#er_email_da_dung").removeClass("em_da_dung").addClass("em_da_dung_show");
                    $("#er_phone_da_dung").removeClass("phone_da_dung_show").addClass("phone_da_dung");
                    $("#er_email").removeClass("error_show").addClass("error");
                    var pos = $('#nhanvoucher').offset();
                    var distantTop = pos.top;
                    var h_main = $("#h-main").height();
                    var scrollPoint = (distantTop - h_main);
                    $("html, body").animate({scrollTop: scrollPoint}, 1000);
                    $('body').css({"cursor": "default"});
                    return false;
                } else if ("error_sdt" === o.ercode && $('#phone').val() !== '') {
                    //alert("Số điện thoại đã được sử dụng!");
                    $("#er_phone_da_dung").removeClass("phone_da_dung").addClass("phone_da_dung_show");
                    $("#er_email_da_dung").removeClass("em_da_dung_show").addClass("em_da_dung");
                    $("#er_phone").removeClass("error_show").addClass("error");
                    var pos = $('#nhanvoucher').offset();
                    var distantTop = pos.top;
                    var h_main = $("#h-main").height();
                    var scrollPoint = (distantTop - h_main);
                    $("html, body").animate({scrollTop: scrollPoint}, 1000);
                    $('body').css({"cursor": "default"});
                    return false;
                } else if (o.status === "OK") {
                    //console.log("Cám ơn bạn đã đăng ký");
                    $("#er_email_da_dung").removeClass("em_da_dung_show").addClass("em_da_dung");
                    $("#er_phone_da_dung").removeClass("phone_da_dung_show").addClass("phone_da_dung");
                    $('.textcongrat').html('<div class="text_chuc_mung">Chúc mừng bạn đã đăng ký thành công!</div>');
                    $('body').css({"cursor": "default"});
                    //$('#quatang')[0].scrollIntoView(true);
                    //$("#dangKyVoucher")[0].reset();
                    var $form = $("#dangKyVoucher");
                    var $inputs = $form.find("input, select, button, textarea,#gioitinh1 img");
                    $inputs.prop("disabled", true);
                    return false;
                } else {
                    $('body').css({"cursor": "default"});
                    var pos = $('#nhanvoucher').offset();
                    var distantTop = pos.top;
                    var h_main = $("#h-main").height();
                    var scrollPoint = (distantTop - h_main);
                    $("html, body").animate({scrollTop: scrollPoint}, 1000);
                }
            },
            complete: function () {

            }
        });
        event.preventDefault();
    }
});