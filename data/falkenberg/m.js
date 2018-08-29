//9
function loadMarkersForM() {
	var m = L.marker([10,10], {icon: partyIcons["m"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([m
						]);
}
