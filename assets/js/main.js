

(function ($) {
  'use strict';


    //Hide Loading Box (Preloader)
    function handlePreloader() {
      if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
      }
    }

  //define all carousels

   if($.fn.owlCarousel){
      var screens = $(".screens");
      var testimonials = $(".testimonials");
      //active testimonial area carousel
      testimonials.owlCarousel({
        items:2,
        loop:true,
        nav:false,
        margin:30,
        autoplay:false,
        dots:true,
        center:false,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:2
          }
        }
      });
      
      // active screen area carousel
      screens.owlCarousel({
         items:4,
          loop:true,
          nav:false,
          margin:30,
          autoplay:false,
          dots:true,
          responsive:{
            0:{
              items:1
            },
            600:{
              items:2
            },
            1000:{
              items:4
            }
          }

      });
    };



  // When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}

  //counter up 
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });  
    
  });




  function video_btns(){
        //calling modal video btns
      $(".a-btn3").modalVideo();

      $("#btn_11_video").modalVideo();
      $(".blog_video").modalVideo();
        //modal video btn active
      $(".video_btn").modalVideo({
      });
  };

  video_btns();

     //mobile menu active
      function mobile_menu(){
        $('#menu_nav').slicknav({
        prependTo:'.mobile_menu'
      });
      };

      mobile_menu();

    
      //fixed nav bar active
      function fixed_nav(){
      window.onscroll = function() {myFunction()};

      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };
    fixed_nav();



      



      
    //jquery load function start
    jQuery(window).on("load", function() {
        //preload active
        handlePreloader();

    });
  

}(jQuery));


//console error fixed counter
  function counters(){
      if ($.fn.counterUp) {
        $('.count').counterUp({
            delay: 100,
            time: 2000
        });
    }; 
  };
  counters();

