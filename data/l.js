function loadMarkersForL() {
    var cLillJansson = L.marker([57.834403,12.304387], {icon: partyIcons["l"]})
	.bindPopup("1. <b>Lill Jansson</b>, 53<br>Kommunalråd och Företagare<br>Gråbo");
    var cPeterNorling = L.marker([57.815615,12.347399], {icon: partyIcons["l"]})
        .bindPopup("2. <b>Peter Norling</b>, 47<br>Avdelningschef<br> Floda");
    var cHelenaGellerman = L.marker([57.772298,12.250228], {icon: partyIcons["l"]})
        .bindPopup("3. <b>Helena Gellerman</b>, 58<br>Civilingenjör<br> Lerum");
    var cRonnyJohansson = L.marker([57.794490,12.360606], {icon: partyIcons["l"]})
        .bindPopup("4. <b>Ronny Johansson</b>, 72<br>Företagare<br> Floda");
    var cNannaSiewertzTulinius = L.marker([57.777346,12.245676], {icon: partyIcons["l"]})
        .bindPopup("5. <b>Nanna Siewertz Tulinius</b>, 43<br>Projektutvecklare<br> Lerum");
    var cIngvarFrid = L.marker([57.817401,12.359147], {icon: partyIcons["l"]})
        .bindPopup("6. <b>Ingvar Frid</b>, 73<br>Med dr<br> Floda");
    var cViktoriaLindbergMartinell = L.marker([57.811046,12.354684], {icon: partyIcons["l"]})
        .bindPopup("7. <b>Viktoria Lindberg Martinell</b>, 49<br>Projektledare<br> Lerum");
    var cKajsaRäntfors = L.marker([57.764516,12.276492], {icon: partyIcons["l"]})
        .bindPopup("8. <b>Kajsa Räntfors</b>, 65<br>Arkitekt<br>Lerum");
    var cJonHjeltman = L.marker([57.8376497,12.2783868], {icon: partyIcons["l"]})
        .bindPopup("9. <b>Jon Hjeltman</b>, 40<br>Provningsingenjör<br>Gråbo");
    var cSophieSvensson = L.marker([57.771748,12.264476], {icon: partyIcons["l"]})
        .bindPopup("10. <b>Sophie Svensson</b>, 48<br>Kemist<br>Lerum");
    var cStefanLarsson = L.marker([57.771817,12.264433], {icon: partyIcons["l"]})
        .bindPopup("11. <b>Stefan Larsson</b>, 49<br>Socionom<br>Floda");
    var cGertAnderzen = L.marker([57.801466,12.372751], {icon: partyIcons["l"]})
        .bindPopup("12. <b>Gert Anderzén</b>, 54<br>civilingenjör/projektledare<br>Floda");
    var cChristerGellerman = L.marker([57.772318,12.250248], {icon: partyIcons["l"]})
        .bindPopup("13. <b>Christer Gellerman</b>, 58<br>Projektledare<br>Lerum");

    return L.layerGroup([cLillJansson,
			 cPeterNorling,
			 cHelenaGellerman,
			 cRonnyJohansson,
			 cNannaSiewertzTulinius,
			 cIngvarFrid,
			 cViktoriaLindbergMartinell,
			 cKajsaRäntfors,
			 cJonHjeltman,
			 cSophieSvensson,
			 cStefanLarsson,
			 cGertAnderzen,
			 cChristerGellerman
			]);
}
