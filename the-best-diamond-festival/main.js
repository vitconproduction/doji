$(function(){

    var win_width = $(window).width();
  
    Object.defineProperty(Array.prototype, 'chunk_inefficient', {
        value: function(chunkSize) {
            var array=this;
            return [].concat.apply([],
                array.map(function(elem,i) {
                    return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
                })
            );
        }
    });
  
    var arrCarat = new Array(), oriCarat = [0,0.25,0.5,0.75,1,1.5,2,3,4,5],
        arrColor = new Array(), oriColor = ["I","H","G","F","E","D"],
        arrClarity = new Array(), oriClarity = ["SI2","SI1","VS2","VS1","VVS2","VVS1","IF","FL"],
        arrCut = new Array(), oriCut = ["Good","Very Good","Excellent"],
        arrPrice = new Array(), oriPrice = [0,10000000,20000000,30000000,50000000,100000000,200000000,300000000,500000000,1000000000,2000000000,3000000000,5000000000];
  
    var values,
        percent, part,
        tempLen,
        tempHtmlHandle = '';
  
    var slideCarat = $( "#slider-carat" ).slider({
      range: true,
      min: 0,
      max: oriCarat.length-1,
      values: [0, oriCarat.length-1],
      create: function (event, ui) {
        var html = '';
        var customHanleW = $(event.target).parent().find('.custom-handle-show-value').width();
        for(var i in oriCarat){
          html += '<div style="left:calc(('+customHanleW+'px / '+(oriCarat.length-1)+' * '+i+') - ('+customHanleW+'px / '+(oriCarat.length)+' / 2) + .3em);width: calc('+customHanleW+'px / '+oriCarat.length+')">'+oriCarat[i]+'</div>';
        }
        $(event.target).parent().find('.custom-handle-show-value').html(html);
      },
      slide: function( event, ui ) {
        $( 'input[name="minCarat"]' ).val( oriCarat[ui.values[ 0 ]] );
        $( 'input[name="maxCarat"]' ).val( oriCarat[ui.values[ 1 ]] );
      },
      change: function( event, ui ) {
        $( 'input[name="minCarat"]' ).val( oriCarat[ui.values[ 0 ]] );
        $( 'input[name="maxCarat"]' ).val( oriCarat[ui.values[ 1 ]] );
      },
    });
    values = $( "#slider-carat" ).slider( "option", "values" );
    $( 'input[name="minCarat"]' ).val( oriCarat[values[ 0 ]] );
    $( 'input[name="maxCarat"]' ).val( oriCarat[values[ 1 ]] );
  
    // ["D", "E", "F", "G", "H", "I"]
    var slideColor = $( "#slider-color" ).slider({
      range: true,
      min: 0,
      max: oriColor.length-1,
      values: [0, oriColor.length-1],
      create: function (event, ui) {
        var html = '';
        var customHanleW = $(event.target).parent().find('.custom-handle-show-value').width();
        for(var i in oriColor){
          html += '<div style="left:calc(('+customHanleW+'px / '+(oriColor.length-1)+' * '+i+') - ('+customHanleW+'px / '+(oriColor.length)+' / 2)  + .3em);width: calc('+customHanleW+'px / '+oriColor.length+')">'+oriColor[i]+'</div>';
        }
        $(event.target).parent().find('.custom-handle-show-value').html(html);
      },
      slide: function( event, ui ) {
        $( 'input[name="minColor"]' ).val( oriColor[ui.values[ 0 ]] );
        $( 'input[name="maxColor"]' ).val( oriColor[ui.values[ 1 ]] );
      },
      change: function( event, ui ) {
        $( 'input[name="minColor"]' ).val( oriColor[ui.values[ 0 ]] );
        $( 'input[name="maxColor"]' ).val( oriColor[ui.values[ 1 ]] );
        // console.log(ui.values);
      }
    });
    values = $( "#slider-color" ).slider( "option", "values" );
    $( 'input[name="minColor"]' ).val( oriColor[values[ 0 ]] );
    $( 'input[name="maxColor"]' ).val( oriColor[values[ 1 ]] );
  
    var slideClarity = $( "#slider-clarity" ).slider({
      range: true,
      min: 0,
      max: oriClarity.length-1,
      values: [0, oriClarity.length-1],
      create: function (event, ui) {
        var html = '';
        var customHanleW = $(event.target).parent().find('.custom-handle-show-value').width();
        for(var i in oriClarity){
          html += '<div style="left:calc(('+customHanleW+'px / '+(oriClarity.length-1)+' * '+i+') - ('+customHanleW+'px / '+(oriClarity.length)+' / 2)  + .3em);width: calc('+customHanleW+'px / '+oriClarity.length+')">'+oriClarity[i]+'</div>';
        }
        $(event.target).parent().find('.custom-handle-show-value').html(html);
      },
      slide: function( event, ui ) {
        $( 'input[name="minClarity"]' ).val( oriClarity[ui.values[ 0 ]] );
        $( 'input[name="maxClarity"]' ).val( oriClarity[ui.values[ 1 ]] );
      },
      change: function( event, ui ) {
        $( 'input[name="minClarity"]' ).val( oriClarity[ui.values[ 0 ]] );
        $( 'input[name="maxClarity"]' ).val( oriClarity[ui.values[ 1 ]] );
        // console.log(ui.values);
      }
    });
    values = $( "#slider-clarity" ).slider( "option", "values" );
    $( 'input[name="minClarity"]' ).val( oriClarity[values[ 0 ]] );
    $( 'input[name="maxClarity"]' ).val( oriClarity[values[ 1 ]] );
  
    var slideCut = $( "#slider-cut" ).slider({
      range: true,
      min: 0,
      max: oriCut.length-1,
      values: [0, oriCut.length-1],
      create: function (event, ui) {
        var html = '';
        var customHanleW = $(event.target).parent().find('.custom-handle-show-value').width();
        for(var i in oriCut){
          html += '<div style="left:calc(('+customHanleW+'px / '+(oriCut.length-1)+' * '+i+') - ('+customHanleW+'px / '+(oriCut.length)+' / 2) + .3em);width: calc('+customHanleW+'px / '+oriCut.length+')">'+oriCut[i]+'</div>';
        }
        $(event.target).parent().find('.custom-handle-show-value').html(html);
      },
      slide: function( event, ui ) {
        $( 'input[name="minCut"]' ).val( oriCut[ui.values[ 0 ]] );
        $( 'input[name="maxCut"]' ).val( oriCut[ui.values[ 1 ]] );
      },
      change: function( event, ui ) {
        $( 'input[name="minCut"]' ).val( oriCut[ui.values[ 0 ]] );
        $( 'input[name="maxCut"]' ).val( oriCut[ui.values[ 1 ]] );
        // console.log(ui.values);
      }
    });
    values = $( "#slider-cut" ).slider( "option", "values" );
    $( 'input[name="minCut"]' ).val( oriCut[values[ 0 ]] );
    $( 'input[name="maxCut"]' ).val( oriCut[values[ 1 ]] );
  
    var slidePrice = $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: oriPrice.length-1,
      step: 1,
      values: [0, oriPrice.length-1],
      create: function (event, ui) {
        $(event.target.children[1]).html( '<span>'+formatNumber(oriPrice[0])+' Ä‘</span>' );
        $(event.target.children[2]).html( '<span>'+formatNumber(oriPrice[oriPrice.length-1])+' Ä‘</span>' );
      },
      slide: function( event, ui ) {
        $( 'input[name="minPrice"]' ).val( oriPrice[ui.values[ 0 ]] );
        $( 'input[name="maxPrice"]' ).val( oriPrice[ui.values[ 1 ]] );
        if (ui.handleIndex+1 == 1){
          $(event.target.children[ui.handleIndex+1]).html( '<span>'+formatNumber(oriPrice[ui.values[ 0 ]])+' Ä‘</span>' );
        } else {
          $(event.target.children[ui.handleIndex+1]).html( '<span>'+formatNumber(oriPrice[ui.values[ 1 ]])+' Ä‘</span>' );
        }
      },
      change: function( event, ui ) {
        $( 'input[name="minPrice"]' ).val( oriPrice[ui.values[ 0 ]] );
        $( 'input[name="maxPrice"]' ).val( oriPrice[ui.values[ 1 ]] );
      },
    });
    values = $( "#slider-price" ).slider( "option", "values" );
    $( 'input[name="minPrice"]' ).val( oriPrice[values[ 0 ]] );
    $( 'input[name="maxPrice"]' ).val( oriPrice[values[ 1 ]] );
  
    $('*[id^="slider-"]').on('slidechange',function(event, ui){
      var param = '';
      $(this).parent().parent().find('input').each(function(index){
        param += $(this).attr('name')+'='+$(this).val()+'&';
      });
  
      var data = encodeURI( param.slice( 0, param.length-1 ) );
      $.ajax({
            url: "https://script.google.com/macros/s/AKfycbymSTZrix2DVrgXg2buJfezPQPhVg7yC4_9xKZYwmTOtKuHbPM/exec",
            data: 'view=1&first=2&'+data,
            dataType: 'jsonp',
        beforeSend: function(r,t,o){
          $('.list-kcv_results').addClass('loading');
        },
        success: function (r,t,o) {
          var arr = o.responseJSON;
          // console.log(o);
          // var arrWithoutHeader = arr.slice(1); //base array
          var arrWithoutHeader = arr;
  
          var num = arrWithoutHeader.length;
          var limit = 10;
          var arrPagi = arrWithoutHeader.chunk_inefficient(limit);
  
          var totalEle = num;
          var currentPage = 1;
          var page = 1;
          var html = loadPagi(totalEle,currentPage,limit,page);
          $('.list-kcv_results__pagi').html(html);
  
          // var arrTemp = arrPagi[0];
  
          $('#listing-diamond').html(getPage(page,arrPagi,totalEle,currentPage,limit));
  
          $('.list-kcv_results').find('.list-kcv_results__pagi').on('click','a',function(){
            var pagi = $(this).attr('page');
  
            var currentPage = pagi;
            var page = pagi;
            var html = loadPagi(totalEle,currentPage,limit,page);
            $('.list-kcv_results__pagi').html(html);
  
            $('#listing-diamond').html(getPage(page,arrPagi,totalEle,currentPage,limit));
  
          });
  
          $('.list-kcv_results').find('.list-kcv_results__pagi').on('click','.controlBtn',function(){
            var page=$(this).attr('page');
  
            var currentPage = $(this).parent().find('.active').attr('page');
            var html = loadPagi(totalEle,currentPage,limit,page);
            $('.list-kcv_results__pagi').html(html);
  
            $('#listing-diamond').html(getPage(page,arrPagi,totalEle,currentPage,limit));
  
           });
  
          },
        complete: function (r,t,o) {
          $('.list-kcv_results').removeClass('loading');
        }
        });
  
    });
  
    $.ajax({
          url: "https://script.google.com/macros/s/AKfycbymSTZrix2DVrgXg2buJfezPQPhVg7yC4_9xKZYwmTOtKuHbPM/exec",
          data: {
        view: 1,
        first: 1,
      },
          dataType: 'jsonp',
      beforeSend: function(r,t,o){
        $('.list-kcv_results').addClass('loading');
      },
      success: function (r,t,o) {
        var arr = o.responseJSON;
        // console.log(o);
        // var arrWithoutHeader = arr.slice(1); //base array
        var arrWithoutHeader = arr;
  
        var num = arrWithoutHeader.length;
        var limit = 10;
        var arrPagi = arrWithoutHeader.chunk_inefficient(limit);
  
        var totalEle = num;
        var currentPage = 1;
        var page = 1;
        var html = loadPagi(totalEle,currentPage,limit,page);
        $('.list-kcv_results__pagi').html(html);
  
        // var arrTemp = arrPagi[0];
  
        $('#listing-diamond').html(getPage(page,arrPagi,totalEle,currentPage,limit));
  
        $('.list-kcv_results').find('.list-kcv_results__pagi').on('click','a',function(){
          var pagi = $(this).attr('page');
  
          var currentPage = pagi;
          var page = pagi;
          var html = loadPagi(totalEle,currentPage,limit,page);
          $('.list-kcv_results__pagi').html(html);
  
          $('#listing-diamond').html(getPage(page,arrPagi,totalEle,currentPage,limit));
  
        });
  
        $('.list-kcv_results').find('.list-kcv_results__pagi').on('click','.controlBtn',function(){
          var page=$(this).attr('page');
  
          var currentPage = $(this).parent().find('.active').attr('page');
          var html = loadPagi(totalEle,currentPage,limit,page);
          $('.list-kcv_results__pagi').html(html);
  
          $('#listing-diamond').html(getPage(page,arrPagi,totalEle,currentPage,limit));
  
         });
  
        },
      complete: function (r,t,o) {
        $('.list-kcv_results').removeClass('loading');
      }
      });
  
    function totalRow(totalEle,limit){
      var total=totalEle/limit;
      return total;
    }
  
    function loadPagi(totalEle,currentPage,limit,page){
  
      var back,next,startPage;
  
      if(page!=1){
        startPage = (page-1)*limit;
        currentPage = page;
      }else{
        startPage = page - 1;
        currentPage = page;
      }
  
      var htmlPage = '<span class="info">Trang '+currentPage+'/'+Math.ceil(totalRow(totalEle,limit))+'</span>';
      if(currentPage>1){
        back = currentPage*1-1;
        htmlPage += '<span page="'+back+'" class="prev controlBtn"><</span>';
      }
      var max = Math.ceil(currentPage)+2;
      var min = Math.ceil(currentPage)-2;
      for(var i=1;i<=Math.ceil(totalRow(totalEle,limit));i++){
        if( i >= min && i <= max ){
          if(i==currentPage){
            htmlPage += '<a page="'+i+'" class="active">'+i+'</a>';
          }else{
            htmlPage += '<a page="'+i+'">'+i+'</a>';
          }
        }else{
  
        }
      }
      if(currentPage<totalRow(totalEle,limit)){
        next = currentPage*1+1;
        htmlPage +='<span page="'+next+'" class="next controlBtn">></span>';
      }
      // htmlPage += '<span class="next">></span>';
      // $('.list-kcv_results__pagi').html(htmlPage);
      return htmlPage;
    }
  
    // function scrollwithEle(value, time = 300) {
    // 	jQuery('html, body').animate({
    // 		scrollTop: jQuery(value).offset().top
    // 	}, time);
    // }
  
    function getPage(pagi,arrPagi,totalEle,currentPage,limit){
      // $('.list-kcv_results').addClass('loading');
      // var pagi = $(this).attr('page');
      var arrTemp = arrPagi[pagi-1];
  
      var currentPage = pagi;
      var page = pagi;
      var html = loadPagi(totalEle,currentPage,limit,page);
      $('.list-kcv_results__pagi').html(html);
  
      var html = '<tr class="listing-diamond__header"><td>Image</td><td>HĂ¬nh dáº¡ng<br>(Shape)</td><td>Trá»ng lÆ°á»£ng<br>(Carat)</td><td>Cáº¥p mĂ u<br>(Color)</td><td>Äá»™ tinh khiáº¿t<br>(Clarity)</td><td>Cháº¿ tĂ¡c<br>(Cut)</td><td>Kiá»ƒm Ä‘á»‹nh<br>(Report)</td><td>GiĂ¡ trÆ°á»›c giáº£m (vnÄ‘)</td><td>GiĂ¡ sau giáº£m (vnd)</td><td>Sá»‘ tiá»n Ä‘Æ°á»£c giáº£m (vnÄ‘)</td><td>Chi tiáº¿t</td><td>Mua ngay</td></tr>';
  
      for(var key in arrTemp){
        var report;
        var tr = '';
  
          tr += '<tr>';
          for(var i in arrTemp[key]){
            if(i==0){
              tr += '<td><img src="'+arrTemp[key][i]+'"></td>';
            }else if(i==10){
              report = arrTemp[key][6].toLowerCase();
              // console.log(report);
              tr += '<td><a target="_blank" href="http://trangsuc.doji.vn/kim-cuong-vien-'+report+'/kim-cuong-vien-'+arrTemp[key][i]+'">Chi tiáº¿t</a></td>';
            }else if(i==11){
              tr += '<td><a href="tel:'+arrTemp[key][i]+'"><img src="/images/phone.png">'+arrTemp[key][i]+'</a></td>';
            }else if(i==7 || i==8 || i==9){
              tr += '<td>'+formatNumber(arrTemp[key][i])+'</td>';
            }else{
              tr += '<td>'+arrTemp[key][i]+'</td>';
            }
          }
          tr += '</tr>';
  
        html += tr;
      }
      // $('.list-kcv_results').removeClass('loading');
      return html;
    }
  
    $('.list-kcv_filter__button').on('click',function(){
      $('.list-kcv_filter__option').slideToggle();
    });
  
    if( win_width < 768 ){
      $('.contact-fixed > span').on('click',function(e){
        $(this).toggleClass('active');
      });
    }else{
      $('.contact-fixed > span').hover(
        function() {
          $(this).toggleClass('active');
        }, function() {
          $(this).toggleClass('active');
        }
      );
    }
  
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  
    function intersect_safe(a, b)
    {
      var ai=0, bi=0;
      var result = [];
  
      while( ai < a.length && bi < b.length )
      {
         if      (a[ai] < b[bi] ){ ai++; }
         else if (a[ai] > b[bi] ){ bi++; }
         else /* they're equal */
         {
           result.push(a[ai]);
           ai++;
           bi++;
         }
      }
  
      return result;
    }
    // AOS.init();
  
  });