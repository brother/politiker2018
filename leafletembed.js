var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	// Map center start
	map.setView(new L.LatLng(57.1809, 12.3960),11);
	map.addLayer(osm);

	loadMarkers();
}

function loadMarkers() {
//	loadMarkersForAFF();
//	loadMarkersForC();
//	loadMarkersForK();
//	loadMarkersForKD();
//	loadMarkersForL();
	loadMarkersForMP();
//	loadMarkersForM();
//	loadMarkersForS();
//	loadMarkersForSD();
//	loadMarkersForSPI();
//	loadMarkersForV();
}

function loadMarkersForMP() {
	// https://leafletjs.com/examples/custom-icons/
	var mpIcon = L.icon({
		iconUrl: 'gfx/logo_mp.png',

		iconSize:     [25, 22], // size of the icon
		iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
		popupAnchor:  [10, 10] // point from which the popup should open relative to the iconAnchor
	});

	dataMP = [
		{
			"name":"Johan Rosander",
			"age":"36",
			"free":"Förskolelärare",
			"place":"Spannarp",
			"position":[57.0774299,12.3902055]
		},
		{
			"name":"Linnea Sandahl",
			"age":"25",
			"free":"Jämställdhets- och mångfaldssamordnare",
			"place":"Veddige",
			"position":[57.2673,12.3358]
		},
		{
			"name":"Samuel Lindh",
			"age":"34",
			"free":"Statsvetare",
			"place":"Varberg",
			"position":[57.1104,12.2684]
		},
		{
			"name":"Sophia Nilsson",
			"age":"41",
			"free":"Marknadsförare",
			"place":"Brunnsberg",
			"position":[57.1157,12.2625]
		},
		{
			"name":"Peter Rudhager",
			"age":"53",
			"free":"Barnskötare",
			"place":"Breared",
			"position":[57.0886,12.2723]
		},
		{
			"name":"Peter Björck",
			"age":"38",
			"free":"Butikschef",
			"place":"Karlberg",
			"position":[57.1083,12.2786]
		},
		{
			"name":"Stefan Edlund",
			"age":"52",
			"free":"Lärare",
			"place":"Varberg",
			"position": [57.1066,12.2526]
		}
	];

	dataMP.forEach(function(entry) {
		L.marker(entry.position, {icon: mpIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free+"<br>"+entry.place
			);
	});
}
