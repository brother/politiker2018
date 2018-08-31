function loadMarkersForKD() {
	var kdGeorgiaFerris = L.marker([56.9115,12.4896], {icon: partyIcons["kd"]})
		.bindPopup("1. <b>Georgia Ferris</b>, 36<br>Innesäljare<br>Falkenberg");
	var kdEmilyCrowe = L.marker([56.9010,12.4930], {icon: partyIcons["kd"]})
		.bindPopup("2. <b>Emily Crowe</b>, 38<br>Studerande<br>Falkenberg");
	var kdAnitaAndersson = L.marker([56.9333,12.3630], {icon: partyIcons["kd"]})
		.bindPopup("3. <b>Anita Andersson</b>, 73<br>f.d. Verksamhetschef<br>Glommen");
	var kdSamuelHansson = L.marker([56.8872,12.6423], {icon: partyIcons["kd"]})
		.bindPopup("4. <b>Samuel Hansson</b>, 19<br>Ordförande KDU Halland<br>Heberg");
	var kdDanielBernhardt = L.marker([56.8999,12.4804], {icon: partyIcons["kd"]})
		.bindPopup("5. <b>Daniel Bernhardt</b>, 39<br>Enhetschef<br>Falkenberg");

	return L.layerGroup([kdGeorgiaFerris,
						 kdEmilyCrowe,
						 kdAnitaAndersson,
						 kdSamuelHansson,
						 kdDanielBernhardt
						]);
}
