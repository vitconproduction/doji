$(function() {

    $(window).on('load', function() {
  
      var day = '2022/07/18 08:30:00';
  
      var datetimeStart = '2022/07/18 08:30:00';
      var datetimeEnd = '2022/07/31 20:00:00';
  
      if (Date.now() < Date.parse(datetimeStart)) {
        day = '2022/07/18 08:30:00';
      } else if (Date.now() > Date.parse(datetimeEnd)) {
        $('.main-example').html('<div style="text-align: center;" class="text-clock">Chương trình Ä‘Ă£ káº¿t thĂºc!</div>');
        return false;
      } else {
        day = '2022/07/31 20:00:00';
        $('.main-example').find('.text-clock').each(function(index) {
          if (index == 0) {
            $(this).html('Chương trình cĂ²n');
          }
          if (index == 1) {
            $(this).html('');
          }
        });
      }
  
      var labels = ['NGĂ€Y', 'GIá»œ', 'PHĂT', 'GIĂ‚Y'],
        // nextYear = (new Date().getFullYear() + 1) + '/01/01',
        nextYear = day,
        template = _.template($('#main-example-template').html()),
        currDate = '00:00:00:00:00',
        nextDate = '00:00:00:00:00',
        parser = /([0-9]{2})/gi,
        $example = $('#main-example');
      // Parse countdown string to an object
      function strfobj(str) {
        var parsed = str.match(parser),
          obj = {};
        labels.forEach(function(label, i) {
          obj[label] = parsed[i]
        });
        return obj;
      }
      // Return the time components that diffs
      function diff(obj1, obj2) {
        var diff = [];
        labels.forEach(function(key) {
          if (obj1[key] !== obj2[key]) {
            diff.push(key);
          }
        });
        return diff;
      }
      // Build the layout
      var initData = strfobj(currDate);
      labels.forEach(function(label, i) {
        $example.append(template({
          curr: initData[label],
          next: initData[label],
          label: label
        }));
      });
      // Starts the countdown
      $example.countdown(nextYear, function(event) {
        var newDate = event.strftime('%D:%H:%M:%S'),
          data;
        if (newDate !== nextDate) {
          currDate = nextDate;
          nextDate = newDate;
          // Setup the data
          data = {
            'curr': strfobj(currDate),
            'next': strfobj(nextDate)
          };
          // Apply the new values to each node that changed
          diff(data.curr, data.next).forEach(function(label) {
            var selector = '.%s'.replace(/%s/, label),
              $node = $example.find(selector);
            // Update the node
            $node.removeClass('flip');
            $node.find('.curr').text(data.curr[label]);
            $node.find('.next').text(data.next[label]);
            // Wait for a repaint to then flip
            _.delay(function($node) {
              $node.addClass('flip');
            }, 50, $node);
          });
        }
      });
  
    });
  
    // function load_slide_product(){
    //   $('#lp-listing').not('.slick-initialized').slick({
    //     swipeToSlide: false,
    //     swipe: true,
    //     infinite: true,
    //     speed: 2000,
    //     slidesToShow: 5,
    //     rows: 2,
    //     slidesToScroll: 5,
    //     arrows: false,
    //     dots: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     centerMode: false,
    //     vertical: false, //* trÆ°á»£t dá»c *//
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           rows: 2,
    //           slidesToScroll: 3,
    //         }
    //       },
    //       {
    //         breakpoint: 820,
    //         settings: {
    //           slidesToShow: 2,
    //           rows: 2,
    //           slidesToScroll: 2,
    //         }
    //       },
    //     ]
    //   });
    // }
  
  
  
    var list_tskc_8h8a = [60671,59433,60673,60668];
    var list_tskc_fashion = [48056,48046,48052,48020];
    var list_dm_fashion = [59985,59990,60010,60011,60024,60025,60029,60045,61076,61079,61080];
    var list_dh_ellisaab = [60961,60963,60966,60968,60973,60974,60976,60979,60981,60987,60989];
  
    // https://trangsuc.doji.vn/api/ProductAPI/danh-muc/22 da mau fashion
    // https://trangsuc.doji.vn/api/ProductAPI/danh-muc/1228 dong ho elli saab
    // https://trangsuc.doji.vn/api/ProductAPI/danh-muc/24 tskc 8h&8a
    // https://trangsuc.doji.vn/api/ProductAPI/danh-muc/20 tskc fashion
  
    $.ajax({
      url: 'https://trangsuc.doji.vn/api/ProductAPI/danh-muc/24',
      dataType: 'json',
      success: function( data ) {
        var temp = [];
        for( key in data ){
          temp[data[key].id] = data[key];
        }
  
        var html = '';
        for( i in list_tskc_8h8a ){
          var k = list_tskc_8h8a[i];
          // console.log( temp[k] );
  
          var priceOld = temp[k].priceOld;
          var price = priceOld*0.85;
  
          html += '<div class="item">'+
            '<span class="lp-promotion">-15%</span>'+
            '<a href="https://trangsuc.doji.vn/'+temp[k].moduleNameAscii+'/'+temp[k].nameAscii+'"><img src="https://trangsuc.doji.vn/'+temp[k].urlPicture+'" alt=""></a>'+
            '<div class="lp-product-detail">'+
              '<a href="https://trangsuc.doji.vn/'+temp[k].moduleNameAscii+'/'+temp[k].nameAscii+'">Chi tiáº¿t <span></span></a>'+
            '</div>'+
            '<div class="lp-product-name">'+
              '<a href="https://trangsuc.doji.vn/'+temp[k].moduleNameAscii+'/'+temp[k].nameAscii+'">'+temp[k].name+' '+temp[k].productCode+'</a>'+
            '</div>'+
            '<div class="lp-price">'+
              '<span class="origin">'+numberWithCommas(price)+'Ä‘</span>'+
              '<span class="discount">'+numberWithCommas(priceOld)+'Ä‘</span>'+
            '</div>'+
          '</div>';
        }
  
        $('#slider-tskc').html(html).not('.slick-initialized').slick({
          swipeToSlide: false,
          swipe: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 3,
          rows: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: false,
          vertical: false, //* trÆ°á»£t dá»c *//
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                rows: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                rows: 1,
                slidesToScroll: 1,
              }
            },
          ]
        });
      }
    });
  
    $.ajax({
      url: 'https://trangsuc.doji.vn/api/ProductAPI/danh-muc/22',
      dataType: 'json',
      success: function( data ) {
        var temp = [];
        for( key in data ){
          temp[data[key].id] = data[key];
        }
  
        var html = '';
        for( i in list_dm_fashion ){
          var k = list_dm_fashion[i];
          // console.log( temp[k] );
  
          var priceOld = temp[k].priceOld;
          var price = priceOld*0.85;
  
          html += '<div class="item">'+
            '<a href="https://trangsuc.doji.vn/'+temp[k].moduleNameAscii+'/'+temp[k].nameAscii+'"><img src="https://trangsuc.doji.vn/Upload/landing-page/sntd2022/images/tskc-fashion/'+temp[k].id+'.jpg" alt=""></a>'+
          '</div>';
        }
  
        $('#slider-tsdm-fashion').html(html).not('.slick-initialized').slick({
          swipeToSlide: false,
          swipe: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 4,
          rows: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: false,
          vertical: false, //* trÆ°á»£t dá»c *//
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                rows: 1,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                rows: 1,
                slidesToScroll: 2,
              }
            },
          ]
        });
      }
    });
  
    $.ajax({
      url: 'https://trangsuc.doji.vn/api/ProductAPI/danh-muc/1228',
      dataType: 'json',
      success: function( data ) {
        var temp = [];
        for( key in data ){
          temp[data[key].id] = data[key];
        }
  
        var html = '';
        for( i in list_dh_ellisaab ){
          var k = list_dh_ellisaab[i];
          // console.log( temp[k] );
  
          var priceOld = temp[k].priceOld;
          var price = priceOld*0.85;
  
          html += '<div class="item">'+
            '<a href="https://trangsuc.doji.vn/'+temp[k].moduleNameAscii+'/'+temp[k].nameAscii+'"><img src="https://trangsuc.doji.vn/Upload/landing-page/sntd2022/images/dong-ho/'+temp[k].id+'.jpg" alt=""></a>'+
          '</div>';
        }
  
        $('#slider-dong-ho').html(html).not('.slick-initialized').slick({
          swipeToSlide: false,
          swipe: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 4,
          rows: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: false,
          vertical: false, //* trÆ°á»£t dá»c *//
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                rows: 1,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                rows: 1,
                slidesToScroll: 2,
              }
            },
          ]
        });
      }
    });
  
    var win_width = $(window).width();
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p_lp_sale = url.searchParams.get("lp_sale");
  
    if ($('#' + p_lp_sale).length > 0 && p_lp_sale == 'lpsale') {
      var lp_sale_height = $('#' + p_lp_sale).offset().top;
  
      $('html, body').animate({
        scrollTop: lp_sale_height - 115
      }, 700);
    }
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 250,
      mobile: true,
      live: true
    })
    wow.init();
  
  });