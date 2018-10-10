/* global $, document */
$(document).ready(function () {
    'use strict';

    function initialize() {
        $(".google-map").each(function () {

            //Taking data attribute from map wrapper
            var mapLat = parseFloat($(this).data('lat'));
            var mapLng = parseFloat($(this).data('lng'));
            var mapZoom = parseInt($(this).data('zoom'));

            //Processing wrapper data attribute to coordinate
            var mapOptions = {
                center: {
                    lat: mapLat,
                    lng: mapLng
                },
                zoom: mapZoom,
                scrollwheel: false,
                styles: [{
                    "stylers": [{
                        "saturation": 0
                    }, {
                        "gamma": 1.15
                    }, {
                        "lightness": 1
                    }]
                }]
            };

            //Initiating map
            var map = new google.maps.Map(this, mapOptions);

            //Map Marker
            var marker = new google.maps.Marker({
                position: {
                    lat: 40.713355,
                    lng: -74.005535
                },
                map: map,
                icon: 'images/map-marker.png'
            });
        });

        $(".map-widget").each(function (index) {

            //Taking data attribute from map wrapper
            var mapLat = parseFloat($(this).data('lat'));
            var mapLng = parseFloat($(this).data('lng'));
            var mapZoom = parseInt($(this).data('zoom'));

            //Processing wrapper data attribute to coordinate
            var mapOptions = {
                center: {
                    lat: mapLat,
                    lng: mapLng
                },
                zoom: mapZoom,
                scrollwheel: false,
                styles: [{
                    "stylers": [{
                        "saturation": 0
                    }, {
                        "gamma": 1.15
                    }, {
                        "lightness": 1
                    }]
                }]
            };

            //Initiating map
            var map = new google.maps.Map(this, mapOptions);

            //Map Marker
            var marker = new google.maps.Marker({
                position: {
                    lat: 40.713355,
                    lng: -74.005535
                },
                map: map,
                icon: 'images/map-marker.png'
            });
        });

        $(".listing-popup-map").each(function (index) {

            //Taking data attribute from map wrapper
            var mapLat = parseFloat($(this).data('lat'));
            var mapLng = parseFloat($(this).data('lng'));
            var mapZoom = parseInt($(this).data('zoom'));

            //Processing wrapper data attribute to coordinate
            var mapOptions = {
                center: {
                    lat: mapLat,
                    lng: mapLng
                },
                zoom: mapZoom,
                scrollwheel: false,
                styles: [{
                    "stylers": [{
                        "saturation": 0
                    }, {
                        "gamma": 1.15
                    }, {
                        "lightness": 1
                    }]
                }]
            };

            //Initiating map
            var map = new google.maps.Map(this, mapOptions);

            //Map Marker
            var marker = new google.maps.Marker({
                position: {
                    lat: 40.713355,
                    lng: -74.005535
                },
                map: map,
                icon: 'images/map-marker.png'
            });
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    if ($('#location').length > 0) {
        function addCampaignMap() {
            var myLatLng = new google.maps.LatLng(40.713355, -74.005535);
            var map = new google.maps.Map(document.getElementById("location"), {
                zoom: 14,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Rajya Sabha',
                icon: ' images/marker/13.png'
            });
        }
        addCampaignMap();
    }


    if ($('#campaign-location').length > 0) {
        function addCampaignMap() {
            var myLatLng = new google.maps.LatLng(40.713355, -74.005535);
            var map = new google.maps.Map(document.getElementById("campaign-location"), {
                zoom: 14,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'New York',
                icon: ' images/marker/13.png'
            });
        }
        addCampaignMap();
    }


    /*-------------------------------------
    popup google map
    -------------------------------------*/
    function popup_listing_map() {
        var map;
        function initialize() {
            $('.popup-map-canvas').each(function () {
                //Taking data attribute from map wrapper
                var mapLat = parseFloat($(this).data('lat'));
                var mapLng = parseFloat($(this).data('lng'));
                var mapZoom = parseInt($(this).data('zoom'));
                
                var mapProp = {
                    center: {
                        lat: mapLat,
                        lng: mapLng
                    },
                    zoom: mapZoom,
                    draggable: false,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(this, mapProp);

                //Map Marker
                var marker = new google.maps.Marker({
                    position: {
                        lat: mapLat,
                        lng: mapLng
                    },
                    map: map,
                    icon: 'images/map-marker.png'
                });

                google.maps.event.addListener(marker, 'click', function () {

                    infowindow.setContent(contentString);
                    infowindow.open(map, marker);

                });
            });
        };


        initialize();

        $(window).on('resize', function () {
            resizingMap()
        });

        $('.modal-with-map').each(function () {
            $(this).on('show.bs.modal', function () {
                resizeMap();
            });
        });

        function resizeMap() {
            if (typeof map == "undefined") return;
            setTimeout(function () {
                resizingMap();
            }, 400);
        }

        function resizingMap() {
            if (typeof map == "undefined") return;
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        }
    }
    popup_listing_map();
});
