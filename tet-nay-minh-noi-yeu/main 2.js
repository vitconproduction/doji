$(function() {

    $(window).on('load', function() {
  
      var day = '2020/12/11 08:30:00';
      var datetimeStart = '2021/01/15 08:30:00';
      var datetimeEnd = '2021/02/09 20:00:00';
      if (Date.now() < Date.parse(datetimeStart)) {
        day = '2021/01/15 08:30:00';
      } else if (Date.now() > Date.parse(datetimeEnd)) {
        $('.main-example').html('<div style="text-align: center;" class="text-clock">Sự kiện đã kết thúc!</div>');
        return false;
      } else {
        day = '2021/02/09 20:00:00';
        // $('.main-example').find('.text-clock').each(function(index){
        //   if( index == 0 ){
        //     // $(this).html('Chương trình cĂ²n');
        //     $(this).html('');
        //   }
        //   if( index == 1 ){
        //     $(this).html('');
        //   }
        // });
      }
  
      var labels = ['Ngày', 'Giờ', 'Phút', 'Giây'],
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
  
    $('.the-le-btn').on('click', function() {
      $('#the-le').addClass('avai');
    });
  
    $('#the-le').find('.close').on('click', function() {
      $('#the-le').removeClass('avai');
    });
  
    $(window).bind('load',function(){
      $('#lp-video').find('.lp-video-inner').find('iframe').css({
        'height': $('#lp-video').find('.lp-video-inner').find('iframe').width() * 1080 / 1920
      });
    });
  
  });