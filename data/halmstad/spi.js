function loadMarkersForSPI() {
	var spiBoFridolph = L.marker([56.6605,12.8059], {icon: partyIcons["spi"]})
		.bindPopup("1. <b>Bo Fridolph</b>");
	var spiRutgerJohannesson = L.marker([56.6789,12.8608], {icon: partyIcons["spi"]})
		.bindPopup("2. <b>Rutger Johannesson</b>");
	var spiTorstenNilsson = L.marker([56.6812,12.8668], {icon: partyIcons["spi"]})
		.bindPopup("3. <b>Torsten Nilsson</b><br>Markörens placering<br>då jag inte vet mer exakt...<br>hjälp gärna till.");
	var spiWaseemBakko = L.marker([56.6640,12.8092], {icon: partyIcons["spi"]})
		.bindPopup("4. <b>Waseem Bakko</b>");
	var spiArnoldGustavsson = L.marker([56.6535,12.7982], {icon: partyIcons["spi"]})
		.bindPopup("5. <b>Arnold Gustavsson</b>");


	return L.layerGroup([spiBoFridolph,
						 spiRutgerJohannesson,
						 spiTorstenNilsson,
						 spiWaseemBakko,
						 spiArnoldGustavsson
					   ]);
}
