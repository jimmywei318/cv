mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXl3ZWkiLCJhIjoiY2l2dng3MTkyMDBtNjJ6b3U0MHpxeGd1YyJ9.cRCV3AyBrGDO1m7GlPF9lQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jimmywei/civvxx6zw000h2kpcoan7xji8',
    center: [121.543729, 25.019552],
    zoom: 17.47,
    bearing: 91.20,
    pitch: 0.00
});

map.on('load', function () {
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 20,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });
    map.addSource("route", {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
          [
            121.54335737228394,
            25.01942390446113
          ],
          [
            121.54335200786592,
            25.021008594896788
          ],
          [
            121.54625415802002,
            25.019175990916764
          ],
          [
            121.53704881668091,
            25.011553620390224
          ],
          [
            121.53280019760132,
            25.016414880742552
          ],
          [
            121.53432369232176,
            25.022150920405707
          ],
          [
            121.54312133789062,
            25.02102317784262
          ]
        ]
            }
        }
    });



    map.addLayer({
        "id": "maine",
        "type": "line",
        "source": "route",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#888",
            "line-width": 8
        }
    });

    map.addSource('NTU', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [
          [
            [
              121.5371561050415,
              25.011592511236692
            ],
            [
              121.5360188484192,
              25.013362031721208
            ],
            [
              121.5329074859619,
              25.016434325397505
            ],
            [
              121.533465385437,
              25.01695932991724
            ],
            [
              121.53445243835449,
              25.02217036415214
            ],
            [
              121.53719902038574,
              25.02217036415214
            ],
            [
              121.53921604156494,
              25.02115928525344
            ],
            [
              121.54387235641478,
              25.020984289983225
            ],
            [
              121.54627561569212,
              25.01915654669602
            ],
            [
              121.5371561050415,
              25.011592511236692
            ]
          ]
        ]
            }
        }
    });

    map.addLayer({
        'id': 'maine2',
        'type': 'fill',
        'source': 'NTU',
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
        }
    });

});



var chapters = {
    'circle_1': {
        center: [121.543729, 25.019552],
        bearing: 91.20,
        zoom: 20,
        pitch: 50.00
    },
    'QDER_2': {
        center: [121.543441,25.021569],
        duration: 6000,
        bearing: 0,
        zoom: 20,
        pitch: 50.00
    },
    'LSSR_3': {
        center: [121.546233, 25.019211],
        bearing:-132.0,
        zoom: 20,
        speed: 0.6,
        pitch: 50.00
    },
    'ZXER_4': {
        center: [121.537375, 25.011259],
        bearing: -21.6,
        zoom: 20,
        pitch: 50.00
    },
    'SSSR_5': {
        center: [121.532737, 25.016372],
        bearing: 46.40,
        zoom: 20,
        curve: 1,
        pitch: 60.00,
        speed: 0.5
    },
    'RIR_6': {
        center: [121.539692, 25.021321],
        bearing: 94.40,
        zoom: 20,
        curve: 0.5,
        pitch: 60.00
    },
    'circle_7': {
        center: [121.543636, 25.020824],
        bearing: 176.80,
        zoom: 20,
        curve: 0.5,
        pitch: 60
    },
    'end_8': {
        center: [121.543479, 25.019440],
        bearing: -87.20,
        zoom: 20,
        curve: 0.5,
        pitch: 60.00
    }
};

// On every scroll event, check which element is on screen
window.onscroll = function () {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'baker';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
