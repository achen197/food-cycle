//export map
// svg path for target icon
var targetSVG =
  "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG =
  "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";


//Export Data Sets
var dataSets = [
//Total F and B
[{
id: "US",
value: "2347"
},
{
id: "JP",
value: "4363"
},
{
id: "CN",
value: "3150"
},
{
id: "KR",
value: "2157"
},
{
id: "NZ",
value: "1423"
}],

//Meat
[{
id: "US",
value: "1416"
},
{
id: "JP",
value: "1979"
},
{
id: "CN",
value: "892"
},
{
id: "KR",
value: "791"
},
{
id: "NZ",
value: "71"
}],

//Fruit and Vegetables

[{
id: "US",
value: "60"
},
{
id: "JP",
value: "122"
},
{
id: "CN",
value: "61"
},
{
id: "KR",
value: "18"
},
{
id: "NZ",
value: "125"
}],

//Grains

[{
id: "US",
value: "1"
},
{
id: "JP",
value: "1080"
},
{
id: "CN",
value: "1173"
},
{
id: "KR",
value: "570"
},
{
id: "NZ",
value: "201"
}],

//Oilseeds

[{
id: "US",
value: "75"
},
{
id: "JP",
value: "122"
},
{
id: "CN",
value: "384"
},
{
id: "KR",
value: "72"
},
{
id: "NZ",
value: "75"
}],

//Other
[{
id: "US",
value: "88"
},
{
id: "JP",
value: "419"
},
{
id: "CN",
value: "38"
},
{
id: "KR",
value: "517"
},
{
id: "NZ",
value: "507"
}],

//Dairy

[{
id: "US",
value: "47"
},
{
id: "JP",
value: "489"
},
{
id: "CN",
value: "209"
},
{
id: "KR",
value: "77"
},
{
id: "NZ",
value: "63"
}],

//Flour

[{
id: "US",
value: "168"
},
{
id: "JP",
value: "62"
},
{
id: "CN",
value: "145"
},
{
id: "KR",
value: "22"
},
{
id: "NZ",
value: "240"
}],

//Beverage

[{
id: "US",
value: "491"
},
{
id: "JP",
value: "91"
},
{
id: "CN",
value: "246"
},
{
id: "KR",
value: "90"
},
{
id: "NZ",
value: "143"
}],

];

var colorSets = [
//Total
  [{
    value: "orange"
  }],


//meats

[{
  value: "red"
}],

]


var map = AmCharts.makeChart("mapdiv", {
  type: "map",

  dataProvider: {
    map: "worldLow",
    zoomLevel: 1,
    zoomLongitude: 0.1341,
    zoomLatitude: 49.1712,
    areas: dataSets[0],

    lines: [{
      latitudes: [-25.2744, -40.9006],
      longitudes: [133.7751, 174.8860]
    }, {
      latitudes: [-25.2744, 35.9078],
      longitudes: [133.7751, 127.7669]
    }, {
      latitudes: [-25.2744, 36.2048],
      longitudes: [133.7751, 138.2529]
    }, {
      latitudes: [-25.2744, 37.0902],
      longitudes: [133.7751, -95.7129]
    }, {
      latitudes: [-25.2744, 39.913818],
      longitudes: [133.7751, 116.363625]
    }],
    images: [{
      id: "australia",
      svgPath: targetSVG,
      title: "Australia",
      latitude: -25.2744,
      longitude: 133.7751,
      scale: 1
    }, {
      svgPath: targetSVG,
      title: "New Zealand",
      latitude: -40.9006,
      longitude: 174.8860,
      scale: 0.5
    }, {
      svgPath: targetSVG,
      title: "Korea",
      latitude: 35.9078,
      longitude: 127.7669,
      scale: 0.5
    }, {
      svgPath: targetSVG,
      title: "Japan",
      latitude: 36.2048,
      longitude: 138.2529,
      scale: 0.5
    }, {
      svgPath: targetSVG,
      title: "United States",
      latitude: 37.0902,
      longitude: -95.7129,
      scale: 0.5
    }, {
      svgPath: targetSVG,
      title: "China",
      latitude: 39.913818,
      longitude: 116.363625,
      scale: 0.5
    }]
  },

  areasSettings: {
    unlistedAreasColor: "#ffd8b2",
    autoZoom: true
  },
  smallMap: {},

  imagesSettings: {
    color: "blue",
    rollOverColor: "orange",
    selectedColor: "#000000"
  },

  linesSettings: {
    arc: -0.6, // this makes lines curved. Use value from -1 to 1
    arrow: "middle",
    color: 'orange',
    alpha: 0.9,
    arrowAlpha: 1,
    arrowSize: 6,
    dashLength: 2
  },
  valueLegend: {
    width: 300,
    minValue: "0",
    maxValue: "5000",
    showAsGradient: true,
    left: 40,
    color: '#000000',
    switchColor: 'blue',

  },

  backgroundZoomsToTop: true,
  linesAboveImages: true
});

function setDataset(index) {
  map.dataProvider.areas = dataSets[Number(index)];
  map.validateData();
}


//-----------------
//Import Map

var ctx = document.getElementById('donut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    radius: 25,

    allLabels: [
      {
        size: 25
      }
    ],

    // The data for our dataset
    data: {
        datasets: [
          {
              label: "Population",
              borderColor: 'white',
              borderWidth: 5,
              data: [4473000, 7191500, 354900, 2270300, 5496400, 505400, 1633900],
              backgroundColor: ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215"]
          },
          {
            label: "Waste Per Household",
            borderColor: 'white',
            borderWidth: 5,
            data: [678, 643, 641, 619, 560, 545, 517],
            backgroundColor: ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215"]
        },
        {
            label: "Waste Per Person",
            borderColor: 'white',
            borderWidth: 5,
            data: [262, 250, 249, 238, 214, 226, 213],
            backgroundColor: ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215"]
        }

      ],
      labels: [
          'QLD',
          'NSW',
          'ACT',
          'WA',
          'VIC',
          'TAS',
          'SA'
      ]
    },

    // Configuration options go here
    options: {
      responsive: true,
      legend: {
        position: 'right',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
});
