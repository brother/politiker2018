function loadMarkersForS() {
	var sJanaNilsson = L.marker([57.1101,12.2701], {icon: partyIcons["s"]})
		.bindPopup("<b>Jana Nilsson</b>, 58<br>Varberg");
	var sJeanetteQvist = L.marker([57.0731,12.268], {icon: partyIcons["s"]})
		.bindPopup("<b>Jeanette Qvist</b>, 49<br>Södra Näs");
	var sLukasAxelssonNord = L.marker([57.1293,12.4607], {icon: partyIcons["s"]})
		.bindPopup("<b>Lukas Axelsson Nord</b>, 26<br>Grimeton");
	var sTuridRavloSvensson = L.marker([57.0598,12.2789], {icon: partyIcons["s"]})
		.bindPopup("<b>Turid Ravlo Svensson</b>, 63<br>Träslövsläge");
	var sTomasJohansson = L.marker([57.0903,12.2699], {icon: partyIcons["s"]})
		.bindPopup("<b>Tomas Johansson</b>, 61<br>Varberg");
	var sLindaBerggren = L.marker([57.054,12.2891], {icon: partyIcons["s"]})
		.bindPopup("<b>Linda Berggren</b>, 47<br>Träslövsläge");
	var sAndersFriebe = L.marker([57.2312,12.318], {icon: partyIcons["s"]})
		.bindPopup("<b>Anders Friebe</b>, 53<br>Derome");
	var sJennyBolgert = L.marker([57.094,12.2503], {icon: partyIcons["s"]})
		.bindPopup("<b>Jenny Bolgert</b>, 38<br>Varberg");
	var sAntonElRaai = L.marker([57.1129,12.283], {icon: partyIcons["s"]})
		.bindPopup("<b>Anton El Raai</b>, 23<br>Varberg");
	var sMalinKjellberg = L.marker([57.2379,12.1182], {icon: partyIcons["s"]})
		.bindPopup("<b>Malin Kjellberg</b>, 45<br>Bua");
	var sLennartJohansson = L.marker([57.1087,12.2856], {icon: partyIcons["s"]})
		.bindPopup("<b>Lennart Johansson</b>, 61<br>Varberg");
	var sJuliaNordAxelsson = L.marker([57.111,12.2692], {icon: partyIcons["s"]})
		.bindPopup("<b>Julia Nord Axelsson</b>, 22<br>Varberg");
	var sLennartIsaksson = L.marker([57.1044,12.2567], {icon: partyIcons["s"]})
		.bindPopup("<b>Lennart Isaksson</b>, 63<br>Varberg");
	var sAnnBrittJanssonBenskold = L.marker([57.0429,12.4], {icon: partyIcons["s"]})
		.bindPopup("<b>Ann-Britt Jansson Bensköld</b>, 55<br>Tvååker");
	var sHakanJohannesson = L.marker([57.0532,12.2794], {icon: partyIcons["s"]})
		.bindPopup("<b>Håkan Johannesson</b>, 67<br>Träslövsläge");
	var sKatarinaEiderbrant = L.marker([57.0527,12.2817], {icon: partyIcons["s"]})
		.bindPopup("<b>Katarina Eiderbrant</b>, 54<br>Träslövsläge");
	var sPeterStoltz = L.marker([57.305,12.5639], {icon: partyIcons["s"]})
		.bindPopup("<b>Peter Stoltz</b>, 58<br>Kungsäter");
	var sBirgittaSagdahlWildtberg = L.marker([57.2367,12.1279], {icon: partyIcons["s"]})
		.bindPopup("<b>Birgitta Sagdahl Wildtberg</b>, 71<br>Bua");
	var sKentNorberg = L.marker([57.0945,12.2493], {icon: partyIcons["s"]})
		.bindPopup("<b>Kent Norberg</b>, 51<br>Varberg");
	var sRitaWiberg = L.marker([57.1184,12.2105], {icon: partyIcons["s"]})
		.bindPopup("<b>Rita Wiberg</b>, 68<br>Getterön");
	var sSamuelMolin = L.marker([57.2164,12.2222], {icon: partyIcons["s"]})
		.bindPopup("<b>Samuel Molin</b>, 18<br>Åskloster");
	var sIngMarieBerggren = L.marker([57.1041,12.2859], {icon: partyIcons["s"]})
		.bindPopup("<b>Ing-Marie Berggren</b>, 66<br>Varberg");
	var sRolandRyberg = L.marker([57.1179,12.2737], {icon: partyIcons["s"]})
		.bindPopup("<b>Roland Ryberg</b>, 65<br>Varberg");

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
