"use strict";jQuery(function(e){var t=e(".tabs"),s=e(".tabs__controls li"),a=e(".tabs__item");if(s.on("click",function(){e(this).addClass("active").siblings().removeClass("active"),e(this).closest(t).find(a.eq(e(this).index())).addClass("active").siblings().removeClass("active")}),e(".tabs, .form").matchHeight(),e(":input[type='tel']").mask("+380 (99) 999 - 99 - 99"),e("#brands-slider").length&&e("#brands-slider").slick({slidesToShow:5,slidesToScroll:1,variableWidth:!0,nextArrow:e(".brands__btn--next"),prevArrow:e(".brands__btn--prev"),responsive:[{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),e(".price__tabs").length){var i=e(".price__tabs"),n=e(".price__tab"),o=e(".price__item");n.on("click",function(){e(this).addClass("active").siblings().removeClass("active"),e(this).closest(i).find(o.eq(e(this).index())).addClass("active").siblings().removeClass("active")})}!function(e,t,s){var a=e(t),i=[],n=e(".tabs__map").lazyLoadGoogleMaps({key:"AIzaSyBKtLhL6zGRL0Ly6VB78eDXAnN2bUn-pl8",callback:function(t,s){var a=e(t),n=new google.maps.LatLng(a.attr("data-lat"),a.attr("data-lng"));s.setOptions({zoom:14,center:n,zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!0,fullscreenControl:!0});new google.maps.Marker({position:n,map:s});e.data(s,"center",n),i.push(s)}});a.on("resize",n.debounce(1e3,function(){e.each(i,function(){this.setCenter(e.data(this,"center"))})}))}(jQuery,window,document)});
//# sourceMappingURL=application.js.map
