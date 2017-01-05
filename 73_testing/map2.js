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
            121.51717901229858,
            25.03916302063388
          ],
          [
            121.51745796203613,
            25.039415754053685
          ],
          [
            121.51780128479002,
            25.039532400071796
          ],
          [
            121.51923894882202,
            25.0445869542914
          ],
          [
            121.52297258377075,
            25.043614940813328
          ],
          [
            121.52331590652464,
            25.044859116684524
          ],
          [
            121.53284311294556,
            25.04229299011858
          ],
          [
            121.53275728225708,
            25.038229846572555
          ],
          [
            121.52522563934326,
            25.03834649371849
          ],
          [
            121.51801586151123,
            25.039260225856985
          ],
          [
            121.51808023452757,
            25.03892972778415
          ],
          [
            121.51780128479002,
            25.038638111097974
          ],
          [
            121.5174150466919,
            25.038657552231978
          ],
          [
            121.51720046997069,
            25.03894916887192
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

});



var chapters = {
    'circle_1': {
        center: [121.517750, 25.039535],
        bearing: 12,
        zoom: 20,
        pitch: 50.00
    },
    'QDER_2': {
        center: [121.519380, 25.044406],
        duration: 6000,
        bearing: 12.00,
        zoom: 20,
        pitch: 50.00
    },
    'LSSR_3': {
        center: [121.522951, 25.043643],
        bearing: 101.60,
        zoom: 20,
        speed: 0.6,
        pitch: 50.00
    },
    'ZXER_4': {
        center: [121.523297, 25.044810],
        bearing: 9.60,
        zoom: 20,
        pitch: 50.00
    },
    'SSSR_5': {
        center: [121.529881, 25.043076],
        bearing: 107.20,
        zoom: 20,
        curve: 1,
        pitch: 60.00,
        speed: 0.5
    },
    'RIR_6': {
        center: [121.528377, 25.038232],
        bearing: -169.44,
        zoom: 20,
        curve: 0.5,
        pitch: 60.00
    },
    'circle_7': {
        center: [121.518010, 25.039133],
        bearing: -110.40,
        zoom: 20,
        curve: 0.5,
        pitch: 60
    },
    'end_8': {
        center: [121.517227, 25.039141],
        bearing: -71.22,
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
