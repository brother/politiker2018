function loadMarkersForS() {
	var sPerSvensson = L.marker([56.8999,12.4844], {icon: partyIcons["s"]})
		.bindPopup("1. <b>Per Svensson</b>, 35<br>Oppositionsråd<br>Västra Gärdet");
	var sMarcelleFarjallah = L.marker([56.9118,12.5082], {icon: partyIcons["s"]})
		.bindPopup("2. <b>Marcelle Farjallah</b>, 56<br>Boendesekreterare<br>Östra Gärdet");
	var sPeterDygarden = L.marker([56.9088,12.5082], {icon: partyIcons["s"]})
		.bindPopup("3. <b>Peter Dygården</b>, 49<br>Anestesisjuksköterska<br>Östra Gärdet");
	var sKerstinRosell = L.marker([56.8916,12.5337], {icon: partyIcons["s"]})
		.bindPopup("4. <b>Kerstin Rosell</b>, 63<br>Handelsanställd<br>Slätten");
	var sBengtHackberg = L.marker([56.9308,12.5459], {icon: partyIcons["s"]})
		.bindPopup("5. <b>Bengt Hackberg</b>, 61<br>Förtroendevald<br>Vinbergs Kyrkby");
	var sChristinaJohansson = L.marker([56.9125,12.4338], {icon: partyIcons["s"]})
		.bindPopup("6. <b>Christina Johansson</b>, 56<br>årdare<br>Skogstorp");
	var sMarcusDufwa = L.marker([56.9112,12.4983], {icon: partyIcons["s"]})
		.bindPopup("7. <b>Marcus Dufwa</b>, 25<br>Civilekonom<br>Centrum");
	var sRebeckaKristensson = L.marker([56.9219,12.5302], {icon: partyIcons["s"]})
		.bindPopup("8. <b>Rebecka Kristensson</b>, 33<br>Miljöarbetare<br>Tröingeberg");
	var sBjornJonsson = L.marker([57.1363,12.7184], {icon: partyIcons["s"]})
		.bindPopup("9. <b>Björn Jönsson</b>, 42<br>Butiksbiträde<br>Ullared");
	var sYvonneNilsson = L.marker([56.9090,12.4824], {icon: partyIcons["s"]})
		.bindPopup("10. <b>Yvonne Nilsson</b>, 63<br>Undersköterska<br>Arvidstorp");
	var sMikaelSvensson = L.marker([56.8922,12.5336], {icon: partyIcons["s"]})
		.bindPopup("11. <b>Mikael Svensson</b>, 51<br>Kvalitetstekniker<br>Slätten");
	var sConnieKristensson = L.marker([56.9108,12.5039], {icon: partyIcons["s"]})
		.bindPopup("12. <b>Connie Kristensson</b>, 66<br>Fd. Undersköterska<br>Östra Gärdet");
	var sDahnPersson = L.marker([56.9120,12.5250], {icon: partyIcons["s"]})
		.bindPopup("13. <b>Dahn Persson</b>, 66<br>fd. Arbetsförmedlare<br>Tröingeberg");
	var sGabriellaGeertinger = L.marker([56.8999,12.4854], {icon: partyIcons["s"]})
		.bindPopup("14. <b>Gabriella Geertinger</b>, 27<br>Servicehandläggare<br>Västra Gärdet");
	var sMikaelSalomonsgard = L.marker([57.0053,12.6658], {icon: partyIcons["s"]})
		.bindPopup("15. <b>Mikael Salomonsgård</b>, 55<br>Utbildare<br>Askome");
	var sAidaBirinxhiku = L.marker([56.8793,12.5465], {icon: partyIcons["s"]})
		.bindPopup("16. <b>Aida Birinxhiku</b>, 19<br>Studerande<br>Skrea");
	var sJanDickens = L.marker([56.9075,12.5123], {icon: partyIcons["s"]})
		.bindPopup("17. <b>Jan Dickens</b>, 70<br>Pensionär<br>Östra Gärdet");
	var sYenGunnarsson = L.marker([56.8920,12.5166], {icon: partyIcons["s"]})
		.bindPopup("18. <b>Yen Gunnarsson</b>, 58<br>Egen Företagare<br>Kristineslätt");
	var sLarsOlofNilsson = L.marker([57.2412,12.8718], {icon: partyIcons["s"]})
		.bindPopup("19. <b>Lars-Olof Nilsson</b>, 50<br>Hyvelarbetare<br>Älvsered");
	var sMirandaBodiroza = L.marker([56.9333,12.3640], {icon: partyIcons["s"]})
		.bindPopup("20. <b>Miranda Bodiroza</b>, 18<br>Studerande<br>Glommen");
	var sThomasFagenheim = L.marker([56.8855,12.5181], {icon: partyIcons["s"]})
		.bindPopup("21. <b>Thomas Fagenheim</b>, 55<br>Studie/Yrkesvägledare<br>Hjortsberg");

	return L.layerGroup([sPerSvensson,
						 sMarcelleFarjallah,
						 sPeterDygarden,
						 sKerstinRosell,
						 sBengtHackberg,
						 sChristinaJohansson,
						 sMarcusDufwa,
						 sRebeckaKristensson,
						 sBjornJonsson,
						 sYvonneNilsson,
						 sMikaelSvensson,
						 sConnieKristensson,
						 sDahnPersson,
						 sGabriellaGeertinger,
						 sMikaelSalomonsgard,
						 sAidaBirinxhiku,
						 sJanDickens,
						 sYenGunnarsson,
						 sLarsOlofNilsson,
						 sMirandaBodiroza,
						 sThomasFagenheim
						]);
}
