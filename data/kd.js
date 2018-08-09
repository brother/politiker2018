function loadMarkersForKD() {
	var kdMorganBorjesson = L.marker([57.2504,12.1812], {icon: partyIcons["kd"]})
		.bindPopup("1. <b>Morgan Börjesson</b>, 67<br>F.d. Arbetsmiljöingenjör<br>Väröbacka");
	var kdRogerKardemark = L.marker([57.1083,12.279], {icon: partyIcons["kd"]})
		.bindPopup("2. <b>Roger Kardemark</b>, 66<br>Senior<br>Varberg");
	var kdAnnKristinHerdell = L.marker([57.2669,12.3273], {icon: partyIcons["kd"]})
		.bindPopup("3. <b>Ann-Kristin Herdell</b>, 49<br>Förskollärare<br>Veddige");
	var kdReneeLjung = L.marker([57.09892,12.25238], {icon: partyIcons["kd"]})
		.bindPopup("4. <b>Renée Ljung</b>, 52<br>Sjuksköterska<br>Varberg");
	var kdKarlGunnarSvensson = L.marker([57.0569,12.2806], {icon: partyIcons["kd"]})
		.bindPopup("5. <b>Karl-Gunnar Svensson</b>, 61<br>Präst<br>Träslövsläge");


	return L.layerGroup([kdMorganBorjesson,
						 kdRogerKardemark,
						 kdAnnKristinHerdell,
						 kdReneeLjung,
						 kdKarlGunnarSvensson
					   ]);
}
