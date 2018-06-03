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
    sectionsColor: ['#0b2c68', '#002048', '#002048', '#002048', '#0b2c68'],
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


//Infographic Two - Consumption
var ctx = document.getElementById('radar');
var chart = new Chart(ctx, {
	type: 'radar',
    data: {
			datasets: [
				{
					label: "Minimum Energy Requirement",
					data: [2150, 2150, 2150, 2110, 2100, 1940, 2150, 1950, 1900, 1910, 1970, 1900,],
					pointHoverRadius: 9,
					pointRadius: 6,
					radius: 6,
					pointStyle: 'circle',
					backgroundColor: 'rgba(255, 187, 0, 0.6)',
					borderColor: 'rgba(255, 187, 0,  1)',
					borderWidth: 2,
					pointBackgroundColor: 'rgba(255, 187, 0, 1)',
				},
				{
					label: "Average Energy Requirement",
					data: [2510, 2510, 2510, 2450, 2440, 2300, 2510, 2260, 2210, 2220, 2300, 2220, ],
					pointHoverRadius: 9,
					pointRadius: 6,
					radius: 6,
					pointStyle: 'circle',
					backgroundColor: 'rgba(134, 172, 65, 0.6)',
					borderColor: 'rgba(134, 172, 65, 1)',
					borderWidth: 2,
					pointBackgroundColor: 'rgba(134, 172, 65, 1)',
				},
				{
						label: "Average Food Intake",
						data: [ 3673, 3415, 3257, 3095, 2776, 2753, 2709, 2671, 2237, 2119, 2090, 2049, ],
						pointHoverRadius: 9,
						pointRadius: 6,
						radius: 6,
						pointStyle: 'circle',
						backgroundColor: 'rgba(251, 101, 66, 0.6)',
						borderColor: 'rgba(251, 101, 66, 1)',
						borderWidth: 2,
						pointBackgroundColor: 'rgba(251, 101, 66, 1)',
					},

			],
			labels: [
				"UNITED STATES",
        "UNITED KINGDOM",
        "AUSTRALIA",
        "CHINA",
				"THAILAND",
				"INDONESIA",
        "MOLDOVA",
				"PERU",
        "BOLIVIA",
        "ETHIOPIA",
				"HAITI",
				"CENTRAL AFRICAN REPUBLIC",

			],
		},
		options: {
			elements: {
				line: {tension: 0.2, stepped: false,}
			},
			responsive: false,
			legend: {
				position: 'bottom',
				reverse: true,
					labels: {
							fontColor: 'white',
							fontFamily: 'Open sans',
							fontSize: 12,
							boxWidth: 10,
							usePointStyle: true,
							pointStyle: 20,
							padding: 20,
					},

			},
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						let label = data.datasets[tooltipItem.datasetIndex].label;
						let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return label + ': ' + value + ' kcal/person/day';},
					},
				backgroundColor: 'rgba(255,255,255,0.9)',
				titleFontColor: 'rgb(12, 39, 93)',
				titleFontFamily: 'Open sans',
				titleSpacing: 5,
				titleFontSize: 16,
				bodyFontFamily: 'Open sans',
				bodyFontSize: 14,
				bodyFontColor: 'rgb(12, 39, 93)',
				bodySpacing: 6,
				xPadding: 10,
				yPadding: 10,
				displayColors: false,
			},
			scale: {
				//Changes the lables on the chart
				pointLabels: {fontSize: 16, fontColor: 'white', fontFamily: 'Oswald',},
				gridLines: { display: true, lineWidth: 3, color: 'rgba(255, 255, 255, 0.1)'},
				ticks: {
            fontColor: 'rgba(255, 255, 255, 0.6)',
            fontSize: 14,
            fontFamily: 'Open sans',
            showLabelBackdrop: false,
            stepSize: 500,
        }
			},
		}
});

