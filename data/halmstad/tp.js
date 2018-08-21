function loadMarkersForTP() {
	var tpIngeborgOleni = L.marker([56.6585,12.7825], {icon: partyIcons["tp"]})
		.bindPopup("1. <b>Ingeborg Oléni</b><br>Sjuksköterska/Vårdlärare");
	var tpMajLisAndersson = L.marker([56.6794,12.8523], {icon: partyIcons["tp"]})
		.bindPopup("2. <b>Maj-Lis Andersson</b><br>Banktjänsteman");
	var tpDanNilsson = L.marker([56.6844,12.8799], {icon: partyIcons["tp"]})
		.bindPopup("3. <b>Dan Nilsson</b><br>Elektroingenjör");
	var tpLennartNyberg = L.marker([56.8199,12.7321], {icon: partyIcons["tp"]})
		.bindPopup("4. <b>Lennart Nyberg</b><br>Teknisk officer");
	var tpKerstinNyberg = L.marker([56.8199,12.7331], {icon: partyIcons["tp"]})
		.bindPopup("5. <b>Kerstin Nyberg</b><br>Biståndshandläggare");

	return L.layerGroup([tpIngeborgOleni,
						 tpMajLisAndersson,
						 tpDanNilsson,
						 tpLennartNyberg,
						 tpKerstinNyberg
						]);
}
