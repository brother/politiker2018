//6
function loadMarkersForSD() {
	var sd = L.marker([10,10], {icon: partyIcons["sd"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([sd
						 ]);
}
