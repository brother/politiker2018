//2
function loadMarkersForV() {
	var v = L.marker([10,10], {icon: partyIcons["v"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([v
						]);
}
