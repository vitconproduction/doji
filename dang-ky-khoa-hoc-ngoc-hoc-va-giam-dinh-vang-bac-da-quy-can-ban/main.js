$(function(){

    $('#name').on('input', function () {
      var input = $(this);
      var is_name = input.val();
      if (is_name && is_name !== "") {
        input.removeClass("invalid").addClass("valid");
      } else {
        input.removeClass("valid").addClass("invalid");
      }
    });
    // $.datepicker.regional["vi-VN"] =
      // {
          // closeText: "ÄĂ³ng",
          // prevText: "TrÆ°á»›c",
          // nextText: "Sau",
          // currentText: "HĂ´m nay",
          // monthNames: ["ThĂ¡ng má»™t", "ThĂ¡ng hai", "ThĂ¡ng ba", "ThĂ¡ng tÆ°", "ThĂ¡ng nÄƒm", "ThĂ¡ng sĂ¡u", "ThĂ¡ng báº£y", "ThĂ¡ng tĂ¡m", "ThĂ¡ng chĂ­n", "ThĂ¡ng mÆ°á»i", "ThĂ¡ng mÆ°á»i má»™t", "ThĂ¡ng mÆ°á»i hai"],
          // monthNamesShort: ["Má»™t", "Hai", "Ba", "Bá»‘n", "NÄƒm", "SĂ¡u", "Báº£y", "TĂ¡m", "ChĂ­n", "MÆ°á»i", "MÆ°á»i má»™t", "MÆ°á»i hai"],
          // dayNames: ["Chá»§ nháº­t", "Thá»© hai", "Thá»© ba", "Thá»© tÆ°", "Thá»© nÄƒm", "Thá»© sĂ¡u", "Thá»© báº£y"],
          // dayNamesShort: ["CN", "Hai", "Ba", "TÆ°", "NÄƒm", "SĂ¡u", "Báº£y"],
          // dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          // weekHeader: "Tuáº§n",
          // dateFormat: "dd/mm/yy",
          // firstDay: 1,
          // isRTL: false,
          // showMonthAfterYear: false,
          // yearSuffix: ""
      // };
  
      // $.datepicker.setDefaults($.datepicker.regional["vi-VN"]);
    // $('#birthday').datepicker({
      // dateFormat: 'dd/mm/yy',
      // changeMonth: true,
      // changeYear: true,
      // yearRange: "-100:+0",
      // onSelect: function(is_birthday){
        // if (is_birthday && is_birthday !== "") {
          // $(this).removeClass("invalid").addClass("valid");
        // } else {
          // $(this).removeClass("valid").addClass("invalid");
        // }
      // },
      // onClose: function(is_birthday){
        // if (is_birthday && is_birthday !== "") {
          // $(this).removeClass("invalid").addClass("valid");
        // } else {
          // $(this).removeClass("valid").addClass("invalid");
        // }
      // },
    // });
  
    //Put our input DOM element into a jQuery Object
    // var $jsBirthday = $('#birthday');
    //Bind keyup/keydown to the input
    // $jsBirthday.bind('keyup','keydown', function(e){
      //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
        // if(e.which !== 8) {
            // var numChars = $jsBirthday.val().length;
            // if(numChars === 2 || numChars === 5){
                // var thisVal = $jsBirthday.val();
                // thisVal += '/';
                // $jsBirthday.val(thisVal);
            // }
      // }
    // });
    $('#birthday').on('input', function () {
      var input = $(this);
      var is_addr = input.val();
      if (is_addr && is_addr !== "") {
        input.removeClass("invalid").addClass("valid");
      } else {
        input.removeClass("valid").addClass("invalid");
      }
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
    $('#job').on('input', function () {
      var input = $(this);
      var is_addr = input.val();
      if (is_addr && is_addr !== "") {
        input.removeClass("invalid").addClass("valid");
      } else {
        input.removeClass("valid").addClass("invalid");
      }
    });
    $('#knowledge').on('input', function () {
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
      // form_data.push({name: "gioitinh"});
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
        
        if(form_data[input]['name']=='course'){
          error_free = true;
        }
      }
      console.log(error_free);
      // event.preventDefault();
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
          url: "https://script.google.com/macros/s/AKfycbwHziXmrVan_zMumUpjZTJzGp5lYcNNAdyCBhqO4FBBa4uDUF4/exec",
          type: "GET",
          data: $("#dangKyVoucher").serialize(),
          dataType: 'jsonp',
          success: function (o, t, r) {
              console.log(o);
            if ("error_email" === o.ercode && $('#email').val() !== '') {
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
                          '<div class="text_chuc_mung">ChĂºc má»«ng báº¡n Ä‘Ă£ Ä‘Äƒng kĂ½ khĂ³a há»c thĂ nh cĂ´ng!<div class="close"><img src="/uploads-landing-page/lp/ngochoc/images/close.png?v=1.01" /></div></div>'
                        );
              $('.textcongrat').addClass('pop');
              $('body').css({"cursor": "default"});
  
              $('.textcongrat').find('.close').find('img').on('click',function(){
                location.reload();
              });
  
              $("html, body").animate({scrollTop: 0}, 1000);
  
              var $form = $("#dangKyVoucher");
              var $inputs = $form.find("input, select, button, textarea,#gioitinh1 img");
              $inputs.prop("disabled", true);
              return false;
            }else if (o.ercode !== ""){
              $('.textcongrat').append(
                          '<div class="text_chuc_mung">'
                          +o.ercode
                          +'</div>'
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
  
    $('.thong-tin-khoa-hoc').on('click','.top',function(){
      if($(this).parent().find('.bottom').is(':visible')) {
        $(this).find('span').last().html('Xem thĂªm <img src="./images/left-arr.png" />');
      }else{
        $(this).find('span').last().html('Thu gá»n <img src="./images/down-arr.png" />');
        // var pos = $(this).offset();
        // var distantTop = pos.top;
        // var h_main = $("#h-main").height();
        // var scrollPoint = (distantTop - h_main - h_main);
        // $("html, body").animate({scrollTop: scrollPoint}, 1000);
      }
      $(this).parent().find('.bottom').slideToggle();
    });
  
  });