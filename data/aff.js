function loadMarkersForAFF() {
	var affAndreasFeymark = L.marker([57.1468,12.4554], {icon: partyIcons["aff"]})
		.bindPopup("1. <b>Andreas Feymark</b>, 34<br>Teknologie doktor");
	var affJohannaPalmelid = L.marker([57.1464,12.4541], {icon: partyIcons["aff"]})
		.bindPopup("2. <b>Johanna Palmelid</b>, 36<br>Beteendevetare");
	var affHannaGotz = L.marker([57.1471,12.4565], {icon: partyIcons["aff"]})
		.bindPopup("3. <b>Hanna Götz</b>, 28<br>Undersköterska");
	var affAnnelieSinander = L.marker([57.1162,12.4757], {icon: partyIcons["aff"]})
		.bindPopup("4. <b>Annelie Sinander</b>, 24<br>Studerande");
	var affAlexanderIvarsson = L.marker([57.1614,12.5493], {icon: partyIcons["aff"]})
		.bindPopup("5. <b>Alexander Ivarsson</b>, 28<br>Mjölnare");

	return L.layerGroup([affAndreasFeymark,
						 affJohannaPalmelid,
						 affHannaGotz,
						 affAnnelieSinander,
						 affAlexanderIvarsson
					   ]);
}
