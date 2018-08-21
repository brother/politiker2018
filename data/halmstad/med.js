function loadMarkersForMED() {
	var medMilosVarcakovic = L.marker([56.6656,12.8745], {icon: partyIcons["med"]})
		.bindPopup("1. <b>Milos Varcakovic</b>, statstjänsteman<br>Halmstad");

	return L.layerGroup([medMilosVarcakovic]);
}
