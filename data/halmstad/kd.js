function loadMarkersForKD() {
	var kdEllaKardemark = L.marker([56.6664,12.8534], {icon: partyIcons["kd"]})
		.bindPopup("1. <b>Ella Kardemark</b>, 34<br>Företagare<br>Halmstad");
	var kdHenrikOstlund = L.marker([56.6843,12.8790], {icon: partyIcons["kd"]})
		.bindPopup("2. <b>Henrik Östlund</b>, 44<br>Regionchef<br>Halmstad");
	var kdMagnusHedman = L.marker([56.6664,12.8544], {icon: partyIcons["kd"]})
		.bindPopup("3. <b>Magnus Hedman</b>, 45<br>Civilekonom<br>Halmstad");
	var kdAnnetteNorden = L.marker([56.67329,12.86335], {icon: partyIcons["kd"]})
		.bindPopup("4. <b>Annette Nordén</b>, 54<br>Egenföretagare<br>Halmstad");
	var kdJohnnyRosenbergBodmar = L.marker([56.6782,12.8427], {icon: partyIcons["kd"]})
		.bindPopup("5. <b>Johnny Rosenberg Bodmar</b>, 31<br>Lärarstudent<br>Halmstad");

	return L.layerGroup([kdEllaKardemark,
						 kdHenrikOstlund,
						 kdMagnusHedman,
						 kdAnnetteNorden,
						 kdJohnnyRosenbergBodmar
					   ]);
}
