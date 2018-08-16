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
	map.setView(new L.LatLng(57.8602, 12.3705),11);
	map.addLayer(osm);

//	var partyAFF = loadMarkersForAFF();
	var partyC = loadMarkersForC();
//	var partyK = loadMarkersForK();
	var partyKd = loadMarkersForKd();
//	var partyL = loadMarkersForL();
//	var partyMP = loadMarkersForMp();
	var partyM = loadMarkersForM();
	var partyS = loadMarkersForS();
//	var partySD = loadMarkersForSD();
//	var partySPI = loadMarkersForSPI();
//	var partyV = loadMarkersForV();

//	map.addLayer(partyAFF);
	map.addLayer(partyC);
//	map.addLayer(partyK);
	map.addLayer(partyKd);
//	map.addLayer(partyL);
//	map.addLayer(partyMP);
	map.addLayer(partyM);
	map.addLayer(partyS);
//	map.addLayer(partySD);
//	map.addLayer(partySPI);
//	map.addLayer(partyV);

	var parties = {
	    "<img width=8% src=\"gfx/logo_c.png\"> Centerpartiet, 4": partyC,
            "<img width=8% src=\"gfx/logo_m.png\"> Kristdemokraterna, 2": partyKd,
	    "<img width=8% src=\"gfx/logo_m.png\"> Moderaterna, 13": partyM,
            "<img width=8% src=\"gfx/logo_m.png\"> Socialdemokraterna, 13": partyS,
	};

	L.control.layers(null, parties, {collapsed:false}).addTo(map);
}
