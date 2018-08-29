//18
function loadMarkersForS() {
	var s = L.marker([10,10], {icon: partyIcons["s"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([s
						]);
}
