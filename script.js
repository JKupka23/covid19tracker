function initMap() {
    var plain = {
        zoom: 3,
        center: {
            lat: 39.8283,
            lng: -98.5795
        }
    }
    var map = new google.maps.Map(document.getElementById('map'), plain);
    const covid_tracking_url = 'https://covidtracking.com/api/states';
    fetch(covid_tracking_url)
        .then(response => response.json())
        .then(data => {
            var positiveSum = 0;
            var recoveredSum = 0;
            var totalDeaths = 0;
            for (var i = 0; i < 50; i++) {
                positiveSum += data[i].positive;
                recoveredSum += data[i].recovered;
                totalDeaths += data[i].death;
            }
            //Helper function for getting values from attributes in array
            function findWithAttr(array, attr, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][attr] == value)
                        return i;
                }
                return -1;
            }
            //Get the important data (positive, negative, recovered)
            document.getElementById("positive").innerHTML = 'Total confirmed cases in the US: ' + String(positiveSum).replace(/(.)(?=(\d{3})+$)/g, '$1,');
            document.getElementById("recovered").innerHTML = 'Recovered: ' + String(recoveredSum).replace(/(.)(?=(\d{3})+$)/g, '$1,');
            document.getElementById("deaths").innerHTML = 'Deaths: ' + String(totalDeaths).replace(/(.)(?=(\d{3})+$)/g, '$1,');
            for (var i = 0; i < data.length; i++) {
                if (!data[i].recovered)
                    data[i].recovered = "N/A";
            }
            //Sort positive cases (for use later)!
            var sortedCases = [];
            for (var i = 0; i < data.length; i++)
                sortedCases[i] = data[i].positive;
            sortedCases.sort();
            sortedCases.sort(function(a, b) {
                return b - a
            });
            for (var i=1; i<11; i++) {
              document.getElementById("state"+i).innerHTML = data[findWithAttr(data, 'positive', sortedCases[i-1])].state + ' - ' + String(sortedCases[i-1]).replace(/(.)(?=(\d{3})+$)/g, '$1,');
            }
            var markers = [{
                    coords: {
                        lat: 32.3182,
                        lng: -86.9023
                    },
                    content: "<h1>Alabama</h1>" + "<h2>Confirmed: " + data[1].positive + "</h2>" + " <h2>Deaths: " + data[1].death + "</h2>" + " <h2>Recoveries: " + data[1].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 61.3707,
                        lng: -152.4044
                    },
                    content: "<h1>Alaska</h1>" + "<h2>Confirmed: " + data[0].positive + "</h2>" + " <h2>Deaths: " + data[0].death + "</h2>" + " <h2>Recoveries: " + data[0].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 33.7298,
                        lng: -111.4312
                    },
                    content: "<h1>Arizona</h1>" + "<h2>Confirmed: " + data[3].positive + "</h2>" + " <h2>Deaths: " + data[3].death + "</h2>" + " <h2>Recoveries: " + data[3].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 34.9697,
                        lng: -92.3731
                    },
                    content: "<h1>Arkansas</h1>" + "<h2>Confirmed: " + data[2].positive + "</h2>" + " <h2>Deaths: " + data[2].death + "</h2>" + " <h2>Recoveries: " + data[2].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 36.1162,
                        lng: -119.6816
                    },
                    content: "<h1>California</h1>" + "<h2>Confirmed: " + data[4].positive + "</h2>" + " <h2>Deaths: " + data[4].death + "</h2>" + " <h2>Recoveries: " + data[4].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 39.0598,
                        lng: -105.3111
                    },
                    content: "<h1>Colorado</h1>" + "<h2>Confirmed: " + data[5].positive + "</h2>" + " <h2>Deaths: " + data[5].death + "</h2>" + " <h2>Recoveries: " + data[5].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 41.5978,
                        lng: -72.7554
                    },
                    content: "<h1>Connecticut</h1>" + "<h2>Confirmed: " + data[6].positive + "</h2>" + " <h2>Deaths: " + data[6].death + "</h2>" + " <h2>Recoveries: " + data[6].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 39.3185,
                        lng: -75.5071
                    },
                    content: "<h1>Delaware</h1>" + "<h2>Confirmed: " + data[8].positive + "</h2>" + " <h2>Deaths: " + data[8].death + "</h2>" + " <h2>Recoveries: " + data[8].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 38.8974,
                        lng: -77.0268
                    },
                    content: "<h1>D.C.</h1>" + "<h2>Confirmed: " + data[7].positive + "</h2>" + " <h2>Deaths: " + data[7].death + "</h2>" + " <h2>Recoveries: " + data[7].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 27.7663,
                        lng: -81.6868
                    },
                    content: "<h1>Florida</h1>" + "<h2>Confirmed: " + data[9].positive + "</h2>" + " <h2>Deaths: " + data[9].death + "</h2>" + " <h2>Recoveries: " + data[9].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 33.0406,
                        lng: -83.6431
                    },
                    content: "<h1>Georgia</h1>" + "<h2>Confirmed: " + data[10].positive + "</h2>" + " <h2>Deaths: " + data[10].death + "</h2>" + " <h2>Recoveries: " + data[10].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 21.0943,
                        lng: -157.4983
                    },
                    content: "<h1>Hawaii</h1>" + "<h2>Confirmed: " + data[11].positive + "</h2>" + " <h2>Deaths: " + data[11].death + "</h2>" + " <h2>Recoveries: " + data[11].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 44.2405,
                        lng: -114.4788
                    },
                    content: "<h1>Idaho</h1>" + "<h2>Confirmed: " + data[13].positive + "</h2>" + " <h2>Deaths: " + data[13].death + "</h2>" + " <h2>Recoveries: " + data[13].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 40.3495,
                        lng: -88.9861
                    },
                    content: "<h1>Illinios</h1>" + "<h2>Confirmed: " + data[14].positive + "</h2>" + " <h2>Deaths: " + data[14].death + "</h2>" + " <h2>Recoveries: " + data[14].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 39.8494,
                        lng: -86.2583
                    },
                    content: "<h1>Indiana</h1>" + "<h2>Confirmed: " + data[15].positive + "</h2>" + " <h2>Deaths: " + data[15].death + "</h2>" + " <h2>Recoveries: " + data[15].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 42.0115,
                        lng: -93.2105
                    },
                    content: "<h1>Iowa</h1>" + "<h2>Confirmed: " + data[12].positive + "</h2>" + " <h2>Deaths: " + data[12].death + "</h2>" + " <h2>Recoveries: " + data[12].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 38.5266,
                        lng: -96.7265
                    },
                    content: "<h1>Kansas</h1>" + "<h2>Confirmed: " + data[16].positive + "</h2>" + " <h2>Deaths: " + data[16].death + "</h2>" + " <h2>Recoveries: " + data[16].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 37.6681,
                        lng: -84.6701
                    },
                    content: "<h1>Kentucky</h1>" + "<h2>Confirmed: " + data[17].positive + "</h2>" + " <h2>Deaths: " + data[17].death + "</h2>" + " <h2>Recoveries: " + data[17].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 31.1695,
                        lng: -91.8678
                    },
                    content: "<h1>Louisiana</h1>" + "<h2>Confirmed: " + data[18].positive + "</h2>" + " <h2>Deaths: " + data[18].death + "</h2>" + " <h2>Recoveries: " + data[18].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 44.6939,
                        lng: -69.3819
                    },
                    content: "<h1>Maine</h1>" + "<h2>Confirmed: " + data[21].positive + "</h2>" + " <h2>Deaths: " + data[21].death + "</h2>" + " <h2>Recoveries: " + data[21].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 39.0639,
                        lng: -76.8021
                    },
                    content: "<h1>Maryland</h1>" + "<h2>Confirmed: " + data[20].positive + "</h2>" + " <h2>Deaths: " + data[20].death + "</h2>" + " <h2>Recoveries: " + data[20].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 42.2302,
                        lng: -71.5301
                    },
                    content: "<h1>Massachusetts</h1>" + "<h2>Confirmed: " + data[19].positive + "</h2>" + " <h2>Deaths: " + data[19].death + "</h2>" + " <h2>Recoveries: " + data[19].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 43.3266,
                        lng: -84.5361
                    },
                    content: "<h1>Michigan</h1>" + "<h2>Confirmed: " + data[22].positive + "</h2>" + " <h2>Deaths: " + data[22].death + "</h2>" + " <h2>Recoveries: " + data[22].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 45.6945,
                        lng: -93.9002
                    },
                    content: "<h1>Minnesota</h1>" + "<h2>Confirmed: " + data[23].positive + "</h2>" + " <h2>Deaths: " + data[23].death + "</h2>" + " <h2>Recoveries: " + data[23].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 32.7416,
                        lng: -89.6787
                    },
                    content: "<h1>Mississippi</h1>" + "<h2>Confirmed: " + data[25].positive + "</h2>" + " <h2>Deaths: " + data[25].death + "</h2>" + " <h2>Recoveries: " + data[25].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 38.4561,
                        lng: -92.2884
                    },
                    content: "<h1>Missouri</h1>" + "<h2>Confirmed: " + data[24].positive + "</h2>" + " <h2>Deaths: " + data[24].death + "</h2>" + " <h2>Recoveries: " + data[24].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 46.9219,
                        lng: -110.4544
                    },
                    content: "<h1>Montana</h1>" + "<h2>Confirmed: " + data[26].positive + "</h2>" + " <h2>Deaths: " + data[26].death + "</h2>" + " <h2>Recoveries: " + data[26].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 41.1254,
                        lng: -98.2681
                    },
                    content: "<h1>Nebraska</h1>" + "<h2>Confirmed: " + data[29].positive + "</h2>" + " <h2>Deaths: " + data[29].death + "</h2>" + " <h2>Recoveries: " + data[29].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 38.4561,
                        lng: -117.0554
                    },
                    content: "<h1>Nevada</h1>" + "<h2>Confirmed: " + data[33].positive + "</h2>" + " <h2>Deaths: " + data[33].death + "</h2>" + " <h2>Recoveries: " + data[33].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 43.4525,
                        lng: -71.5639
                    },
                    content: "<h1>New Hampshire</h1>" + "<h2>Confirmed: " + data[30].positive + "</h2>" + " <h2>Deaths: " + data[30].death + "</h2>" + " <h2>Recoveries: " + data[30].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 40.2989,
                        lng: -74.521
                    },
                    content: "<h1>New Jersey</h1>" + "<h2>Confirmed: " + data[31].positive + "</h2>" + " <h2>Deaths: " + data[31].death + "</h2>" + " <h2>Recoveries: " + data[31].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 34.8405,
                        lng: -106.2485
                    },
                    content: "<h1>New Mexico</h1>" + "<h2>Confirmed: " + data[32].positive + "</h2>" + " <h2>Deaths: " + data[32].death + "</h2>" + " <h2>Recoveries: " + data[32].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 42.1657,
                        lng: -74.9481
                    },
                    content: "<h1>New York</h1>" + "<h2>Confirmed: " + data[34].positive + "</h2>" + " <h2>Deaths: " + data[34].death + "</h2>" + " <h2>Recoveries: " + data[34].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 35.6301,
                        lng: -79.8064
                    },
                    content: "<h1>North Carolina</h1>" + "<h2>Confirmed: " + data[27].positive + "</h2>" + " <h2>Deaths: " + data[27].death + "</h2>" + " <h2>Recoveries: " + data[27].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 47.5289,
                        lng: -99.7840
                    },
                    content: "<h1>North Dakota</h1>" + "<h2>Confirmed: " + data[28].positive + "</h2>" + " <h2>Deaths: " + data[28].death + "</h2>" + " <h2>Recoveries: " + data[28].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 40.3888,
                        lng: -82.7649
                    },
                    content: "<h1>Ohio</h1>" + "<h2>Confirmed: " + data[35].positive + "</h2>" + " <h2>Deaths: " + data[35].death + "</h2>" + " <h2>Recoveries: " + data[35].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 35.5653,
                        lng: -96.9289
                    },
                    content: "<h1>Oklahoma</h1>" + "<h2>Confirmed: " + data[36].positive + "</h2>" + " <h2>Deaths: " + data[36].death + "</h2>" + " <h2>Recoveries: " + data[36].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 44.5720,
                        lng: -122.0709
                    },
                    content: "<h1>Oregon</h1>" + "<h2>Confirmed: " + data[37].positive + "</h2>" + " <h2>Deaths: " + data[37].death + "</h2>" + " <h2>Recoveries: " + data[37].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 40.5908,
                        lng: -77.2098
                    },
                    content: "<h1>Pennsylvania</h1>" + "<h2>Confirmed: " + data[38].positive + "</h2>" + " <h2>Deaths: " + data[38].death + "</h2>" + " <h2>Recoveries: " + data[38].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 41.6809,
                        lng: -71.5118
                    },
                    content: "<h1>Rhode Island</h1>" + "<h2>Confirmed: " + data[39].positive + "</h2>" + " <h2>Deaths: " + data[39].death + "</h2>" + " <h2>Recoveries: " + data[39].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 33.8569,
                        lng: -80.945
                    },
                    content: "<h1>South Carolina</h1>" + "<h2>Confirmed: " + data[40].positive + "</h2>" + " <h2>Deaths: " + data[40].death + "</h2>" + " <h2>Recoveries: " + data[40].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 44.2998,
                        lng: -99.4388
                    },
                    content: "<h1>South Dakota</h1>" + "<h2>Confirmed: " + data[41].positive + "</h2>" + " <h2>Deaths: " + data[41].death + "</h2>" + " <h2>Recoveries: " + data[41].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 35.7478,
                        lng: -86.6923
                    },
                    content: "<h1>Tennessee</h1>" + "<h2>Confirmed: " + data[42].positive + "</h2>" + " <h2>Deaths: " + data[42].death + "</h2>" + " <h2>Recoveries: " + data[42].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 31.0545,
                        lng: -97.5635
                    },
                    content: "<h1>Texas</h1>" + "<h2>Confirmed: " + data[43].positive + "</h2>" + " <h2>Deaths: " + data[43].death + "</h2>" + " <h2>Recoveries: " + data[43].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 40.15,
                        lng: -111.8624
                    },
                    content: "<h1>Utah</h1>" + "<h2>Confirmed: " + data[44].positive + "</h2>" + " <h2>Deaths: " + data[44].death + "</h2>" + " <h2>Recoveries: " + data[44].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 44.0459,
                        lng: -72.7107
                    },
                    content: "<h1>Vermont</h1>" + "<h2>Confirmed: " + data[46].positive + "</h2>" + " <h2>Deaths: " + data[46].death + "</h2>" + " <h2>Recoveries: " + data[46].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 37.7693,
                        lng: -78.17
                    },
                    content: "<h1>Virginia</h1>" + "<h2>Confirmed: " + data[45].positive + "</h2>" + " <h2>Deaths: " + data[45].death + "</h2>" + " <h2>Recoveries: " + data[45].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 47.4009,
                        lng: -121.4905
                    },
                    content: "<h1>Washington</h1>" + "<h2>Confirmed: " + data[47].positive + "</h2>" + " <h2>Deaths: " + data[47].death + "</h2>" + " <h2>Recoveries: " + data[47].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 38.4912,
                        lng: -80.9545
                    },
                    content: "<h1>West Virginia</h1>" + "<h2>Confirmed: " + data[49].positive + "</h2>" + " <h2>Deaths: " + data[49].death + "</h2>" + " <h2>Recoveries: " + data[49].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 44.2685,
                        lng: -89.6165
                    },
                    content: "<h1>Wisconsin</h1>" + "<h2>Confirmed: " + data[48].positive + "</h2>" + " <h2>Deaths: " + data[48].death + "</h2>" + " <h2>Recoveries: " + data[48].recovered + "</h2>"
                },
                {
                    coords: {
                        lat: 42.756,
                        lng: -107.3025
                    },
                    content: "<h1>Wyoming</h1>" + "<h2>Confirmed: " + data[50].positive + "</h2>" + " <h2>Deaths: " + data[50].death + "</h2>" + " <h2>Recoveries: " + data[50].recovered + "</h2>"
                }
            ];

            // Loop through markers
            for (var i = 0; i < markers.length; i++) {
                // Add marker
                addMarker(markers[i]);
            }

            // Add Marker Function
            function addMarker(props) {
                var marker = new google.maps.Marker({
                    position: props.coords,
                    map: map
                });


                // Check for customicon
                if (props.iconImage) {
                    // Set icon image
                    marker.setIcon(props.iconImage);
                }

                // Check content
                if (props.content) {
                    var infoWindow = new google.maps.InfoWindow({
                        content: props.content
                    });

                    marker.addListener('click', function() {
                        infoWindow.open(map, marker);
                    });
                    //Wait before user moves their cursor
                    marker.addListener('mouseout', function() {
                        setTimeout(() => {
                            infoWindow.close(map, marker);
                        }, 5000);
                    });
                }
            }
        })
}
