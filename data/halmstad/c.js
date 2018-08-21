function loadMarkersForC() {
	var cJennyAxelsson = L.marker([56.7217,13.1315], {icon: partyIcons["c"]})
		.bindPopup("1. <b>Jenny Axelsson</b>, 44<br>Kommunråd<br>Simlångsdalen");
	var cYngveKihlberg = L.marker([56.7018,12.8586], {icon: partyIcons["c"]})
		.bindPopup("2. <b>Yngve Kihlberg</b>, 53<br>Biodlingsföretagare<br>Kärleken");
	var cJennieWijk = L.marker([56.6784,12.8449], {icon: partyIcons["c"]})
		.bindPopup("3. <b>Jennie Wijk</b>, 48<br>Strateg/VD<br>Väster");
	var cHenrikAndersson = L.marker([56.7377,12.8551], {icon: partyIcons["c"]})
		.bindPopup("4. <b>Henrik Andersson</b>, 58<br>Agronom<br>Holm");
	var cAnnaGinstmark = L.marker([56.8218,12.7450], {icon: partyIcons["c"]})
		.bindPopup("5. <b>Anna Ginstmark</b>, 39<br>Teknisk säljare<br>Getinge");
	var cStaffanSvensson = L.marker([56.7407,12.7144], {icon: partyIcons["c"]})
		.bindPopup("6. <b>Staffan Svensson</b>, 50<br>Egenföretagare<br>Harplinge");
	var cHakanBjorklund = L.marker([56.6830,12.9172], {icon: partyIcons["c"]})
		.bindPopup("7. <b>Håkan Björklund</b>, 49<br>Lärare<br>Vallås");
	var cRebeccaBjallsjo = L.marker([56.6204,12.9499], {icon: partyIcons["c"]})
		.bindPopup("8. <b>Rebecca Bjällsjö</b>, 29<br>Förskollärare<br>Trönninge");
	var cGzimRamadani = L.marker([56.67921,12.86503], {icon: partyIcons["c"]})
		.bindPopup("9. <b>Gzim Ramadani</b>, 31<br>Frisör<br>Nissastrand");
	var cVictorRundqvist = L.marker([56.6657,12.8830], {icon: partyIcons["c"]})
		.bindPopup("10. <b>Victor Rundqvist</b>, 26<br>Ungdomspolitiker<br>Nyhem");
	var cLarsRolandSvensson = L.marker([56.8047,12.9610], {icon: partyIcons["c"]})
		.bindPopup("11. <b>Lars-Roland Svensson</b>, 66<br>F.d. Polis<br>Oskarström");


	return L.layerGroup([cJennyAxelsson,
						 cYngveKihlberg,
						 cJennieWijk,
						 cHenrikAndersson,
						 cAnnaGinstmark,
						 cStaffanSvensson,
						 cHakanBjorklund,
						 cRebeccaBjallsjo,
						 cGzimRamadani,
						 cVictorRundqvist,
						 cLarsRolandSvensson
					   ]);
}
