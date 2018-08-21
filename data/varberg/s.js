function loadMarkersForS() {
	var sJanaNilsson = L.marker([57.1103,12.2701], {icon: partyIcons["s"]})
		.bindPopup("1. <b>Jana Nilsson</b>, 58<br>Varberg");
	var sJeanetteQvist = L.marker([57.0731,12.268], {icon: partyIcons["s"]})
		.bindPopup("2. <b>Jeanette Qvist</b>, 49<br>Södra Näs");
	var sLukasAxelssonNord = L.marker([57.1293,12.4607], {icon: partyIcons["s"]})
		.bindPopup("3. <b>Lukas Axelsson Nord</b>, 26<br>Grimeton");
	var sTuridRavloSvensson = L.marker([57.0569,12.2780], {icon: partyIcons["s"]})
		.bindPopup("4. <b>Turid Ravlo Svensson</b>, 63<br>Träslövsläge");
	var sTomasJohansson = L.marker([57.0903,12.2699], {icon: partyIcons["s"]})
		.bindPopup("5. <b>Tomas Johansson</b>, 61<br>Varberg");
	var sLindaBerggren = L.marker([57.0569,12.2850], {icon: partyIcons["s"]})
		.bindPopup("6. <b>Linda Berggren</b>, 47<br>Träslövsläge");
	var sAndersFriebe = L.marker([57.2312,12.318], {icon: partyIcons["s"]})
		.bindPopup("7. <b>Anders Friebe</b>, 53<br>Derome");
	var sJennyBolgert = L.marker([57.094,12.2503], {icon: partyIcons["s"]})
		.bindPopup("8. <b>Jenny Bolgert</b>, 38<br>Varberg");
	var sAntonElRaai = L.marker([57.1129,12.283], {icon: partyIcons["s"]})
		.bindPopup("9. <b>Anton El Raai</b>, 23<br>Varberg");
	var sMalinKjellberg = L.marker([57.2379,12.1182], {icon: partyIcons["s"]})
		.bindPopup("10. <b>Malin Kjellberg</b>, 45<br>Bua");
	var sLennartJohansson = L.marker([57.1082,12.2820], {icon: partyIcons["s"]})
		.bindPopup("11. <b>Lennart Johansson</b>, 61<br>Varberg");
	var sJuliaNordAxelsson = L.marker([57.1103,12.2692], {icon: partyIcons["s"]})
		.bindPopup("12. <b>Julia Nord Axelsson</b>, 22<br>Varberg");
	var sLennartIsaksson = L.marker([57.1044,12.2567], {icon: partyIcons["s"]})
		.bindPopup("13. <b>Lennart Isaksson</b>, 63<br>Varberg");
	var sAnnBrittJanssonBenskold = L.marker([57.0429,12.4], {icon: partyIcons["s"]})
		.bindPopup("14. <b>Ann-Britt Jansson Bensköld</b>, 55<br>Tvååker");
	var sHakanJohannesson = L.marker([57.0569,12.2785], {icon: partyIcons["s"]})
		.bindPopup("15. <b>Håkan Johannesson</b>, 67<br>Träslövsläge");
	var sKatarinaEiderbrant = L.marker([57.0569,12.2817], {icon: partyIcons["s"]})
		.bindPopup("16. <b>Katarina Eiderbrant</b>, 54<br>Träslövsläge");
	var sPeterStoltz = L.marker([57.305,12.5639], {icon: partyIcons["s"]})
		.bindPopup("17. <b>Peter Stoltz</b>, 58<br>Kungsäter");
	var sBirgittaSagdahlWildtberg = L.marker([57.2367,12.1279], {icon: partyIcons["s"]})
		.bindPopup("18. <b>Birgitta Sagdahl Wildtberg</b>, 71<br>Bua");
	var sKentNorberg = L.marker([57.0945,12.2493], {icon: partyIcons["s"]})
		.bindPopup("19. <b>Kent Norberg</b>, 51<br>Varberg");
	var sRitaWiberg = L.marker([57.12,12.2105], {icon: partyIcons["s"]})
		.bindPopup("20. <b>Rita Wiberg</b>, 68<br>Getterön");
	var sSamuelMolin = L.marker([57.2164,12.2222], {icon: partyIcons["s"]})
		.bindPopup("21. <b>Samuel Molin</b>, 18<br>Åskloster");
	var sIngMarieBerggren = L.marker([57.1041,12.2859], {icon: partyIcons["s"]})
		.bindPopup("22. <b>Ing-Marie Berggren</b>, 66<br>Varberg");
	var sRolandRyberg = L.marker([57.1179,12.2737], {icon: partyIcons["s"]})
		.bindPopup("23. <b>Roland Ryberg</b>, 65<br>Varberg");

	return L.layerGroup([sJanaNilsson,
						 sJeanetteQvist,
						 sLukasAxelssonNord,
						 sTuridRavloSvensson,
						 sTomasJohansson,
						 sLindaBerggren,
						 sAndersFriebe,
						 sJennyBolgert,
						 sAntonElRaai,
						 sMalinKjellberg,
						 sLennartJohansson,
						 sJuliaNordAxelsson,
						 sLennartIsaksson,
						 sAnnBrittJanssonBenskold,
						 sHakanJohannesson,
						 sKatarinaEiderbrant,
						 sPeterStoltz,
						 sBirgittaSagdahlWildtberg,
						 sKentNorberg,
						 sRitaWiberg,
						 sSamuelMolin,
						 sIngMarieBerggren,
						 sRolandRyberg
					   ]);
}
