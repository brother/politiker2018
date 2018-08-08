function loadMarkersForK() {
	var kBengtJohansson = L.marker([57.12,12.2173], {icon: partyIcons["k"]})
		.bindPopup("<b>Bengt Johansson</b>, 61<br>Grafiker");
	var kUllaOhlsson = L.marker([57.1084,12.2507], {icon: partyIcons["k"]})
		.bindPopup("<b>Ulla Ohlsson</b>, 67<br>Sjuksköterska");
	var kIngemarEricsson = L.marker([57.0988,12.2509], {icon: partyIcons["k"]})
		.bindPopup("<b>Ingemar Ericsson</b>, 59<br>Stödassistent");
	var kJenneliPedersen = L.marker([57.118,12.2732], {icon: partyIcons["k"]})
		.bindPopup("<b>Jenneli Pedersen</b>, 38<br>Beteendevetare");
	var kTomasDahl = L.marker([57.0882,12.2721], {icon: partyIcons["k"]})
		.bindPopup("<b>Tomas Dahl</b>, 61<br>Chaufför");


	return L.layerGroup([kBengtJohansson,
						 kUllaOhlsson,
						 kIngemarEricsson,
						 kJenneliPedersen,
						 kTomasDahl
					   ]);
}
