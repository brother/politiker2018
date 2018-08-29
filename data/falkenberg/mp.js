//2
function loadMarkersForMP() {
	var mp = L.marker([10,10], {icon: partyIcons["mp"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([mp
						]);
}
