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
	var osm = new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 18, attribution: osmAttrib});

	// Map center start
	map.setView(new L.LatLng(57.1809, 12.3960),11);
	map.addLayer(osm);

	var partyAFF = loadMarkersForAFF();
	var partyC = loadMarkersForC();
	var partyK = loadMarkersForK();
	var partyKD = loadMarkersForKD();
	var partyL = loadMarkersForL();
	var partyMP = loadMarkersForMP();
	var partyM = loadMarkersForM();
	var partyS = loadMarkersForS();
	var partySD = loadMarkersForSD();
	var partySPI = loadMarkersForSPI();
	var partyV = loadMarkersForV();

//	map.addLayer(partyAFF);
	map.addLayer(partyC);
//	map.addLayer(partyK);
	map.addLayer(partyKD);
	map.addLayer(partyL);
	map.addLayer(partyMP);
	map.addLayer(partyM);
	map.addLayer(partyS);
	map.addLayer(partySD);
	map.addLayer(partySPI);
	map.addLayer(partyV);

	var parties = {
		"Allians för frihet": partyAFF,
		"Centerpartiet": partyC,
		"Kommunisterna": partyK,
		"Kristdemokraterna": partyKD,
		"Liberalerna": partyL,
		"Miljöpartiet": partyMP,
		"Moderaterna": partyM,
		"SPI Välfärden": partySPI,
		"Socialdemokraterna": partyS,
		"Sverigedemokraterna": partySD,
		"Vänsterpartiet": partyV
	};

	L.control.layers(null, parties, {collapsed:false}).addTo(map);
}
