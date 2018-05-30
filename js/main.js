//
// $(document).ready(function(){
// 	$("#demosMenu").change(function(){
// 	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
// 	});
// });

// Full Page JS

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    sectionsColor: ['#0b2c68', '#FFBA75', '#0b2c68', '#FFBA75', '#0b2c68'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Infographic One', 'Infographic Two', 'Infographic Three', 'Conclusion'],
    autoScrolling: false
  });
});


// Counter in Conclusion

$.fn.jQuerySimpleCounter = function(options) {
  var settings = $.extend({
      start: 0,
      end: 100,
      easing: "swing",
      duration: 10000,
      complete: ""
    },
    options
  );

  var thisElement = $(this);

  $({
    count: settings.start
  }).animate({
    count: settings.end
  }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

$("#number1").jQuerySimpleCounter({
  end: 1268,
  duration: 10000
});
$("#number2").jQuerySimpleCounter({
  end: 856,
  duration: 10000
});
$("#number3").jQuerySimpleCounter({
  end: 412,
  duration: 10000
});
$("#number4").jQuerySimpleCounter({
  end: 10,
  duration: 12000
});

// Intro Background SVG

var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

//Infographic Two - Consumption

//Conclusion - Hour Glass SVG

//Switch for Infographic One

function switchVisible() {
  if (document.getElementById('mapdiv')) {

    if (document.getElementById('mapdiv').style.display == 'none') {
      document.getElementById('mapdiv').style.display = 'block';
      document.getElementById('mapdiv2').style.display = 'none';
    } else {
      document.getElementById('mapdiv').style.display = 'none';
      document.getElementById('mapdiv2').style.display = 'block';
    }
  }

  if (document.getElementById('type-selector')) {

    if (document.getElementById('type-selector').style.display == 'none') {
      document.getElementById('type-selector').style.display = 'block';
      document.getElementById('type-selector1').style.display = 'none';
    } else {
      document.getElementById('type-selector').style.display = 'none';
      document.getElementById('type-selector1').style.display = 'block';
    }
  }

}


//Start Counter

var a = 0;
$(window).scroll(function() {

  var oTop = $('#section4').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
