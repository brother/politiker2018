function loadMarkersForSD() {
	var sdFabioIshaq = L.marker([56.6731,12.8219], {icon: partyIcons["sd"]})
		.bindPopup("1. <b>Fabio Ishaq</b>, 34<br>VD");
	var sdAntonNilsson = L.marker([10,10], {icon: partyIcons["sd"]})
		.bindPopup("2. <b>Anton Nilsson</b>, 24<br>Säljare");
	var sdTorIngels = L.marker([56.6592,12.7935], {icon: partyIcons["sd"]})
		.bindPopup("3. <b>Tor Ingels</b>, 51<br>Läkare");
	var sdAndreaSkoglund = L.marker([56.8038,12.9652], {icon: partyIcons["sd"]})
		.bindPopup("4. <b>Andréa Skoglund</b>, 35<br>Undersköterska");
	var sdUlfHolmgren = L.marker([56.6501,12.9212], {icon: partyIcons["sd"]})
		.bindPopup("5. <b>Ulf Holmgren</b>, 60<br>Vårdbiträde");
	var sdAndreasAhlqvist = L.marker([56.6844,12.8790], {icon: partyIcons["sd"]})
		.bindPopup("6. <b>Andreas Ahlqvist</b>, 44<br>Teamchef");
	var sdLarsBjörk = L.marker([56.6672,12.8537], {icon: partyIcons["sd"]})
		.bindPopup("7. <b>Lars Björk</b>, 64<br>Pensionär");
	var sdJoacimSvensson = L.marker([56.8255,13.1063], {icon: partyIcons["sd"]})
		.bindPopup("8. <b>Joacim Svensson</b>, 53<br>Entreprenör");
	var sdPerOveAndersson = L.marker([56.7823,12.8325], {icon: partyIcons["sd"]})
		.bindPopup("9. <b>Per Ove Andersson</b>, 66<br>Pensionär");

	return L.layerGroup([sdFabioIshaq,
						 sdTorIngels,
						 sdAndreaSkoglund,
						 sdUlfHolmgren,
						 sdAndreasAhlqvist,
						 sdLarsBjörk,
						 sdJoacimSvensson,
						 sdPerOveAndersson
					   ]);
}
