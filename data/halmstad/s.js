function loadMarkersForS() {
	var sKrissiKristinaJohansson = L.marker([56.6554,12.8015], {icon: partyIcons["s"]})
		.bindPopup("1. <b>Krissi Kristina Johansson</b>, 45<br>Bäckagård");
	var sStefanPalsson = L.marker([56.6751,12.8754], {icon: partyIcons["s"]})
		.bindPopup("2. <b>Stefan Pålsson</b>, 27<br>Nyatorp");
	var sIngegerdSahlstrom = L.marker([56.6768,12.8582], {icon: partyIcons["s"]})
		.bindPopup("3. <b>Ingegerd Sahlström</b>, 74<br>Centrum");
	var sFredrikLuhanka = L.marker([56.6717,12.8858], {icon: partyIcons["s"]})
		.bindPopup("4. <b>Fredrik Luhanka</b>, 32<br>Gustavsfält");
	var sFatmaHergul = L.marker([56.6615,12.7823], {icon: partyIcons["s"]})
		.bindPopup("5. <b>Fatma Hergül</b>, 54<br>Söndrum");
	var sTonyStane = L.marker([56.6709,12.8625], {icon: partyIcons["s"]})
		.bindPopup("6. <b>Tony Stané</b>, 52<br>Centrum");
	var sGunBrittLofdahl = L.marker([56.6993,12.8664], {icon: partyIcons["s"]})
		.bindPopup("7. <b>Gun-Britt Löfdahl</b>, 50<br>Kärleken");
	var sTordJohansson = L.marker([56.67587,12.85650], {icon: partyIcons["s"]})
		.bindPopup("8. <b>Tord Johansson</b>, 60<br>Centrum");
	var sSofiaLevin = L.marker([56.6762,12.8660], {icon: partyIcons["s"]})
		.bindPopup("9. <b>Sofia Levin</b>, 27<br>Centrum");
	var sLarsElHayek = L.marker([56.6483,12.9290], {icon: partyIcons["s"]})
		.bindPopup("10. <b>Lars El Hayek</b>, 26<br>Fyllinge");
	var sCarinSoderberg = L.marker([56.6651,12.7997], {icon: partyIcons["s"]})
		.bindPopup("11. <b>Carin Söderberg</b>, 49<br>Söndrum");
	var sMicaelNilsson = L.marker([56.6694,12.9055], {icon: partyIcons["s"]})
		.bindPopup("12. <b>Micael Nilsson</b>, 49<br>Snöstorp");
	var sChristelEriksson = L.marker([56.6912,12.8867], {icon: partyIcons["s"]})
		.bindPopup("13. <b>Christel Eriksson</b>, 66<br>Frennarp");
	var sMichaelSvensson = L.marker([56.6807,12.9205], {icon: partyIcons["s"]})
		.bindPopup("14. <b>Michael Svensson</b>, 60<br>Vallås");
	var sSandraLobergErlandsson = L.marker([56.6766,12.8663], {icon: partyIcons["s"]})
		.bindPopup("15. <b>Sandra Löberg Erlandsson</b>, 32<br>Centrum");
	var sKentGustafsson = L.marker([56.8168,12.7351], {icon: partyIcons["s"]})
		.bindPopup("16. <b>Kent Gustafsson</b>, 58<br>Getinge");
	var sLenitaStrandberg = L.marker([56.6172,12.9405], {icon: partyIcons["s"]})
		.bindPopup("17. <b>Lenita Strandberg</b>, 52<br>Trönninge");
	var sBengtEkberg = L.marker([56.7865,12.9587], {icon: partyIcons["s"]})
		.bindPopup("18. <b>Bengt Ekberg</b>, 80<br>Oskarström");
	var sErikaOlivares = L.marker([56.6717,12.8868], {icon: partyIcons["s"]})
		.bindPopup("19. <b>Erika Olivares</b>, 51<br>Gustavsfält");
	var sFolkeAlfredsson = L.marker([56.5847,12.9496], {icon: partyIcons["s"]})
		.bindPopup("20. <b>Folke Alfredsson</b>, 51<br>Gullbranna");
	var sEvaMariePaulsson = L.marker([56.6697,12.8724], {icon: partyIcons["s"]})
		.bindPopup("21. <b>Eva-Marie Paulsson</b>, 47<br>Nyhem");
	var sAnteHultin = L.marker([56.7854,12.8331], {icon: partyIcons["s"]})
		.bindPopup("22. <b>Ante Hultin</b>, 56<br>Kvibille");
	var sRoseMarieHenriksson = L.marker([56.6867,12.9138], {icon: partyIcons["s"]})
		.bindPopup("23. <b>Rose-Marie Henriksson</b>, 74<br>Vallås");
	var sTommieHagg = L.marker([56.6844,12.8800], {icon: partyIcons["s"]})
		.bindPopup("24. <b>Tommie Hägg</b>, 51<br>Furet");
	var sAnneBergman = L.marker([56.6831,12.9120], {icon: partyIcons["s"]})
		.bindPopup("25. <b>Anne Bergman</b>, 45<br>Vallås");
	var sStefanHansson = L.marker([56.6785,12.8284], {icon: partyIcons["s"]})
		.bindPopup("26. <b>Stefan Hansson</b>, 62<br>Mickedala");
	var sRoseMarieJonsson = L.marker([56.6599,12.9011], {icon: partyIcons["s"]})
		.bindPopup("27. <b>Rose-Marie Jönsson</b>, 62<br>Andersberg");
	var sLeifGrenlund = L.marker([56.6845,12.8798], {icon: partyIcons["s"]})
		.bindPopup("28. <b>Leif Grenlund</b>, 68<br>Furet");

	return L.layerGroup([sKrissiKristinaJohansson,
						 sStefanPalsson,
						 sIngegerdSahlstrom,
						 sFredrikLuhanka,
						 sFatmaHergul,
						 sTonyStane,
						 sGunBrittLofdahl,
						 sTordJohansson,
						 sSofiaLevin,
						 sLarsElHayek,
						 sCarinSoderberg,
						 sMicaelNilsson,
						 sChristelEriksson,
						 sMichaelSvensson,
						 sSandraLobergErlandsson,
						 sKentGustafsson,
						 sLenitaStrandberg,
						 sBengtEkberg,
						 sErikaOlivares,
						 sFolkeAlfredsson,
						 sEvaMariePaulsson,
						 sAnteHultin,
						 sRoseMarieHenriksson,
						 sTommieHagg,
						 sAnneBergman,
						 sStefanHansson,
						 sRoseMarieJonsson,
						 sLeifGrenlund
					   ]);
}
