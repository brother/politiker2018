function loadMarkersForS() {
    var cDennisJeryd = L.marker([57.8230015,12.2784792], {icon: partyIcons["s"]})
	.bindPopup("1. <b>Dennis Jeryd</b>, Lerum<br>");
    var cKarolinaRoughton = L.marker([57.7774069,12.2686436], {icon: partyIcons["s"]})
        .bindPopup("2. <b>Karolina Roughton</b>, Lerum<br>");
    var cErikLarsson = L.marker([57.8371875,12.3012319], {icon: partyIcons["s"]})
        .bindPopup("3. <b>Erik Larsson</b>, Gråbo<br>");
    var cReneeJeryd = L.marker([57.8229815,12.2782772], {icon: partyIcons["s"]})
        .bindPopup("4. <b>Renée Jeryd</b>, Gråbo<br>");
    var cOlleAdolfsson = L.marker([57.7892768,12.3157412], {icon: partyIcons["s"]})
        .bindPopup("5. <b>Olle Adolfsson</b>, Stenkullen<br>");
    var cKlaraMartionsson = L.marker([57.8172587,12.3450575], {icon: partyIcons["s"]})
        .bindPopup("6. <b>Klara Martinsson</b>, Floda<br>");
    var cHalimAzemi = L.marker([57.7824253,12.2818998], {icon: partyIcons["s"]})
        .bindPopup("7. <b>Halim Azemi</b>, Lerum<br>");
    var cSaraJaderklint = L.marker([57.7653898,12.2697205], {icon: partyIcons["s"]})
        .bindPopup("8. <b>Sara Jäderklint</b>, Lerum<br>");
    var cUlfLarsson = L.marker([57.8374895,12.3016339], {icon: partyIcons["s"]})
        .bindPopup("9. <b>Ulf Larsson</b>, Gråbo<br>");
    var cPamelaDanielsson = L.marker([57.7495129,12.2534547], {icon: partyIcons["s"]})
        .bindPopup("10. <b>Pamela Danielsson</b>, Lerum<br>");
    var cPaulWeis = L.marker([57.7495129,12.2534547], {icon: partyIcons["s"]})
        .bindPopup("11. <b>Paul Weis</b>, Gråbo<br>");
    var cGunBrittDelsvikSvensson = L.marker([57.7488272,12.2492294], {icon: partyIcons["s"]})
        .bindPopup("12. <b>Gun-Britt Delsvik Svensson</b>, Lerum<br>");
    var cLeifKlintbäck = L.marker([57.748259,12.250915], {icon: partyIcons["s"]})
        .bindPopup("13. <b>Leif Klintbäck</b>, Lerum<br>");

    return L.layerGroup([cDennisJeryd,
			 cKarolinaRoughton,
			 cErikLarsson,
			 cReneeJeryd,
			 cOlleAdolfsson,
			 cKlaraMartionsson,
			 cHalimAzemi,
			 cSaraJaderklint,
			 cUlfLarsson,
			 cPamelaDanielsson,
			 cPaulWeis,
			 cGunBrittDelsvikSvensson,
			 cLeifKlintbäck,
			]);
}
