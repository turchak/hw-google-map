function initMap() {
  let kyiv = {
    lat: 50.4139522,
    lng: 30.5285421
  };
  let image = 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png';

  let map = new google.maps.Map(document.querySelector('.map'), {
    center: kyiv,
    zoom: 5,
    styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#444444"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
  });

  let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let locations = [{
      lat: 50.4139522,
      lng: 30.5285421
    },
    {
      lat: 49.820317,
      lng: 24.0331466
    },
    {
      lat: 46.4300791,
      lng: 30.7131529
    },
    {
      lat: 49.9546669,
      lng: 36.2963857
    },
    {
      lat: 49.5576351,
      lng: 34.5754056
    },
    {
      lat: 48.9173925,
      lng: 24.7260535
    },
    {
      lat: 49.2246238,
      lng: 28.4998444
    },
    {
      lat: 46.9887955,
      lng: 37.5482491
    }
  ]
  let markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      icon: image,
      label: labels[i % labels.length]
    });
  });

  let markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}
let button = document.querySelectorAll('.button');
button.forEach((e, index) => {
  e.addEventListener('click', function() {
    button.forEach((i,j) => {
      i.classList.remove('active');
      this.classList.add('active');
    });
  });
  e.addEventListener('click', function() {
    let image = 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png';
    let locations = [{
        lat: 50.451033,
        lng: 30.522360
      },
      {
        lat: 49.841756,
        lng: 24.030130
      },
      {
        lat: 46.485431,
        lng: 30.723113
      },
      {
        lat: 49.998730,
        lng: 36.228260
      },
      {
        lat: 49.588387,
        lng: 34.552018
      },
      {
        lat: 48.926403,
        lng: 24.710388
      },
      {
        lat: 49.235148,
        lng: 28.470307
      },
      {
        lat: 47.105129,
        lng: 37.542114
      }
    ]
    if (index == 8) {
      return initMap();
    }
    let map = new google.maps.Map(document.querySelector('.map'), {
      center: locations[index],
      zoom: 11,
      styles: [{
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "color": "#46bcec"
            },
            {
              "visibility": "on"
            }
          ]
        }
      ]
    });
    let marker = new google.maps.Marker({
      position: locations[index],
      icon: image,
      map: map
    });
  })
})
