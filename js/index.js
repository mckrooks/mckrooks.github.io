
var myConfig = {
  globals: {
    fontFamily: "Roboto Slab",
    fontWeight: "100"
  },
  backgroundColor: '#fff',
  backgroundImage: 'http://clacdesigns.com/wsl/wave_bg.jpg',
  type: "ring",
  title: {
    text: "<span style='font-size: 30px; padding: 0; margin-left:5px; line-height:20px;'>World Surfing Champions </span><br>By Region<br><hr>",
    offsetX: '400',
    offsetY: '210',
    fontSize: 25,
    padding: "0",
    shadow: true,
    fontColor: "#36558c",

  },
  subtitle: {
    text: "1983-2017",
    offsetX: '405',
    offsetY: '290',
    alpha: '.8',
    fontSize: 30,
    fontColor: "#36558c",
    padding: "0",
 
  },
  plot: {
    layout: 'auto',
    slice: '50%',
    detach: false,
    shadow: true,
    shadowAngle: "90",
    shadowColor: 'white',
    shadowBlur: "0px",
    shadowAlpha: ".4",
    shadowDistance: "2px",
    hoverState: {
      visible: true,
      alpha: ".2",
      backgroundColor: "white",
      shadow: false,

    },
    borderWidth: 1,
    borderColor: 'none',
    valueBox: {
      visible: 1,
      text: '%v',
      alpha: '.6'
    },
    animation: {
      effect: 2,
      sequence: 3
    }
  },
  images: [{
    src: "http://www.clacdesigns.com/wsl/wsl_coin.png",
    width: "100%",
    height: "100%",
    offsetY: 35,
    offsetX: -2
  }],
  tooltip: {
    anchor: 'c',
    x: '41%',
    y: '37%',
    sticky: true,
    backgroundColor: 'none',
    borderWidth:0,
    text: '<span class="fadeInLeft animated ranger" style="margin: -100px 0 0 -230px; ">%data-photo-2</span><span class="coin flipInY animated">%data-photo</span>',
    htmlMode: true,
    mediaRules: [{
      maxWidth: 500,
      minHeight:900,
     
    }]
  },
  plotarea: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: "0 0 0 10",
    margin: "80 -5 10 0"
  },
  scaleR: {
    refAngle: 270
  },
  series: [{
      text: "United States",
      values: [15],
      lineColor: "#fd0002",
      backgroundColor: "#0f2d53",
      dataPhoto: "<img src='http://www.clacdesigns.com/wsl/us_crl2.png' class='red' height='193' width='193'>",
      dataPhoto2: "<div class='years'><img src='http://www.clacdesigns.com/wsl/ks.png' height='150' style='margin-left:35px;'><p class='name'>Kelly Slater</p><ul class='wsl'><li class='wsl_title'>United States</li><li class='wsl'>2010-11 - Kelly Slater</li></li class='wsl'><li class='wsl'>2008 - Kelly Slater</li><li class='wsl'>2001 - C.J. Hobgood</li><li class='wsl'>1994-98 - Kelly Slater</li><li class='wsl'>1992 - Kelly Slater</li><li class='wsl'>1990 - Tom Curren</li><li class='wsl'>1986/87 - Tom Curren</li> <li class='wsl'>1985/86 - Tom Curren</li></ul></div>",
      lineWidth: 1,
        
    }, {
      text: "Australia",
      values: [10],
      lineColor: "#070d6d",
      backgroundColor: "#194c8c",
      dataPhoto: "<img src='http://www.clacdesigns.com/wsl/oz_crl2.png' class='red' height='193' width='193'>",
      dataPhoto2: "<div class='years'><img src='http://www.clacdesigns.com/wsl/mf.png' height='150' style='margin-left:35px;'><p class='name'>Mick Fanning</p><ul class='wsl'><li class='wsl_title'>Australia</li></li class='wsl'><li class='wsl'>2013 - Mick Fanning</li><li class='wsl'>2012 - Joel Parkinson</li><li class='wsl'>2009 - Mick Fanning</li><li class='wsl'>1999 - Mark Occhilupo</li><li class='wsl'>1991 - Damien Hardman</li><li class='wsl'>1988 - Barton Lynch</li><li class='wsl'>1987/88 - Damien Hardman</li><li class='wsl'>1984/85 - Tom Carroll</li><li class='wsl'>19837/84 - Tom Carroll</li></ul></div>",
      lineWidth: 1,

    }, {
      text: "Hawaii",
      values: [7],
      lineColor: "#fa607c",
      backgroundColor: "#2265ba",
      dataPhoto: "<img src='http://www.clacdesigns.com/wsl/haw_crl2.png' height='193' width='193'>",
      dataPhoto2: "<div class='years'><img src='http://www.clacdesigns.com/wsl/jjf2.png' height='150' style='margin-left:35px;'><p class='name'>John John Florence</p><ul class='wsl'><li class='wsl_title'>Hawaii</li><li class='wsl'>2016 - 2017 - John John Florence</li><li class='wsl'>2002 - 2004 - Andy Irons</li><li class='wsl'>2000 - Sunny Garcia</li><li class='wsl'>1993 - Derek Ho</li></ul></div>",
      lineWidth: 1,
      marker: {
        backgroundColor: '#12265ba'
      }
    },

    {
      text: "UK",
      values: [1],
      lineColor: "#028710",
      backgroundColor: "#67c2ff",
      dataPhoto: "<img src='http://www.clacdesigns.com/wsl/uk_crl2.png' height='193' width='193'>",
      dataPhoto2: "<div class='years'><img src='http://www.clacdesigns.com/wsl/potts.png' height='150' style='margin-left:35px;'><p class='name'>Martin Potter</p><ul class='wsl'><li class='wsl_title'>United Kingdom</li><li class='wsl'>1989 - Martin Potter</li></ul></div>",
      lineWidth: 1,
      marker: {
        backgroundColor: '#67c2ff'
      }
    }, {
      text: "Brazil",
      values: [2],
      lineColor: "#010101",
      backgroundColor: "#428deb",
      dataPhoto: "<img src='http://www.clacdesigns.com/wsl/bzl_crl2.png' height='193' width='193'>",
      dataPhoto2: "<div class='years'><img src='http://www.clacdesigns.com/wsl/gabs.png' height='150' style='margin-left:35px;'><p class='name'>Gabriel Medina</p><ul class='wsl'><li class='wsl_title'>Brazil</li><li class='wsl'>2015 - Adriano De Souza</li><li class='wsl'>2014 - Gabriel Medina</li></ul></div>",
      lineWidth: 1,
      marker: {
        backgroundColor: '#428deb'
      }
    }
  ]
};

zingchart.render({
  id: 'PRChart',
  data: {
    graphset: [myConfig]
  },
  height: '500',
  width: '1200',
});