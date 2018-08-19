function loadMarkersForSD() {
    var cAlexanderChristiansson = L.marker([57.846190,12.274432], {icon: partyIcons["sd"]})
	.bindPopup("1. <b>Alexander Christiansson</b>, 37<br>Säljare<br>");
    var cRalfDahlgren = L.marker([57.850620,12.306619], {icon: partyIcons["sd"]})
        .bindPopup("2. <b>Ralf Dahlgren</b>, 65<br>fd Sjöman<br>");
    var cIngridSvensson = L.marker([57.782298,12.282887], {icon: partyIcons["sd"]})
        .bindPopup("3. <b>Ingrid Svensson</b>, 58<br>Vårditräde<br>");
    var cGlennSjögren = L.marker([57.811436,12.380596], {icon: partyIcons["sd"]})
        .bindPopup("4. <b>Glenn Sjögren</b>, 50<br>Fastighetsskötare<br>");
    var cChristopherSaart = L.marker([57.782275,12.282758], {icon: partyIcons["sd"]})
        .bindPopup("5. <b>Christopher Saart</b>, 35<br>Företagare<br>");
    var cPerHassel = L.marker([57.813195,12.357173], {icon: partyIcons["sd"]})
        .bindPopup("6. <b>Per Hassel</b>, 56<br>Utredare på skatteverket<br>");
    var cJannickeStranne = L.marker([57.816898,12.367387], {icon: partyIcons["sd"]})
        .bindPopup("7. <b>Jannicke Stranne</b>, 42<br>Truckförare<br>");
    var cMikaelJohansson = L.marker([57.838881,12.302499], {icon: partyIcons["sd"]})
        .bindPopup("8. <b>Mikael Johansson</b>, 53<br>Drifttekniker<br>");
    var cPerArneJadepalm = L.marker([57.823526,12.270656], {icon: partyIcons["sd"]})
        .bindPopup("9. <b>Per-Arne Jadepalm</b>, 69<br>Pensionär<br>");
    var cAikaAtka = L.marker([57.752106,12.264047], {icon: partyIcons["sd"]})
        .bindPopup("10. <b>Aika Atka</b>, 40<br>Elevassistent<br>");
    var cBoNordström = L.marker([57.806976,12.372537], {icon: partyIcons["sd"]})
        .bindPopup("11. <b>Bo Nordström</b>, 64<br>F.d Företagare<br>");

    return L.layerGroup([cAlexanderChristiansson,
			 cRalfDahlgren,
			 cIngridSvensson,
			 cGlennSjögren,
			 cChristopherSaart,
			 cPerHassel,
			 cJannickeStranne,
			 cMikaelJohansson,
			 cPerArneJadepalm,
			 cAikaAtka,
			 cBoNordström,
			]);
}
