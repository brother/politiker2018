function loadMarkersForL() {
	var lTobiasCarlsson = L.marker([57.1082,12.2810], {icon: partyIcons["l"]})
		.bindPopup("1. <b>Tobias Carlsson</b>, 50<br>Gymnasielärare<br>Varberg");
	var lCeciliaRonn = L.marker([57.0569,12.2795], {icon: partyIcons["l"]})
		.bindPopup("2. <b>Cecilia Rönn</b>, 38<br>Lean manager<br>Träslövsläge");
	var lMarianneNordLyngdorf = L.marker([57.1063,12.2503], {icon: partyIcons["l"]})
		.bindPopup("3. <b>Marianne Nord Lyngdorf</b>, 70<br>Gymnasielärare<br>Varberg");
	var lMikaelBonde = L.marker([57.1416,12.2881], {icon: partyIcons["l"]})
		.bindPopup("4. <b>Mikael Bonde</b>, 62<br>Försäljningschef<br>Trönninge");
	var lKarlJohanWiktorp = L.marker([57.0327,12.334], {icon: partyIcons["l"]})
		.bindPopup("5. <b>Karl-Johan Wiktorp</b>, 71<br>Egen företagare<br>Hamra Tvååker");
	var lLenaPersson = L.marker([57.1255,12.2687], {icon: partyIcons["l"]})
		.bindPopup("6. <b>Lena Persson</b>, 72<br>Medicinsk sekreterare<br>Varberg");
	var lSamuelLithner = L.marker([57.1053,12.2912], {icon: partyIcons["l"]})
		.bindPopup("7. <b>Samuel Lithner</b>, 18<br>Studerande<br>Varberg");

	return L.layerGroup([lTobiasCarlsson,
						 lCeciliaRonn,
						 lMarianneNordLyngdorf,
						 lMikaelBonde,
						 lKarlJohanWiktorp,
						 lLenaPersson,
						 lSamuelLithner
					   ]);
}
