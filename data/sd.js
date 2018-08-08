function loadMarkersForSD() {
	var sdOlleHallnas = L.marker([57.1131,12.2552], {icon: partyIcons["sd"]})
		.bindPopup("<b>Olle Hällnäs</b>, 46<br>Företagare<br>Varberg");
	var sdAnnaVilfalk = L.marker([57.2282,12.2052], {icon: partyIcons["sd"]})
		.bindPopup("<b>Anna Vilfalk</b>, 46<br>Major account manager<br>Åskloster");
	var sdErikHellsborn = L.marker([57.0937,12.2636], {icon: partyIcons["sd"]})
		.bindPopup("<b>Erik Hellsborn</b>, 34<br>Undersköterska<br>Varberg");
	var sdIngridJordebo = L.marker([57.1721,12.2992], {icon: partyIcons["sd"]})
		.bindPopup("<b>Ingrid Jordebo</b>, 88<br>Rektor<br>Tofta");
	var sdAndreasHavasi = L.marker([57.1469,12.4608], {icon: partyIcons["sd"]})
		.bindPopup("<b>Andreas Havasi</b>, 31<br>Snickare<br>Rolfstorp");
	var sdChristinaFermhede = L.marker([57.1036,12.2554], {icon: partyIcons["sd"]})
		.bindPopup("<b>Christina Fermhede</b>, 60<br>Fastighetsmäklare<br>Varberg");
	var sdFredrikGustafsson = L.marker([57.142,12.2283], {icon: partyIcons["sd"]})
		.bindPopup("<b>Fredrik Gustafsson</b>, 40<br>Civilingenjör<br>Varberg");
	var sdJorgenPejle = L.marker([57.131,12.2708], {icon: partyIcons["sd"]})
		.bindPopup("<b>Jörgen Pejle</b>, 56<br>Brevbärare<br>Varberg");
	var sdTobiasHavasi = L.marker([57.1478,12.4602], {icon: partyIcons["sd"]})
		.bindPopup("<b>Tobias Havasi</b>, 27<br>Svetsare<br>Rolfstorp");

	return L.layerGroup([sdOlleHallnas,
						 sdAnnaVilfalk,
						 sdErikHellsborn,
						 sdIngridJordebo,
						 sdAndreasHavasi,
						 sdChristinaFermhede,
						 sdFredrikGustafsson,
						 sdJorgenPejle,
						 sdTobiasHavasi
					   ]);
}
