function getLocation() {
    if (navigator.geolocation) {
        if (navigator.geolocation.watchPosition(initMap)) {
            latlng = '-7.7515169,110.3746357';
            pos = {
                coords: {
                    latitude: parseFloat(latlng.split(',')[0]),
                    longitude: parseFloat(latlng.split(',')[1])
                }
            };
            initMap(pos);
        }

    } else {


        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}


function initMap(pos) {

    // The location of Uluru



    zoom = 15;
    latlng = '-7.7515169,110.3746357';
    lat = parseFloat(latlng.split(',')[0]);
    lng = parseFloat(latlng.split(',')[1]);
    var position = {
        lat: lat,
        lng: lng
    };
    // if(!pos){
    //     pos={
    //         coords:{
    //             latitude:lat,
    //             longitude:lng
    //         }
    //     };
    // The map, centered at Uluru
    mymap = L.map('myid').setView([position.lat, position.lng], zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZXJmYW5iYWd1cyIsImEiOiJjam5nMDg0aWswYTRxM3FwYWl3Y3Y5eGEzIn0._3qZ4t26cmNrH-dUM4MdvQ'
    }).addTo(mymap);
    //$('.leaflet-control-attribution').html('<a id="lookgo" href="https://www.google.com/maps/dir/'+pos.coords.latitude+','+pos.coords.longitude+'/'+position.lat+','+position.lng+'/@'+position.lat+','+position.lng+',16z/data=!4m2!4m1!3e0" style="color:#0062cc !important;"><h6 ><b>view of google</b></h6></a>');
    $('.leaflet-control-attribution').html(
        '<a id="lookgo" href="https://linktr.ee/maps.alazharyogyakarta" style="color:#0062cc !important;"><h6 ><b>view of google maps</b></h6></a>'
    );

    L.marker([position.lat, position.lng]).addTo(mymap).bindPopup('Al Azhar Yogyakarta').openPopup();

}


$(document).ready(function () {
    getLocation();
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#menu-toggle1").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    var slider = $('#slider1');
    var slider2 = $('#slider2');
    var slider3 = $('#slider3');
    var slider4 = $('#slider4');
    var slider5 = $('#slider5');
    var slider6 = $('.slider6');

    slider.owlCarousel({
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        margin: 10,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    slider2.owlCarousel({

        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            760: {
                items: 3,
                loop: true,
                margin: 35,
                autoplay: true,
                autoplayTimeout: 10000,
            },

            300: {
                items: 1,
                rows: true,
                rowsCount: 3,
                loop: true,
                margin: 35,
                autoplay: true,
                autoplayTimeout: 2000,

            },
        }
    });

    slider3.owlCarousel({
        margin: 35,
        animateOut: 'fadeOut',
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left  m-5" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right  m-5" aria-hidden="true"></i>'
        ],
        responsive: {
            760: {
                items: 3,
            },

            300: {
                items: 1,
            },
        }
    });

    slider4.owlCarousel({

        margin: 35,
        animateOut: 'fadeOut',
        responsiveClass: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true" style="position: absolute;top: -30px;left: -40px;background-color: beige;opacity: 0.6;"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true" style="position: absolute;top: -30px;right: -40px;background-color: beige;opacity: 0.6;"></i>'
        ],

        responsive: {
            760: {
                items: 4,
            },

            300: {
                items: 1,
            },
        }
    });

    slider5.owlCarousel({

        margin: 35,
        animateOut: 'fadeOut',
        responsiveClass: true,
        loop: true,

        responsive: {
            760: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
            },

            300: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
            },
        }
    });
    slider6.owlCarousel({

        margin: 35,
        animateOut: 'fadeOut',
        responsiveClass: true,
        loop: true,

        responsive: {
            760: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
            },

            300: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
            },
        }
    });
});
