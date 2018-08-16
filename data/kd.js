function loadMarkersForKd() {
    var cAnnelieLundström = L.marker([57.778410,12.393713], {icon: partyIcons["kd"]})
	.bindPopup("1. <b>Annelie Lundström</b>, Ambulanssjuksköterska <br>Gråbo<br>");
    var cChristianEberstein = L.marker([57.795725,12.365069], {icon: partyIcons["kd"]})
        .bindPopup("2. <b>Christian Eberstein</b>, Analytiker<br>Floda<br>");
    var cGunillaLindell = L.marker([57.837693,12.303357], {icon: partyIcons["kd"]})
        .bindPopup("3. <b>Gunilla Lindell</b>, Ekonomie Magister<br>Gråbo<br> ");
    var cJimPettersson = L.marker([57.807754,12.379231], {icon: partyIcons["kd"]})
        .bindPopup("4. <b>Jim Pettersson</b>, Undersköterska<br>Floda<br>");
    var cLenaCervin = L.marker([57.770007,12.269412], {icon: partyIcons["kd"]})
        .bindPopup("5. <b>Lena Cervin</b>, Rektor<br>Floda<br>");
    var cJensAbrahamsson = L.marker([57.749375,12.245564], {icon: partyIcons["kd"]})
        .bindPopup("6. <b>Jens Abrahamsson</b>, Civilingenjör<br>Lerum<br>");
    var cRoyaHeidariJorat = L.marker([57.837875,12.302842], {icon: partyIcons["kd"]})
        .bindPopup("7. <b>Roya Heidari Jorat</b>, Lärarstudent<br>Gråbo<br>");
    var cEfraimLjung = L.marker([57.812932,12.346399], {icon: partyIcons["kd"]})
        .bindPopup("8. <b>Efraim Ljung</b>, Projekteringschef<br>Floda<br>");
    var cDaphneSandberg = L.marker([57.841119,12.296920], {icon: partyIcons["kd"]})
        .bindPopup("9. <b>Daphne Sandberg</b>, Funktionssamordnare<br>Gråbo<br>");
    var cSvenArneHermansson = L.marker([57.842490,12.294087], {icon: partyIcons["kd"]})
        .bindPopup("10. <b>Sven-Arne Hermansson</b>, Entreprenör<br>Gråbo<br>");
    var cLillemorBohman = L.marker([57.795634,12.432017], {icon: partyIcons["kd"]})
        .bindPopup("11. <b>Lillemor Bohman</b>, Second handföreståndare<br>Tollered<br>");
    var cNicklasRaask = L.marker([57.845870,12.31674], {icon: partyIcons["kd"]})
        .bindPopup("12. <b>Nicklas Raask</b>, CIO/IT-entreprenör<br>Gråbo<br>");
    var cMarianneSundin = L.marker([57.912119,12.367250], {icon: partyIcons["kd"]})
        .bindPopup("13. <b>Marianne Sundin</b>, Fritidspedagog<br>Sjövik<br>");

    return L.layerGroup([cAnnelieLundström,
			 cChristianEberstein,
			 cGunillaLindell,
			 cJimPettersson,
			 cLenaCervin,
			 cJensAbrahamsson,
			 cRoyaHeidariJorat,
			 cEfraimLjung,
			 cDaphneSandberg,
			 cSvenArneHermansson,
			 cLillemorBohman,
			 cNicklasRaask,
			 cMarianneSundin
			]);
}
