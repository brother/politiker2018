//2
function loadMarkersForL() {
	var l = L.marker([10,10], {icon: partyIcons["l"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([l
						]);
}
