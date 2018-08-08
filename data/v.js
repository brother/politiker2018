function loadMarkersForV() {
	var vLarsAkeErlandsson = L.marker([57.1050,12.2984], {icon: partyIcons["v"]})
		.bindPopup("<b>Lars-Åke Erlandsson</b>, 45<br>Lärare<br>Varberg");
	var vKajsaLissel = L.marker([57.1082,12.2815], {icon: partyIcons["v"]})
		.bindPopup("<b>Kajsa Lissel</b>, 48<br>Stödassistent<br>Varberg");
	var vGerhardEriksson = L.marker([57.0966,12.2508], {icon: partyIcons["v"]})
		.bindPopup("<b>Gerhard Eriksson</b>, 69<br>Pensionär<br>Varberg");
	var vKjellErikKarlsson = L.marker([57.0959,12.2486], {icon: partyIcons["v"]})
		.bindPopup("<b>Kjell-Erik Karlsson</b>, 72<br>Pensionär<br>Varberg");
	var vIngelaSvensson = L.marker([57.1089,12.2554], {icon: partyIcons["v"]})
		.bindPopup("<b>Ingela Svensson</b>, 63<br>Kammaråklagare<br>Varberg");


	return L.layerGroup([vLarsAkeErlandsson,
						 vKajsaLissel,
						 vGerhardEriksson,
						 vKjellErikKarlsson,
						 vIngelaSvensson
					   ]);
}
