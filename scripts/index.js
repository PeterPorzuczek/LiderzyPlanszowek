  var leavesAnimation = bodymovin.loadAnimation({
    container: document.getElementById('headerLeavesAnim'),
    renderer: 'svg',
    loop: 13,
    autoplay: true,
    prerender: true,
    path: './assets/motion/leaves.json'
  })

  var logo = document.getElementById("logoAnim");

  var logoAnimation = bodymovin.loadAnimation({
    container: logo,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: './assets/motion/logo.json'
  })
  
  logo.addEventListener("mouseenter", function () {
        logoAnimation.play();
    });
    
  logo.addEventListener("mouseleave", function () {
        logoAnimation.stop();
    });

  logo.addEventListener("touchstart", function () {
        logoAnimation.play();
    });
    
  logo.addEventListener("touchend", function () {
        logoAnimation.stop();
    });

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.4266729, lng: 18.5794545},
        zoom: 17
      });
    }

    window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
    ga('create','UA-110575301-1','auto');ga('send','pageview')