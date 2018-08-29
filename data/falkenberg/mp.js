function loadMarkersForMP() {
	var mpMarkusJongren = L.marker([56.9141,12.4333], {icon: partyIcons["mp"]})
		.bindPopup("1. <b>Markus Jöngren</b>, 37<br>Molekylärbiolog<br>Skogstorp");
	var mpSusanneRabius = L.marker([56.9868,12.6793], {icon: partyIcons["mp"]})
		.bindPopup("2. <b>Susanne Råbius</b>, 59<br>Lärare<br>Vessigebro");
	var mpLenaBerglund = L.marker([57.0820,12.6285], {icon: partyIcons["mp"]})
		.bindPopup("3. <b>Lena Berglund</b>, 60<br>Arkeolog<br>Falkenberg");
	var mpVagnAbel = L.marker([56.9513,12.6692], {icon: partyIcons["mp"]})
		.bindPopup("4. <b>Vagn Abel</b>, 68<br>Företagare<br>Vessigebro");
	var mpTommyNilsson = L.marker([56.9126,12.5086], {icon: partyIcons["mp"]})
		.bindPopup("5. <b>Tommy Nilsson</b>, 42<br>Falkenberg");

	return L.layerGroup([mpMarkusJongren,
						 mpSusanneRabius,
						 mpLenaBerglund,
						 mpVagnAbel,
						 mpTommyNilsson
						]);
}
