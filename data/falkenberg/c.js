function loadMarkersForC() {
	var cPerJohansson = L.marker([56.9055,12.4909], {icon: partyIcons["c"]})
		.bindPopup("1. <b>Per Johansson</b>, 34<br>Organisationsutvecklare<br>Falkenberg");
	var cToreHolmefalk = L.marker([56.9434,12.3726], {icon: partyIcons["c"]})
		.bindPopup("2. <b>Tore Holmefalk</b>, 59<br>Egenföretagare<br>Glommen");
	var cAnetteIvarsson = L.marker([57.0512,12.9541], {icon: partyIcons["c"]})
		.bindPopup("3. <b>Anette Ivarsson</b>, 58<br>Egenföretagare<br>Krogsered");
	var cAnneliAndelen = L.marker([56.8797,12.5486], {icon: partyIcons["c"]})
		.bindPopup("4. <b>Anneli Andelèn</b>, 50<br>VD Maa Såg<br>Skrea");
	var cStigAgnaker = L.marker([56.90638,12.49636], {icon: partyIcons["c"]})
		.bindPopup("5. <b>Stig Agnåker</b>, 75<br>Fritidspolitiker<br>Falkenberg");
	var cMariaLarsson = L.marker([57.0458,12.6153], {icon: partyIcons["c"]})
		.bindPopup("6. <b>47</b>, 47<br>Arbetsledare<br>Köinge");
	var cDavidAndersson = L.marker([56.9155,12.5296], {icon: partyIcons["c"]})
		.bindPopup("7. <b>David Andersson</b>, 39<br>VD miljöinnovationsföretag/Lärare Chalmers<br>Falkenberg");
	var cPetraEriksson = L.marker([56.9431,12.5538], {icon: partyIcons["c"]})
		.bindPopup("8. <b>Petra Eriksson</b>, 45<br>Historiker/Konstvetare<br>Vinberg");
	var cMartinHafstrand = L.marker([57.2402,12.9267], {icon: partyIcons["c"]})
		.bindPopup("9. <b>Martin Hafstrand</b>, 40<br>Egenföretagare/Grävmaskinist<br>Älvsered");
	var cAnnaAndersson = L.marker([56.8818,12.6279], {icon: partyIcons["c"]})
		.bindPopup("10. <b>Anna Andersson</b>, 43<br>Redovisningskonsult<br>Heberg");
	var cShlomoGavie = L.marker([56.8999,12.6751], {icon: partyIcons["c"]})
		.bindPopup("11. <b>Shlomo Gavie</b>, 64<br>Egenföretagare,<br>Heberg");
	var cLenaCarlbom = L.marker([56.9107,12.4875], {icon: partyIcons["c"]})
		.bindPopup("12. <b>Lena Carlbom</b>, 53<br>Verksamhetsledare ASF<br>Falkenberg");
	var cSvenOlofLundin = L.marker([56.8911,12.4985], {icon: partyIcons["c"]})
		.bindPopup("13. <b>Sven-Olof Lundin</b>, 53<br>Rektor<br>Falkenberg");

	return L.layerGroup([cPerJohansson,
						 cToreHolmefalk,
						 cAnetteIvarsson,
						 cAnneliAndelen,
						 cStigAgnaker,
						 cMariaLarsson,
						 cDavidAndersson,
						 cPetraEriksson,
						 cMartinHafstrand,
						 cAnnaAndersson,
						 cShlomoGavie,
						 cLenaCarlbom,
						 cSvenOlofLundin
						]);
}
