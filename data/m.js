function loadMarkersForM() {
    var cAlexanderAbenius = L.marker([57.7869071,12.3020254], {icon: partyIcons["m"]})
	.bindPopup("1. <b>Alexander Abenius</b>, 28<br>Kommunalråd<br>");
    var cJeanetteAndersson = L.marker([57.7542788,12.2614858], {icon: partyIcons["m"]})
        .bindPopup("2. <b>Jeanette Andersson</b>, 49<br>Butiksansvarig<br>");
    var cViktorLundblad = L.marker([57.8154819,12.3531738], {icon: partyIcons["m"]})
        .bindPopup("3. <b>Viktor Lundblad</b>, 22<br>Student<br>");
    var cAnitaSkoglund = L.marker([57.7819359,12.2850863], {icon: partyIcons["m"]})
        .bindPopup("4. <b>Anita Skoglund</b>, 66<br>Fd Egenföretagare<br>");
    var cDouglasThisell = L.marker([57.7488334,12.250567], {icon: partyIcons["m"]})
        .bindPopup("5. <b>Douglas Thisell</b>, 69<br>Fd Kronokommisarie<br>");
    var cFridaHolzhausen = L.marker([57.7599456,12.2715624], {icon: partyIcons["m"]})
        .bindPopup("6. <b>Frida Holzhausen</b>, 19<br>Studerande<br>");
    var cOskarAhlman = L.marker([57.7717303,12.2693823], {icon: partyIcons["m"]})
        .bindPopup("7. <b>Oskar Ahlman</b>, 30<br>Studerande<br>");
    var cMarieJungtell = L.marker([57.7656154,12.2701897], {icon: partyIcons["m"]})
        .bindPopup("8. <b>Marie Jungtell</b>, 52<br>Financial Controller<br>");
    var cLarsGöranLarsson = L.marker([57.7543069,12.2521836], {icon: partyIcons["m"]})
        .bindPopup("9. <b>Lars-Göran Larsson</b>, 78<br>Tekn.DR<br>");
    var cGunHolmberg = L.marker([57.7487173,12.250808], {icon: partyIcons["m"]})
        .bindPopup("10. <b>Gun Holmberg</b>, 54<br>Egen verksamhet<br>");
    var cVincentNordgren = L.marker([57.7999434,12.369198], {icon: partyIcons["m"]})
        .bindPopup("11. <b>Vincent Nordgren</b>, 23<br>Statsvetarstudent<br>");
    var cMaritaSnällman = L.marker([57.7687681,12.2769924], {icon: partyIcons["m"]})
        .bindPopup("12. <b>Marita Snällman</b>, 62<br>Undersköterska<br>");
    var cMagnusLansenfeldt = L.marker([57.7715635,12.2709849], {icon: partyIcons["m"]})
        .bindPopup("13. <b>Magnus Lansenfeldt</b>, 73<br>Pensionär<br>");

    return L.layerGroup([cAlexanderAbenius,
			 cJeanetteAndersson,
			 cViktorLundblad,
			 cAnitaSkoglund,
			 cDouglasThisell,
			 cFridaHolzhausen,
			 cOskarAhlman,
			 cMarieJungtell,
			 cLarsGöranLarsson,
			 cGunHolmberg,
			 cVincentNordgren,
			 cMaritaSnällman,
			 cMagnusLansenfeldt
			]);
}
