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
	loadMarkersForAFF();
	loadMarkersForC();
//	loadMarkersForK();
	loadMarkersForKD();
	loadMarkersForL();
	loadMarkersForMP();
//	loadMarkersForM();
//	loadMarkersForS();
	loadMarkersForSD();
	loadMarkersForSPI();
	loadMarkersForV();
}

function loadMarkersForAFF() {
	var affIcon = L.icon({
		iconUrl: 'gfx/logo_aff.png',

		iconSize:     [25, 20],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataAFF = [
		{
			"name":"Andreas Feymark",
			"age": "34",
			"free":"Teknologie doktor",
			"position":[57.1468,12.4554]
		},
		{
			"name":"Johanna Palmelid",
			"age": "36",
			"free":"Beteendevetare",
			"position":[57.1464,12.4541]
		},
		{
			"name":"Hanna Götz",
			"age": "28",
			"free":"Undersköterska",
			"position":[57.1471,12.4565]
		},
		{
			"name":"Annelie Sinander",
			"age": "24",
			"free":"Studerande",
			"position":[57.1162,12.4757]
		},
		{
			"name":"Alexander Ivarsson",
			"age": "28",
			"free":"Mjölnare",
			"position":[57.1614,12.5493]
		}
	];

	dataAFF.forEach(function(entry) {
		L.marker(entry.position, {icon: affIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free
			);
	});
}

function loadMarkersForC() {
	var cIcon = L.icon({
		iconUrl: 'gfx/logo_c.png',

		iconSize:     [24, 25],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataC = [
		{
			"name":"Christofer Bergenblock",
			"age": "43",
			"free":"Gymnasielärare",
			"place":"Träslövsläge",
			"position":[57.0633,12.2898]
		},
		{
			"name":"Lena Språng",
			"age": "52",
			"free":"Projektledare",
			"place":"Karl Gustav",
			"position":[57.2808,12.5881]
		},
		{
			"name":"Eva Pehrsson-Karlsson",
			"age": "65",
			"free":"Trädgårdsarbetare",
			"place":"Väröbacka",
			"position":[57.2459,12.1878]
		},
		{
			"name":"Christian Persson",
			"age": "44",
			"free":"Fastighetsmäklare/Egenföretagare",
			"place":"Tvååker",
			"position":[57.0272,12.3589]
		},
		{
			"name":"Katarina Sundvall",
			"age": "52",
			"free":"Kock/Entreprenör",
			"place":"Sibbarp",
			"position":[57.02726,12.53891]
		},
		{
			"name":"Stefan Stenberg",
			"age": "62",
			"free":"Kommunpolitiker",
			"place":"Stråvalla",
			"position":[57.2978,12.2130]
		},
		{
			"name":"Calle Wikelund",
			"age": "49",
			"free":"Kyl- och ventilationstekniker",
			"place":"Varberg",
			"position":[57.0889,12.2696]
		},
		{
			"name":"ViviAnne Johansson",
			"age": "75",
			"free":"Lantbrukare/Senior",
			"place":"Veddige",
			"position":[57.2684,12.3322]
		},
		{
			"name":"Harald Lagerstedt",
			"age": "49",
			"free":"Lantmästare",
			"place":"Valinge",
			"position":[57.1709,12.3816]
		},
		{
			"name":"Anna-Karin Gustafsson",
			"age": "58",
			"free":"Förskolelärare",
			"place":"Sibbarp",
			"position":[57.0266,12.5378]
		}
	];

	dataC.forEach(function(entry) {
		L.marker(entry.position, {icon: cIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free+"<br>"+entry.place
			);
	});
}

function loadMarkersForKD() {
	var kdIcon = L.icon({
		iconUrl: 'gfx/logo_kd.jpg',

		iconSize:     [25, 23],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataKD = [
		{
			"name":"Morgan Börjesson",
			"age": "67",
			"free":"F.d. Arbetsmiljöingenjör",
			"place":"Väröbacka",
			"position":[57.2504,12.1812]
		},
		{
			"name":"Roger Kardemark",
			"age": "66",
			"free":"Senior",
			"place":"Varberg",
			"position":[57.1083,12.2790]
		},
		{
			"name":"Ann-Kristin Herdell",
			"age": "49",
			"free":"Förskollärare",
			"place":"Veddige",
			"position":[57.2669,12.3273]
		},
		{
			"name":"Renée Ljung",
			"age": "52",
			"free":"Sjuksköterska",
			"place":"Varberg",
			"position":[57.09892,12.25238]
		},
		{
			"name":"Karl-Gunnar Svensson",
			"age": "61",
			"free":"Präst",
			"place":"Träslövsläge",
			"position":[57.0569,12.2806]
		}
	];

	dataKD.forEach(function(entry) {
		L.marker(entry.position, {icon: kdIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free+"<br>"+entry.place
			);
	});
}

function loadMarkersForL() {
	var lIcon = L.icon({
		iconUrl: 'gfx/logo_l.png',

		iconSize:     [21, 25],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataL = [
		{
			"name":"Tobias Carlsson",
			"age": "50",
			"free":"Gymnasielärare",
			"place":"Varberg",
			"position":[57.1075,12.2810]
		},
		{
			"name":"Cecilia Rönn",
			"age": "38",
			"free":"Lean manager",
			"place":"Träslövsläge",
			"position":[57.0574,12.2795]
		},
		{
			"name":"Marianne Nord Lyngdorf",
			"age": "70",
			"free":"Gymnasielärare",
			"place":"Varberg",
			"position":[57.1063,12.2503]
		},
		{
			"name":"Mikael Bonde",
			"age": "62",
			"free":"Försäljningschef",
			"place":"Trönninge",
			"position":[57.1416,12.2881]
		},
		{
			"name":"Karl-Johan Wiktorp",
			"age": "71",
			"free":"Egen företagare",
			"place":"Hamra Tvååker",
			"position":[57.0327,12.3340]
		},
		{
			"name":"Lena Persson",
			"age": "72",
			"free":"Medicinsk sekreterare",
			"place":"Varberg",
			"position":[57.1255,12.2687]
		},
		{
			"name":"Samuel Lithner",
			"age": "18",
			"free":"Studerande",
			"place":"Varberg",
			"position":[57.1053,12.2912]
		}
	];

	dataL.forEach(function(entry) {
		L.marker(entry.position, {icon: lIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free+"<br>"+entry.place
			);
	});
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

function loadMarkersForSD() {
	var sdIcon = L.icon({
		iconUrl: 'gfx/logo_sd.png',

		iconSize:     [23, 25],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataSD = [
		{
			"name":"Olle Hällnäs",
			"age":"46",
			"free":"Företagare",
			"place":"Varberg",
			"position":[57.1131,12.2552]
		},
		{
			"name":"Anna Vilfalk",
			"age":"46",
			"free":"Major account manager",
			"place":"Åskloster",
			"position":[57.2282,12.2052]
		},
		{
			"name":"Erik Hellsborn",
			"age":"34",
			"free":"Undersköterska",
			"place":"Varberg",
			"position":[57.0937,12.2636]
		},
		{
			"name":"Ingrid Jordebo",
			"age":"88",
			"free":"Rektor",
			"place":"Tofta",
			"position":[57.1721,12.2992]
		},
		{
			"name":"Andreas Havasi",
			"age":"31",
			"free":"Snickare",
			"place":"Rolfstorp",
			"position":[57.1469,12.4608]
		},
		{
			"name":"Christina Fermhede",
			"age":"60",
			"free":"Fastighetsmäklare",
			"place":"Varberg",
			"position":[57.1036,12.2554]
		},
		{
			"name":"Fredrik Gustafsson",
			"age":"40",
			"free":"Civilingenjör",
			"place":"Varberg",
			"position":[57.1420,12.2283]
		},
		{
			"name":"Jörgen Pejle",
			"age":"56",
			"free":"Brevbärare",
			"place":"Varberg",
			"position":[57.1310,12.2708]
		},
		{
			"name":"Tobias Havasi",
			"age":"27",
			"free":"Svetsare",
			"place":"Rolfstorp",
			"position": [57.1478,12.4602]
		}
	];

	dataSD.forEach(function(entry) {
		L.marker(entry.position, {icon: sdIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free+"<br>"+entry.place
			);
	});
}

function loadMarkersForSPI() {
	var spiIcon = L.icon({
		iconUrl: 'gfx/logo_spi.png',

		iconSize:     [25, 25],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataSPI = [
		{
			"name":"Lennart Liljegren",
			"free":"Senior",
			"place":"Varberg",
			"position":[57.0713,12.2670]
		},
		{
			"name":"Anita Svensson",
			"free":"Sjuksköterska",
			"place":"Varberg",
			"position":[57.1103,12.2680]
		},
		{
			"name":"Margareta Käll",
			"free":"Pers.ass.",
			"place":"Åskloster",
			"position":[57.2196,12.2216]
		},
		{
			"name":"Arne Richardsson",
			"free":"Ingenjör",
			"place":"Varberg",
			"position":[57.1088,12.2571]
		},
		{
			"name":"Rosemary Liljegren",
			"free":"Senior",
			"place":"Varberg",
			"position":[57.0711,12.2652]
		}
	];


	dataSPI.forEach(function(entry) {
		L.marker(entry.position, {icon: spiIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b><br>"+entry.free+"<br>"+entry.place
			);
	});
}

function loadMarkersForV() {
	var vIcon = L.icon({
		iconUrl: 'gfx/logo_v.png',

		iconSize:     [25, 25],
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});

	dataV = [
		{
			"name":"Lars-Åke Erlandsson",
			"age":"45",
			"free":"Lärare",
			"place":"Varberg",
			"position":[57.1050,12.2984]
		},
		{
			"name":"Kajsa Lissel",
			"age":"48",
			"free":"Stödassistent",
			"place":"Varberg",
			"position":[57.1082,12.2815]
		},
		{
			"name":"Gerhard Eriksson",
			"age":"69",
			"free":"Pensionär",
			"place":"Varberg",
			"position":[57.0966,12.2508]
		},
		{
			"name":"Kjell-Erik Karlsson",
			"age":"72",
			"free":"Pensionär",
			"place":"Varberg",
			"position":[57.0959,12.2486]
		},
		{
			"name":"Ingela Svensson",
			"age":"63",
			"free":"Kammaråklagare",
			"place":"Varberg",
			"position":[57.1089,12.2554]
		}
	];

	dataV.forEach(function(entry) {
		L.marker(entry.position, {icon: vIcon})
			.addTo(map)
			.bindPopup(
				"<b>"+entry.name+"</b>, "+entry.age+"<br>"+entry.free+"<br>"+entry.place
			);
	});
}
