function initMap(){
    // Map options
    var options = {
        zoom:8,
        center:{lat:42.3601,lng:-71.0589}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    /*
    // Add marker
    var marker = new google.maps.Marker({
      position:{lat:42.4668,lng:-70.9495},
      map:map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    */

    // Array of markers
    var markers = [
        {
            coords:{lat:32.3182,lng:-86.9023},
            content:'<h1>Alabama</h1>'
        },
        {
            coords:{lat:61.3707,lng:-152.4044},
            content:'<h1>Alaska</h1>'
        },
        {
            coords:{lat:33.7298,lng:-111.4312},
            content:'<h1>Arizona</h1>'
        },
        {
            coords:{lat:34.9697,lng:-92.3731},
            content:'<h1>Arkansas</h1>'
        },
        {
            coords:{lat:36.1162,lng:-119.6816},
            content:'<h1>California</h1>'
        },
        {
            coords:{lat:39.0598,lng:-105.3111},
            content:'<h1>Colorado</h1>'
        },
        {
            coords:{lat:41.5978,lng:-72.7554},
            content:'<h1>Connecticut</h1>'
        },
        {
            coords:{lat:39.3185,lng:-75.5071},
            content:'<h1>Delaware</h1>'
        },
        {
            coords:{lat:38.8974,lng:-77.0268},
            content:'<h1>District of Columbia</h1>'
        },
        {
            coords:{lat:27.7663,lng:-81.6868},
            content:'<h1>Florida</h1>'
        },
        {
            coords:{lat:33.0406,lng:-83.6431},
            content:'<h1>Georgia</h1>'
        },
        {
            coords:{lat:21.0943,lng:-157.4983},
            content:'<h1>Hawaii</h1>'
        },
        {
            coords:{lat:44.2405,lng:-114.4788},
            content:'<h1>Idaho</h1>'
        },
        {
            coords:{lat:40.3495,lng:-88.9861},
            content:'<h1>Illinois</h1>'
        },
        {
            coords:{lat:39.8494,lng:-86.2583},
            content:'<h1>Indiana</h1>'
        },
        {
            coords:{lat:42.0115,lng:-93.2105},
            content:'<h1>Iowa</h1>'
        },
        {
            coords:{lat:38.5266,lng:-96.7265},
            content:'<h1>Kansas</h1>'
        },
        {
            coords:{lat:37.6681,lng:-84.6701},
            content:'<h1>Kentucky</h1>'
        },
        {
            coords:{lat:31.1695,lng:-91.8678},
            content:'<h1>Louisiana</h1>'
        },
        {
            coords:{lat:44.6939,lng:-69.3819},
            content:'<h1>Maine</h1>'
        },
        {
            coords:{lat:39.0639,lng:-76.8021},
            content:'<h1>Maryland</h1>'
        },
        {
            coords:{lat:42.2302,lng:-71.5301},
            content:'<h1>Massachusetts</h1>'
        },
        {
            coords:{lat:43.3266,lng:-84.5361},
            content:'<h1>Michigan</h1>'
        },
        {
            coords:{lat:45.6945,lng:-93.9002},
            content:'<h1>Minnesota</h1>'
        },
        {
            coords:{lat:32.7416,lng:-89.6787},
            content:'<h1>Mississippi</h1>'
        },
        {
            coords:{lat:38.4561,lng:-92.2884},
            content:'<h1>Missouri</h1>'
        },
        {
            coords:{lat:46.9219,lng:-110.4544},
            content:'<h1>Montana</h1>'
        },
        {
            coords:{lat:41.1254,lng:-98.2681},
            content:'<h1>Nebraska</h1>'
        },
        {
            coords:{lat:38.4561,lng:-117.0554},
            content:'<h1>Nevada</h1>'
        },
        {
            coords:{lat:43.4525,lng:-71.5639},
            content:'<h1>New Hampshire</h1>'
        },
        {
            coords:{lat:40.2989,lng:-74.521},
            content:'<h1>New Jersey</h1>'
        },
        {
            coords:{lat:34.8405,lng:-106.2485},
            content:'<h1>New Mexico</h1>'
        },
        {
            coords:{lat:42.1657,lng:-74.9481},
            content:'<h1>New York</h1>'
        },
        {
            coords:{lat:35.6301,lng:-79.8064},
            content:'<h1>North Carolina</h1>'
        },
        {
            coords:{lat:47.5289,lng:-99.7840},
            content:'<h1>North Dakota</h1>'
        },
        {
            coords:{lat:40.3888,lng:-82.7649},
            content:'<h1>Ohio</h1>'
        },
        {
            coords:{lat:35.5653,lng:-96.9289},
            content:'<h1>Oklahoma</h1>'
        },
        {
            coords:{lat:44.5720,lng:-122.0709},
            content:'<h1>Oregon</h1>'
        },
        {
            coords:{lat:40.5908,lng:-77.2098},
            content:'<h1>Pennsylvania</h1>'
        },
        {
            coords:{lat:41.6809,lng:-71.5118},
            content:'<h1>Rhode Island</h1>'
        },
        {
            coords:{lat:33.8569,lng:-80.945},
            content:'<h1>South Carolina</h1>'
        },
        {
            coords:{lat:44.2998,lng:-99.4388},
            content:'<h1>South Dakota</h1>'
        },
        {
            coords:{lat:35.7478,lng:-86.6923},
            content:'<h1>Tennessee</h1>'
        },
        {
            coords:{lat:31.0545,lng:-97.5635},
            content:'<h1>Texas</h1>'
        },
        {
            coords:{lat:40.15,lng:-111.8624},
            content:'<h1>Utah</h1>'
        },
        {
            coords:{lat:44.0459,lng:-72.7107},
            content:'<h1>Vermont</h1>'
        },
        {
            coords:{lat:37.7693,lng:-78.17},
            content:'<h1>Virginia</h1>'
        },
        {
            coords:{lat:47.4009,lng:-121.4905},
            content:'<h1>Washington</h1>'
        },
        {
            coords:{lat:38.4912,lng:-80.9545},
            content:'<h1>West Virginia</h1>'
        },
        {
            coords:{lat:44.2685,lng:-89.6165},
            content:'<h1>Wisconsin</h1>'
        },
        {
            coords:{lat:42.756,lng:-107.3025},
            content:'<h1>Wyoming</h1>'
        }
    ];

    // Loop through markers
    for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}