function loadMarkersForL() {
	var lLovisaAldrin = L.marker([56.6598,12.7668], {icon: partyIcons["l"]})
		.bindPopup("1. <b>Lovisa Aldrin</b>, 36<br>Kommunråd<br>Karlstorp");
	var lPerCarlsson = L.marker([56.6667,12.8712], {icon: partyIcons["l"]})
		.bindPopup("2. <b>Per Carlsson</b>, 37<br>Officer<br>Nyhem");
	var lBarbroOdelberg = L.marker([56.6711,12.8298], {icon: partyIcons["l"]})
		.bindPopup("3. <b>Barbro Odelberg</b>, 69<br>f.d. journalist<br>Rotorp");
	var lSimonKarlsson = L.marker([56.6585,12.7589], {icon: partyIcons["l"]})
		.bindPopup("4. <b>Simon Karlsson</b>, 20<br>Lärarvikarie<br>Söndrum");
	var lEllenOsterberg = L.marker([56.6760,12.8627], {icon: partyIcons["l"]})
		.bindPopup("5. <b>Ellen Österberg</b>, 23<br>Maskiningenjör<br>Halmstad");
	var lMikaelWendt = L.marker([56.6669,12.8302], {icon: partyIcons["l"]})
		.bindPopup("6. <b>Mikael Wendt</b>, 62<br>Rektor<br>Alet");
	var lAnnicaElvroth = L.marker([56.6706,12.7365], {icon: partyIcons["l"]})
		.bindPopup("7. <b>Annica Elvroth</b>, 51<br>Försäkringsförmedlare<br>Frösakull");

	return L.layerGroup([lLovisaAldrin,
						 lPerCarlsson,
						 lBarbroOdelberg,
						 lSimonKarlsson,
						 lEllenOsterberg,
						 lMikaelWendt,
						 lAnnicaElvroth
					   ]);
}
