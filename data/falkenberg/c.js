//10
function loadMarkersForC() {
	var c = L.marker([10,10], {icon: partyIcons["c"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([c
						]);
}
