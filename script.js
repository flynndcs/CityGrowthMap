//page loads with map
//different colored circles for 25 top cities, 
	//blue for declining, white for med, red for growing, gradient
//click on city for data from json

const endpoint = 
'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// reduce to 25 cities
var cities = [];

var map;
var markers = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data))
	.then(function() { return cities.splice(25)})
	.then(
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				zoom:4,
				center: new google.maps.LatLng(39.83, -98.583),
				mapTypeId: 'terrain'
			})

		    for (var i = 0; i < cities.length; i++) {
				var pos = new google.maps.LatLng(cities[i]["latitude"], cities[i]["longitude"]);
				markers[i] = new google.maps.Marker({
					position: pos,
					map: map,
					id: i
				});
			}
		}
	);
	











