function loadMarkersForV() {
	var vTaniaBengtsson = L.marker([56.6915,12.8850], {icon: partyIcons["v"]})
		.bindPopup("1. <b>Tania Bengtsson</b>, 39<br>Lärare<br>Frennarp");
	var vDanielNilssonBroden = L.marker([56.6680,12.8546], {icon: partyIcons["v"]})
		.bindPopup("2. <b>Daniel Nilsson Brodén</b>, 23<br>Förskollärare<br>Söder");
	var vMariaJohansson = L.marker([56.6653,12.8830], {icon: partyIcons["v"]})
		.bindPopup("3. <b>Maria Johansson</b>, 40<br>Undersköterska<br>Nyhem");
	var vMikaelEkfeldt = L.marker([56.7219,13.1293], {icon: partyIcons["v"]})
		.bindPopup("4. <b>Mikael Ekfeldt</b>, 50<br>Socialpedagog<br>Simlångsdalen");
	var vMariannNorell = L.marker([56.6916,12.8869], {icon: partyIcons["v"]})
		.bindPopup("5. <b>Mariann Norell</b>, 70<br>Pensionär<br>Frennarp");
	var vPatricioFuentesOrellana = L.marker([56.6690,12.8764], {icon: partyIcons["v"]})
		.bindPopup("6. <b>Patricio Fuentes-Orellana</b>, 66<br>Ekonomiassistent<br>Nyhem");
	var vCleoLatifaKhaldi = L.marker([56.7145,12.6930], {icon: partyIcons["v"]})
		.bindPopup("7. <b>Cleo Latifa Khaldi</b>, 35<br>Undersköterska<br>Haverdal");


	return L.layerGroup([vTaniaBengtsson,
						 vDanielNilssonBroden,
						 vMariaJohansson,
						 vMikaelEkfeldt,
						 vMariannNorell,
						 vPatricioFuentesOrellana,
						 vCleoLatifaKhaldi
					   ]);
}
