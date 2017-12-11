const csvurl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrrzCHLaH_W5TS2RpOrNpcMkjE4qhGDC-XSEWT9Dfz--O3YY50LjXN_d2CI3V67O2ZHfJ17jh7h0LO/pub?gid=2082131865&single=true&output=csv"
const csvlocal = "./assets/list.csv";
Papa.parse( csvlocal, {
  download: true,
  complete: function( results ) {

        var games = [];
        const data = results.data

        for ( var i = 0; i < data.length; i++ ) { 
          if ( data[i][1] != "" ) {
            var game = new Object();
            game.publisher = data[i][0];
            game.name = data[i][1];
            game.rating = data[i][2];
            if ( data[i][3] != "" ) {
              game.instruction  = data[i][3];
            }
            games.push( game );
          }
        }

        var options = {
          valueNames: [ 'name', 'publisher', { name: 'instruction', attr: 'href' } ],
          item: '<li><h5 class="name"></h5>dostawca: <p class="publisher"></p><a href="instruction" class="instruction">Zobacz instrukcję</a></li>'
        };
        
        var gamesList = new List('games-list', options, games);
        gamesList.sort('rating', { order: "desc" });
      }
  } )
  
  var leavesAnimation = bodymovin.loadAnimation( {
    container: document.getElementById( 'headerLeavesAnim' ),
    renderer: 'svg',
    loop: 16,
    autoplay: true,
    prerender: true,
    path: './assets/motion/leaves.json'
  } )

  var logo = document.getElementById("logoAnim");

  var logoAnimation = bodymovin.loadAnimation( {
    container: logo,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: './assets/motion/logo.json'
  } )
  
  logo.addEventListener( "mouseenter", function () {
        logoAnimation.play();
    } );
    
  logo.addEventListener( "mouseleave", function () {
        logoAnimation.stop();
    } );

  logo.addEventListener( "touchstart", function () {
        logoAnimation.play();
    }) ;
    
  logo.addEventListener( "touchend", function () {
        logoAnimation.stop();
    } );

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById( 'map' ), {
        center: {lat: 54.4266729, lng: 18.5794545},
        zoom: 17
      });
    }

    window.ga=function(){ga.q.push( arguments )};ga.q=[];ga.l=+new Date;
    ga( 'create','UA-110575301-1','auto' );ga( 'send','pageview' )