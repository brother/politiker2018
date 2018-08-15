function loadMarkersForMP() {
	var mpJohanRosander= L.marker([57.0774299,12.3902055], {icon: partyIcons["mp"]})
		.bindPopup("1. <b>Johan Rosander</b>, 36<br>Förskolelärare<br>Spannarp");
	var mpLinneaSandahl = L.marker([57.2673,12.3358], {icon: partyIcons["mp"]})
		.bindPopup("2. <b>Linnea Sandahl</b>, 25<br>Jämställdhets- och mångfaldssamordnare<br>Veddige");
	var mpSamuelLindh = L.marker([57.1104,12.2684], {icon: partyIcons["mp"]})
		.bindPopup("3. <b>Samuel Lindh</b>, 3<br>Statsvetare<br>Varberg");
	var mpSophiaNilsson = L.marker([57.1157,12.2625], {icon: partyIcons["mp"]})
		.bindPopup("4. <b>Sophia Nilsson</b>, 41<br>Lärare<br>Brunnsberg");
	var mpPeterRudhager = L.marker([57.0886,12.2723], {icon: partyIcons["mp"]})
		.bindPopup("5. <b>Peter Rudhager</b>, 53<br>Barnskötare<br>Breared");
	var mpPeterBjorck = L.marker([57.1083,12.2786], {icon: partyIcons["mp"]})
		.bindPopup("6. <b>Peter Björck</b>, 38<br>Butikschef<br>Karlberg");
	var mpStefanEdlund = L.marker([57.13951,12.23263], {icon: partyIcons["mp"]})
		.bindPopup("7. <b>Stefan Edlund</b>, 52<br>Lärare<br>Varberg");

	return L.layerGroup([mpJohanRosander,
						 mpLinneaSandahl,
						 mpSamuelLindh,
						 mpSophiaNilsson,
						 mpPeterRudhager,
						 mpPeterBjorck,
						 mpStefanEdlund]
					   );
}
