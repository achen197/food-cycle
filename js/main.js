
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
		navigationTooltips: ['Introduction', 'Infographic One', 'Infographic Two', 'Infographic Three', 'Conclusion']
	});
});


// Counter in Conclusion

$.fn.jQuerySimpleCounter = function(options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: ""
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    }
  );
};

$("#number1").jQuerySimpleCounter({ end: 1268, duration: 10000 });
$("#number2").jQuerySimpleCounter({ end: 856, duration: 10000 });
$("#number3").jQuerySimpleCounter({ end: 412, duration: 10000 });
$("#number4").jQuerySimpleCounter({ end: 10, duration: 12000 });

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
                }
                else {
                    document.getElementById('mapdiv').style.display = 'none';
                    document.getElementById('mapdiv2').style.display = 'block';
                }
            }

}

function switchBtn(){
var button = document.getElementById('switch-btn');

	document.getElementById('total').setAttribute( "onClick", "setAreaset(0)" );
	document.getElementById('meat').setAttribute( "onClick", "setAreaset(1)" );
	document.getElementById('vegetables').setAttribute( "onClick", "setAreaset(2)" );
}

//aos
    AOS.init();