//Infographic Three - Waste
//Calculator
$(document).ready(function() {
  $(".QLDLine").hide();
  $(".QLDSolid").hide();
  $(".NSWLine").hide();
  $(".NSWSolid").hide();
  $(".ACTLine").hide();
  $(".ACTSolid").hide();
  $(".VICLine").hide();
  $(".VICSolid").hide();
  $(".SALine").hide();
  $(".SASolid").hide();
  $(".WALine").hide();
  $(".WASolid").hide();
  $(".TASLine").hide();
  $(".TASSolid").hide();

  $( ".QLD" ).hover(function() {
      $( "#selectedstate" ).text( "Queensland" );
      $( "#individual" ).text( "$262" );
      $( "#household" ).text( "$678" );
      $( "#state" ).text( "$1 171 926 000" );
      $(".QLDLine").show();
      $(".QLDSolid").show();
  });
  $( ".NSW" ).hover(function() {
      $( "#selectedstate" ).text( "New South Wales" );
      $( "#individual" ).text( "$250" );
      $( "#household" ).text( "$643" );
      $( "#state" ).text( "$1 197 875 000" );
      $(".NSWLine").show();
      $(".NSWSolid").show();
  });
  $( ".ACT" ).hover(function() {
      $( "#selectedstate" ).text( "Australian Capital Territory" );
      $( "#individual" ).text( "$249" );
      $( "#household" ).text( "$641" );
      $( "#state" ).text( "$88 370 100" );
      $(".ACTLine").show();
      $(".ACTSolid").show();
  });
  $( ".WA" ).hover(function() {
      $( "#selectedstate" ).text( "Western Australia" );
      $( "#individual" ).text( "$238" );
      $( "#household" ).text( "$619" );
      $( "#state" ).text( "$540 331 400" );
      $(".WALine").show();
      $(".WASolid").show();
  });
  $( ".VIC" ).hover(function() {
      $( "#selectedstate" ).text( "Victoria" );
      $( "#individual" ).text( "$214" );
      $( "#household" ).text( "$560" );
      $( "#state" ).text( "$1 176 229 600" );
      $(".VICLine").show();
      $(".VICSolid").show();
  });
  $( ".TAS" ).hover(function() {
      $( "#selectedstate" ).text( "Tasmania" );
      $( "#individual" ).text( "$226" );
      $( "#household" ).text( "$545" );
      $( "#state" ).text( "$114 220 400" );
      $(".TASLine").show();
      $(".TASSolid").show();
  });
  $( ".SA" ).hover(function() {
      $( "#selectedstate" ).text( "South Australia" );
      $( "#individual" ).text( "$213" );
      $( "#household" ).text( "$517" );
      $( "#state" ).text( "$348 020 700" );
      $(".SALine").show();
      $(".SASolid").show();
  });
  $( ".QLD" ).mouseout(australiaInfo);
  $( ".NSW" ).mouseout(australiaInfo);
  $( ".NT" ).mouseout(australiaInfo);
  $( ".VIC" ).mouseout(australiaInfo);
  $( ".TAS" ).mouseout(australiaInfo);
  $( ".WA" ).mouseout(australiaInfo);
  $( ".SA" ).mouseout(australiaInfo);
  $( ".ACT" ).mouseout(australiaInfo);

});

function australiaInfo() {
      $( "#selectedstate" ).text( "Australia (total)" );
      $( "#individual" ).text( "$239" );
      $( "#household" ).text( "$616" );
      $( "#state" ).text( "$5 295 140 600" );
      $(".QLDLine").hide();
      $(".QLDSolid").hide();
      $(".NSWLine").hide();
      $(".NSWSolid").hide();
      $(".ACTLine").hide();
      $(".ACTSolid").hide();
      $(".VICLine").hide();
      $(".VICSolid").hide();
      $(".SALine").hide();
      $(".SASolid").hide();
      $(".WALine").hide();
      $(".WASolid").hide();
      $(".TASLine").hide();
      $(".TASSolid").hide();

}

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


//World spinning

var land = document.querySelectorAll('.land')
var cloud = document.querySelectorAll('.cloud')



for(var i = 0; i < land.length; i++) {
	land[i].style.transform = `translate(${Math.round(Math.random() * 150)}px, ${Math.round(Math.random() * 150)}px)`;
	land[i].style.width = `${Math.round(Math.random() * 50) + 50}px`;
}

for(var i = 0; i < cloud.length; i++) {
	cloud[i].style.transform = `translate(${Math.round(Math.random() * 150)}px, ${Math.round(Math.random() * 150)}px)`;
	cloud[i].style.width = `${Math.round(Math.random() * 25) + 25}px`;
}


requestAnimationFrame(animate);

function animate() {
	for(var i = 0; i < land.length; i++) {
		move(land[i]);
		move(cloud[i]);
	}

	requestAnimationFrame(animate)
}

function move(el) {
	var s = el.style.transform.split('(')[1].split(',');
		var x = s[0].split('px')[0];
		var y = s[1];
		var w = el.style.width.split('px')[0]

		var nx = parseInt(x) - 1;

		if(nx + parseInt(w) < -20) {
			nx = 170;
		}
		el.style.transform = `translate(${nx}px, ${y}`;
}

//waste bars
var app = {
	init: function(){
		this.cacheDOM();
		this.handleCharts();
	},
	cacheDOM: function(){
		this.$chart = $(".bar-chart");
	},
	cssSelectors: {
		chartBar: "bar-chart--inner"
	},
	handleCharts: function(){
		/*
			iterate through charts and grab total value
			then apply that to the width of the inner bar
		*/
		$.each(this.$chart, function(){
			var $this = $(this),
					total = $this.data("total"),
					$targetBar = $this.find("."+app.cssSelectors.chartBar);
					$targetBar.css("width","0%"); // zero out for animation
					setTimeout(function(){
						$targetBar.css("width",total+"%");
					},400);
		});
	}
}

app.init();

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
