function loadMarkersForDD() {
	var ddJanIsefalk = L.marker([56.68120,12.86080], {icon: partyIcons["dd"]})
		.bindPopup("1. <b>Jan Isefalk</b><br>Halmstad");

	return L.layerGroup([ddJanIsefalk]);
}
