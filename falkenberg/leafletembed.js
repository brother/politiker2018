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
	var osm = new L.TileLayer(osmUrl, {minZoom: 9, maxZoom: 18, attribution: osmAttrib});

	// Map center start
	map.setView(new L.LatLng(57.0037,12.7208),10);
	map.addLayer(osm);

	var partyC = loadMarkersForC();
	var partyKD = loadMarkersForKD();
	var partyL = loadMarkersForL();
	var partyMP = loadMarkersForMP();
	var partyM = loadMarkersForM();
	var partyS = loadMarkersForS();
	var partySD = loadMarkersForSD();
	var partyV = loadMarkersForV();

	map.addLayer(partyC);
	map.addLayer(partyKD);
	map.addLayer(partyL);
	map.addLayer(partyMP);
	map.addLayer(partyM);
	map.addLayer(partyS);
	map.addLayer(partySD);
	map.addLayer(partyV);

	var parties = {
		"<img width=8% src=\"../gfx/logo_c.png\"> Centerpartiet, 10": partyC,
		"<img width=8% src=\"../gfx/logo_kd.jpg\"> Kristdemokraterna, 2": partyKD,
		"<img width=8% src=\"../gfx/logo_l.png\"> Liberalerna, 2": partyL,
		"<img width=8% src=\"../gfx/logo_mp.png\"> Miljöpartiet, 2": partyMP,
		"<img width=8% src=\"../gfx/logo_m.png\"> Moderaterna, 9": partyM,
		"<img width=8% src=\"../gfx/logo_s.png\"> Socialdemokraterna, 18": partyS,
		"<img width=8% src=\"../gfx/logo_sd.png\"> Sverigedemokraterna, 6": partySD,
		"<img width=8% src=\"../gfx/logo_v.png\"> Vänsterpartiet, 2": partyV
	};

	L.control.layers(null, parties).addTo(map);
}
