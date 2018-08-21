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
	map.setView(new L.LatLng(56.7313, 12.9137),11);
	map.addLayer(osm);

	var partyC = loadMarkersForC();
	var partyDD = loadMarkersForDD();
	var partyKD = loadMarkersForKD();
	var partyL = loadMarkersForL();
	var partyMP = loadMarkersForMP();
	var partyMED = loadMarkersForMED();
	var partyM = loadMarkersForM();
	var partyRNP = loadMarkersForRNP();
	var partyS = loadMarkersForS();
	var partySD = loadMarkersForSD();
	var partySPI = loadMarkersForSPI();
	var partyTP = loadMarkersForTP();
	var partyV = loadMarkersForV();

	map.addLayer(partyC);
//	map.addLayer(partyDD);
	map.addLayer(partyKD);
	map.addLayer(partyL);
	map.addLayer(partyMP);
//	map.addLayer(partyMED);
	map.addLayer(partyM);
//	map.addLayer(partyRNP);
	map.addLayer(partyS);
	map.addLayer(partySD);
	map.addLayer(partySPI);
//	map.addLayer(partyTP);
	map.addLayer(partyV);

	var parties = {
		"<img width=8% src=\"../gfx/logo_c.png\"> Centerpartiet, 8": partyC,
		"<img width=8% src=\"../gfx/logo_dd.png\"> Direktdemokraterna, 0": partyDD,
		"<img width=8% src=\"../gfx/logo_kd.jpg\"> Kristdemokraterna, 2": partyKD,
		"<img width=8% src=\"../gfx/logo_l.png\"> Liberalerna, 4": partyL,
		"<img width=8% src=\"../gfx/logo_med.png\"> Medborgerlig Samling, 0": partyMED,
		"<img width=8% src=\"../gfx/logo_mp.png\"> Miljöpartiet, 4": partyMP,
		"<img width=8% src=\"../gfx/logo_m.png\"> Moderaterna, 16": partyM,
		"<img width=8% src=\"../gfx/logo_rnp.jpg\"> Reformist Neutral Partiet, 0": partyRNP,
		"<img width=8% src=\"../gfx/logo_s.png\"> Socialdemokraterna, 25": partyS,
		"<img width=8% src=\"../gfx/logo_spi.png\"> SPI Välfärden, 2": partySPI,
		"<img width=8% src=\"../gfx/logo_sd.png\"> Sverigedemokraterna, 6": partySD,
		"<img width=8% src=\"../gfx/logo_tp.jpg\"> Trygghetspartiet, 0": partyTP,
		"<img width=8% src=\"../gfx/logo_v.png\"> Vänsterpartiet, 4": partyV
	};

	L.control.layers(null, parties).addTo(map);
}
