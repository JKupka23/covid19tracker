function initMap(){
    // Map options
    var options = {
        zoom:5,
        center:{lat:39.8283,lng:-98.5795}
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);
    const api_url = 'https://covidtracking.com/api/states';
    fetch(api_url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (var i=0; i<data.length; i++) {
          if (!data[i].recovered)
            data[i].recovered = "an unidentified amount of";
        }
    var markers = [
        {
            coords:{lat:32.3182,lng:-86.9023},
            content: "Alabama has " + data[1].positive + " total cases. There have been " + data[1].death + " recorded deaths, with " + data[1].recovered + " recoveries."
        },
        {
            coords:{lat:61.3707,lng:-152.4044},
            content: "Arizona has " + data[0].positive + " total cases. There have been " + data[0].death + " recorded deaths, with " + data[0].recovered + " recoveries."
        },
        {
            coords:{lat:33.7298,lng:-111.4312},
            content: "Arizona has " + data[3].positive + " total cases. There have been " + data[3].death + " recorded deaths, with " + data[3].recovered + " recoveries."
        },
        {
            coords:{lat:34.9697,lng:-92.3731},
            content: "Arkansas has " + data[2].positive + " total cases. There have been " + data[2].death + " recorded deaths, with " + data[2].recovered + " recoveries."
        },
        {
            coords:{lat:36.1162,lng:-119.6816},
            content: "California has " + data[4].positive + " total cases. There have been " + data[4].death + " recorded deaths, with " + data[4].recovered + " recoveries."
        },
        {
            coords:{lat:39.0598,lng:-105.3111},
            content: "Colorado has " + data[5].positive + " total cases. There have been " + data[5].death + " recorded deaths, with " + data[5].recovered + " recoveries."
        },
        {
            coords:{lat:41.5978,lng:-72.7554},
            content: "Connecticut has " + data[6].positive + " total cases. There have been " + data[6].death + " recorded deaths, with " + data[6].recovered + " recoveries."
        },
        {
            coords:{lat:39.3185,lng:-75.5071},
            content: "Delaware has " + data[8].positive + " total cases. There have been " + data[8].death + " recorded deaths, with " + data[8].recovered + " recoveries."
        },
        {
            coords:{lat:38.8974,lng:-77.0268},
            content: "D.C. has " + data[7].positive + " total cases. There have been " + data[7].death + " recorded deaths, with " + data[7].recovered + " recoveries."
        },
        {
            coords:{lat:27.7663,lng:-81.6868},
            content: "Florida has " + data[9].positive + " total cases. There have been " + data[9].death + " recorded deaths, with " + data[9].recovered + " recoveries."
        },
        {
            coords:{lat:33.0406,lng:-83.6431},
            content: "Georgia has " + data[10].positive + " total cases. There have been " + data[10].death + " recorded deaths, with " + data[10].recovered + " recoveries."
        },
        {
            coords:{lat:21.0943,lng:-157.4983},
            content: "Hawaii has " + data[11].positive + " total cases. There have been " + data[11].death + " recorded deaths, with " + data[11].recovered + " recoveries."
        },
        {
            coords:{lat:44.2405,lng:-114.4788},
            content: "Idaho has " + data[13].positive + " total cases. There have been " + data[13].death + " recorded deaths, with " + data[13].recovered + " recoveries."
        },
        {
            coords:{lat:40.3495,lng:-88.9861},
            content: "Illinios has " + data[14].positive + " total cases. There have been " + data[14].death + " recorded deaths, with " + data[14].recovered + " recoveries."
        },
        {
            coords:{lat:39.8494,lng:-86.2583},
            content: "Indiana has " + data[15].positive + " total cases. There have been " + data[15].death + " recorded deaths, with " + data[15].recovered + " recoveries."
        },
        {
            coords:{lat:42.0115,lng:-93.2105},
            content: "Iowa has " + data[12].positive + " total cases. There have been " + data[12].death + " recorded deaths, with " + data[12].recovered + " recoveries."
        },
        {
            coords:{lat:38.5266,lng:-96.7265},
            content: "Kansas has " + data[16].positive + " total cases. There have been " + data[16].death + " recorded deaths, with " + data[16].recovered + " recoveries."
        },
        {
            coords:{lat:37.6681,lng:-84.6701},
            content: "Kentucky has " + data[17].positive + " total cases. There have been " + data[17].death + " recorded deaths, with " + data[17].recovered + " recoveries."
        },
        {
            coords:{lat:31.1695,lng:-91.8678},
            content: "Louisiana has " + data[18].positive + " total cases. There have been " + data[18].death + " recorded deaths, with " + data[18].recovered + " recoveries."
        },
        {
            coords:{lat:44.6939,lng:-69.3819},
            content: "Maine has " + data[21].positive + " total cases. There have been " + data[21].death + " recorded deaths, with " + data[21].recovered + " recoveries."
        },
        {
            coords:{lat:39.0639,lng:-76.8021},
            content: "Maryland has " + data[20].positive + " total cases. There have been " + data[20].death + " recorded deaths, with " + data[20].recovered + " recoveries."
        },
        {
            coords:{lat:42.2302,lng:-71.5301},
            content: "Massachusetts has " + data[19].positive + " total cases. There have been " + data[19].death + " recorded deaths, with " + data[19].recovered + " recoveries."
        },
        {
            coords:{lat:43.3266,lng:-84.5361},
            content: "Michigan has " + data[22].positive + " total cases. There have been " + data[22].death + " recorded deaths, with " + data[22].recovered + " recoveries."
        },
        {
            coords:{lat:45.6945,lng:-93.9002},
            content: "Minnesota has " + data[23].positive + " total cases. There have been " + data[23].death + " recorded deaths, with " + data[23].recovered + " recoveries."
        },
        {
            coords:{lat:32.7416,lng:-89.6787},
            content: "Mississippi has " + data[25].positive + " total cases. There have been " + data[25].death + " recorded deaths, with " + data[25].recovered + " recoveries."
        },
        {
            coords:{lat:38.4561,lng:-92.2884},
            content: "Missouri has " + data[24].positive + " total cases. There have been " + data[24].death + " recorded deaths, with " + data[24].recovered + " recoveries."
        },
        {
            coords:{lat:46.9219,lng:-110.4544},
            content: "Montana has " + data[26].positive + " total cases. There have been " + data[26].death + " recorded deaths, with " + data[26].recovered + " recoveries."
        },
        {
            coords:{lat:41.1254,lng:-98.2681},
            content: "Nebraska has " + data[29].positive + " total cases. There have been " + data[29].death + " recorded deaths, with " + data[29].recovered + " recoveries."
        },
        {
            coords:{lat:38.4561,lng:-117.0554},
            content: "Nevada has " + data[33].positive + " total cases. There have been " + data[33].death + " recorded deaths, with " + data[33].recovered + " recoveries."
        },
        {
            coords:{lat:43.4525,lng:-71.5639},
            content: "New Hampshire has " + data[30].positive + " total cases. There have been " + data[30].death + " recorded deaths, with " + data[30].recovered + " recoveries."
        },
        {
            coords:{lat:40.2989,lng:-74.521},
            content: "New Jersey has " + data[31].positive + " total cases. There have been " + data[31].death + " recorded deaths, with " + data[31].recovered + " recoveries."
        },
        {
            coords:{lat:34.8405,lng:-106.2485},
            content: "New Mexico has " + data[32].positive + " total cases. There have been " + data[32].death + " recorded deaths, with " + data[32].recovered + " recoveries."
        },
        {
            coords:{lat:42.1657,lng:-74.9481},
            content: "New York has " + data[34].positive + " total cases. There have been " + data[34].death + " recorded deaths, with " + data[27].recovered + " recoveries."
        },
        {
            coords:{lat:35.6301,lng:-79.8064},
            content: "North Carolina has " + data[27].positive + " total cases. There have been " + data[27].death + " recorded deaths, with " + data[27].recovered + " recoveries."
        },
        {
            coords:{lat:47.5289,lng:-99.7840},
            content: "North Dakota has " + data[28].positive + " total cases. There have been " + data[28].death + " recorded deaths, with " + data[28].recovered + " recoveries."
        },
        {
            coords:{lat:40.3888,lng:-82.7649},
            content: "Ohio has " + data[35].positive + " total cases. There have been " + data[35].death + " recorded deaths, with " + data[35].recovered + " recoveries."
        },
        {
            coords:{lat:35.5653,lng:-96.9289},
            content: "Oklahoma has " + data[36].positive + " total cases. There have been " + data[36].death + " recorded deaths, with " + data[36].recovered + " recoveries."
        },
        {
            coords:{lat:44.5720,lng:-122.0709},
            content: "Oregon has " + data[37].positive + " total cases. There have been " + data[37].death + " recorded deaths, with " + data[37].recovered + " recoveries."
        },
        {
            coords:{lat:40.5908,lng:-77.2098},
            content: "Pennsylvania has " + data[38].positive + " total cases. There have been " + data[38].death + " recorded deaths, with " + data[38].recovered + " recoveries."
        },
        {
            coords:{lat:41.6809,lng:-71.5118},
            content: "Rhode Island currently has " + data[39].positive + " total cases. There have been " + data[39].death + " recorded deaths, with " + data[39].recovered + " recoveries."
        },
        {
            coords:{lat:33.8569,lng:-80.945},
            content: "South Carolina currently has " + data[40].positive + " total cases. There have been " + data[40].death + " recorded deaths, with " + data[40].recovered + " recoveries."
        },
        {
            coords:{lat:44.2998,lng:-99.4388},
            content: "South Dakota currently has " + data[41].positive + " total cases. There have been " + data[41].death + " recorded deaths, with " + data[41].recovered + " recoveries."
        },
        {
            coords:{lat:35.7478,lng:-86.6923},
            content: "Tennessee currently has " + data[42].positive + " total cases. There have been " + data[42].death + " recorded deaths, with " + data[42].recovered + " recoveries."
        },
        {
            coords:{lat:31.0545,lng:-97.5635},
            content: "Texas currently has " + data[43].positive + " total cases. There have been " + data[43].death + " recorded deaths, with " + data[43].recovered + " recoveries."
        },
        {
            coords:{lat:40.15,lng:-111.8624},
            content: "Utah currently has " + data[44].positive + " total cases. There have been " + data[44].death + " recorded deaths, with " + data[44].recovered + " recoveries."
        },
        {
            coords:{lat:44.0459,lng:-72.7107},
            content: "Vermont currently has " + data[46].positive + " total cases. There have been " + data[46].death + " recorded deaths, with " + data[46].recovered + " recoveries."
        },
        {
            coords:{lat:37.7693,lng:-78.17},
            content: "Virginia currently has " + data[45].positive + " total cases. There have been " + data[45].death + " recorded deaths, with " + data[45].recovered + " recoveries."
        },
        {
            coords:{lat:47.4009,lng:-121.4905},
            content: "Washington currently has " + data[47].positive + " total cases. There have been " + data[47].death + " recorded deaths, with " + data[47].recovered + " recoveries."
        },
        {
            coords:{lat:38.4912,lng:-80.9545},
            content: "West Virginia currently has " + data[49].positive + " total cases. There have been " + data[49].death + " recorded deaths, with " + data[49].recovered + " recoveries."
        },
        {
            coords:{lat:44.2685,lng:-89.6165},
            content: "Wisconsin currently has " + data[48].positive + " total cases. There have been " + data[48].death + " recorded deaths, with " + data[48].recovered + " recoveries."
        },
        {
            coords:{lat:42.756,lng:-107.3025},
            content: "Wyoming currently has " + data[50].positive + " total cases. There have been " + data[50].death + " recorded deaths, with " + data[50].recovered + " recoveries."
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
)
}
