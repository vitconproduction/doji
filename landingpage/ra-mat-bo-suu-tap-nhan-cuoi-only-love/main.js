$(function() {

    $('.the-le-btn').on('click', function() {
      $('#the-le').addClass('avai');
    });
  
    $('#the-le').find('.close').on('click', function() {
      $('#the-le').removeClass('avai');
    });
  
    $(window).on('scroll',function(){
  
      if( $(this).scrollTop() > $('#qua-tang').offset().top ){
        $('#wrap-banner-fixed').addClass('change');
      }else{
        $('#wrap-banner-fixed').removeClass('change');
      }
  
    });
  
    $('.uu-dai-fixed').on('click','.swip',function(){
      $(this).parent().toggleClass('hideleft');
    });
  
    $('.vong-quay-fixed').on('click','.swip',function(){
      $(this).parent().toggleClass('hideleft');
    });
  
    $('.vong-quay-fixed').on('click','.scol',function(){
  
      $('html, body').animate({
        scrollTop: $('#minigame').offset().top
      }, 800);
  
    });
  
    $('#regisForm').validate({
      rules: {
        billing_first_name: "required",
        billing_phone: "required",
        billing_address_1: "required",
      },
      messages: {
        billing_first_name: "Vui lĂ²ng nháº­p thĂ´ng tin!",
        billing_phone: "Vui lĂ²ng nháº­p thĂ´ng tin!",
        billing_address_1: "Vui lĂ²ng nháº­p thĂ´ng tin!",
      },
      submitHandler: function(form) {
  
        $.ajax({
            type: 'POST',
            url: '',
            dataType: 'json',
            data: {
              'user_id': '' ,
              'fields' : $(form).serializeArray(),
            },
            beforeSend: function() {
              // $('body').addClass('body-overflow-h');
              // $('.loading-page').addClass('loading-action');
            },
            success: function(result) {
              console.log(result);
              if (result['success'] == true) {
                    $('#popup-checkout').html(result['data']);
              } else {
                  if (result['errorID'] != '') {
                    $('#' + result['errorID']).html('Vui lĂ²ng nháº­p thĂ´ng tin!').show();
                  }
              }
            },
            error: function(error) {
              console.log(error);
            },
            complete: function() {
              // $( 'body' ).removeClass('body-overflow-h');
              // $('.loading-page').removeClass('loading-action');
            },
        });
  
      }
    });
  
  });