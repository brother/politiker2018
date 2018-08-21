// Reformist Neutral Partiet

//marker not clear. it's in the ocean...
function loadMarkersForRNP() {
	var rnpCharlottePersson = L.marker([56.6094,12.7905], {icon: partyIcons["rnp"]})
		.bindPopup("1. <b>Charlotte Persson</b>, Undersköterska");

	return L.layerGroup([rnpCharlottePersson]);
}
