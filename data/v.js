function loadMarkersForV() {
    var cAnetteHolgersson = L.marker([57.812326,12.380261], {icon: partyIcons["v"]})
	.bindPopup("1. <b>Anette Holgersson</b>, Socionom<br>Floda<br>");
    var cAnnaEriksson = L.marker([57.780353,12.287307], {icon: partyIcons["v"]})
        .bindPopup("2. <b>Anna Eriksson</b>, Lärare<br>Lerum<br>");
    var cLenaHansson = L.marker([57.801580,12.333655], {icon: partyIcons["v"]})
        .bindPopup("3. <b>Lena Hansson</b>, Socionom<br>Floda<br>");
    var cSannaEngelbrektsson = L.marker([57.839018,12.296233], {icon: partyIcons["v"]})
        .bindPopup("4. <b>Sanna Engelbrektsson</b>, Barn- och Ungdomsledare<br>Gråbo<br>");
    var cAnitaForsberg = L.marker([57.773625,12.266622], {icon: partyIcons["v"]})
        .bindPopup("5. <b>Anita Forsberg</b>, Fd Banktjänsteman<br>Lerum<br>");
    var cGöranLeffler = L.marker([57.771748,12.272973], {icon: partyIcons["v"]})
        .bindPopup("6. <b>Göran Leffler</b>, Psykoterapeut<br>Lerum<br>");
    var cIngemarRahm = L.marker([57.796320,12.335372], {icon: partyIcons["v"]})
        .bindPopup("7. <b>Ingemar Rahm</b>, Floda<br>");
    var cUllaBrittCapingSalas = L.marker([57.810772,12.350135], {icon: partyIcons["v"]})
        .bindPopup("8. <b>Ulla-Britt Caping Salas</b>, Lärare<br>Floda<br>");
    var cJoannaArdebring = L.marker([57.775273,12.299581], {icon: partyIcons["v"]})
        .bindPopup("9. <b>Joanna Ardebring</b>, Undersköterska<br>Lerum<br>");
    var cStaffanGörande = L.marker([57.866076,12.441294], {icon: partyIcons["v"]})
        .bindPopup("10. <b>Staffan Görande</b>, Norsesund<br>");
    var cPederLundemo = L.marker([57.930913,12.346629], {icon: partyIcons["v"]})
        .bindPopup("11. <b>Peder Lundemo</b>, Före detta Ekonom<br>Sjövik<br>");
    var cPernillaWönter = L.marker([57.8447904,12.4396346], {icon: partyIcons["v"]})
        .bindPopup("12. <b>Pernilla Wönter</b>, Löneadministratör<br>Floda<br>OKÄNT VART HON BOR");
    var cMartinBerg = L.marker([57.7715635,12.2709849], {icon: partyIcons["v"]})
        .bindPopup("13. <b>Martin Berg</b>, Planeringsledare<br>");

    return L.layerGroup([cAnetteHolgersson,
			 cAnnaEriksson,
			 cLenaHansson,
			 cSannaEngelbrektsson,
			 cAnitaForsberg,
			 cGöranLeffler,
			 cIngemarRahm,
			 cUllaBrittCapingSalas,
			 cJoannaArdebring,
			 cStaffanGörande,
			 cPederLundemo,
			 cPernillaWönter,
			 cMartinBerg
			]);
}
