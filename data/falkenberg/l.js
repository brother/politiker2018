function loadMarkersForL() {
	var lLarsFagerstrom = L.marker([56.8975,12.5039], {icon: partyIcons["l"]})
		.bindPopup("1. <b>Lars Fagerström</b>, 72<br>Lärare<br>Falkenberg");
	var lJonathanEsbjornsson = L.marker([56.8749,12.5227], {icon: partyIcons["l"]})
		.bindPopup("2. <b>Jonathan Esbjörnsson</b>, 33<br>IT-konsult<br>Falkenberg");
	var lLottaJohansson = L.marker([56.8999,12.4824], {icon: partyIcons["l"]})
		.bindPopup("3. <b>Lotta Johansson</b>, 30<br>Företagare<br>Falkenberg");
	var lNiclasErlandsson = L.marker([56.8168,12.6229], {icon: partyIcons["l"]})
		.bindPopup("4. <b>Niclas Erlandsson</b>, 47<br>Ordförande Studieförbundet Vuxenskolan<br>Ugglarp");
	var lLenaEngstrom = L.marker([56.8944,12.5268], {icon: partyIcons["l"]})
		.bindPopup("5. <b>Lena Engström</b>, 75<br>Lärare<br>Falkenberg");

	return L.layerGroup([lLarsFagerstrom,
						 lJonathanEsbjornsson,
						 lLottaJohansson,
						 lNiclasErlandsson,
						 lLenaEngstrom
						]);
}
