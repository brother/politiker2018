function loadMarkersForSPI() {
	var spiLennartLiljegren = L.marker([57.0713,12.267], {icon: partyIcons["spi"]})
		.bindPopup("<b>Lennart Liljegren</b><br>Senior<br>Varberg");
	var spiAnitaSvensson = L.marker([57.1103,12.268], {icon: partyIcons["spi"]})
		.bindPopup("<b>Anita Svensson</b><br>Sjuksköterska<br>Varberg");
	var spiMargaretaKall = L.marker([57.2196,12.2216], {icon: partyIcons["spi"]})
		.bindPopup("<b>Margareta Käll</b><br>Pers.ass.<br>Åskloster");
	var spiArneRichardsson = L.marker([57.1088,12.2571], {icon: partyIcons["spi"]})
		.bindPopup("<b>Arne Richardsson</b><br>Ingenjör<br>Varberg");
	var spiRosemaryLiljegren = L.marker([57.0711,12.2652], {icon: partyIcons["spi"]})
		.bindPopup("<b>Rosemary Liljegren</b><br>Senior<br>Varberg");

	return L.layerGroup([spiLennartLiljegren,
						 spiAnitaSvensson,
						 spiMargaretaKall,
						 spiArneRichardsson,
						 spiRosemaryLiljegren
					   ]);
}
