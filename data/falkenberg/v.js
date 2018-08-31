function loadMarkersForV() {
	var vMikaelHallberg = L.marker([56.9098,12.5082], {icon: partyIcons["v"]})
		.bindPopup("1. <b>Mikael Hallberg</b><br>Östra Gärdet");
	var vAnitaGiden = L.marker([56.8989,12.4804], {icon: partyIcons["v"]})
		.bindPopup("2. <b>Anita Gidén</b><br>Västra Gärdet");
	var vLennartJohnsson = L.marker([56.9076,12.4933], {icon: partyIcons["v"]})
		.bindPopup("3. <b>Lennart Johnsson</b><br>Centrum");
	var vVeronicaSvensson = L.marker([56.9110,12.4748], {icon: partyIcons["v"]})
		.bindPopup("4. <b>Veronica Svensson</b><br>Falkagård");
	var vAkeAndersson = L.marker([56.9061,12.4733], {icon: partyIcons["v"]})
		.bindPopup("5. <b>Åke Andersson</b><br>Valencia");

	return L.layerGroup([vMikaelHallberg,
						 vAnitaGiden,
						 vLennartJohnsson,
						 vVeronicaSvensson,
						 vAkeAndersson
						]);
}
