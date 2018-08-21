function loadMarkersForMP() {
	var mpOlaNilsson = L.marker([56.7244,13.1441], {icon: partyIcons["mp"]})
		.bindPopup("1. <b>Ola Nilsson</b>, 49<br>Lärare<br>Simlångsdalen");
	var mpToveBergman = L.marker([56.66915,12.87674], {icon: partyIcons["mp"]})
		.bindPopup("2. <b>Tove Bergman</b>, 60<br>Författare<br>Nyhem");
	var mpSveinHenriksen = L.marker([56.8209,12.7495], {icon: partyIcons["mp"]})
		.bindPopup("3. <b>Svein Henriksen</b>, 50<br>Socionom<br>Getinge");
	var mpIdaWestin = L.marker([56.6716,12.8625], {icon: partyIcons["mp"]})
		.bindPopup("4. <b>Ida Westin</b>, 27<br>Socialsekreterare<br>Centrum");
	var mpAndersBergh = L.marker([56.7481,12.6416], {icon: partyIcons["mp"]})
		.bindPopup("5. <b>Anders Bergh</b>, 36<br>Förskollärarstudent<br>Särdal");
	var mpMariaSöderberg = L.marker([56.6772,12.8646], {icon: partyIcons["mp"]})
		.bindPopup("6. <b>Maria Söderberg</b>, 30<br>Klimatstrateg<br>Centrum");
	var mpMikaelOstman = L.marker([56.66915,12.87684], {icon: partyIcons["mp"]})
		.bindPopup("7. <b>Mikael Östman</b>, 61<br>Arkitekt<br>Nyhem");


	return L.layerGroup([mpOlaNilsson,
						 mpToveBergman,
						 mpSveinHenriksen,
						 mpIdaWestin,
						 mpAndersBergh,
						 mpMariaSöderberg,
						 mpMikaelOstman
					   ]);
}
