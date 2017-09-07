/* global google */
jQuery(function($) {
  let $tabs = $('.tabs');
  let $tabBtn = $('.tabs__controls li');
  let $tabItem = $('.tabs__item');
  $tabBtn.on('click', function() {
    $(this).addClass('active')
      .siblings().removeClass('active');
    $(this).closest($tabs).find($tabItem.eq($(this).index())).addClass('active')
      .siblings().removeClass('active');
  });

  $('.tabs, .form').matchHeight();

  $(":input[type='tel']").mask('+380 (99) 999 - 99 - 99');

  if ($('#brands-slider').length) {
    $('#brands-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: $('.brands__btn--next'),
      prevArrow: $('.brands__btn--prev'),
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }

  (function($, window, document) {
    var $window = $(window);
    var mapInstances = [];
    var $pluginInstance = $('.tabs__map').lazyLoadGoogleMaps({
      key: 'AIzaSyBKtLhL6zGRL0Ly6VB78eDXAnN2bUn-pl8',
      callback: function(container, map) {
        var $container = $(container);
        var center = new google.maps.LatLng($container.attr('data-lat'), $container.attr('data-lng'));
        map.setOptions({
          zoom: 14,
          center: center,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: true,
          fullscreenControl: true
        });
        var marker = new google.maps.Marker({
          position: center,
          map: map
        });

        $.data(map, 'center', center);
        mapInstances.push(map);
      }
    });

    $window.on('resize', $pluginInstance.debounce(1000, function() {
      $.each(mapInstances, function() {
        this.setCenter($.data(this, 'center'));
      });
    }));
  })(jQuery, window, document);
});
