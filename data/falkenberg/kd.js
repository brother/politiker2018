//2
function loadMarkersForKD() {
	var kd = L.marker([10,10], {icon: partyIcons["kd"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([kd
						]);
}
