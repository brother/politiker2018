function loadMarkersForC() {
    var cEvaAndersson = L.marker([57.8455,12.3427], {icon: partyIcons["c"]})
	.bindPopup("1. <b>Eva Andersson</b><br>Kommunalråd<br>Gråbo");
    var cRobertBlomberg = L.marker([57.7848634,12.2722966], {icon: partyIcons["c"]})
	.bindPopup("2. <b>Robert Blomberg</b><br>Dataingenjör<br>Lerum");
    var cIngelaGyllesten = L.marker([57.9140046,12.3640592], {icon: partyIcons["c"]})
	.bindPopup("3. <b>Ingela Gyllesten</b><br>Biståndshandläggare<br>Sjövik");
    var cLennartWassenius = L.marker([57.7715635,12.2709849], {icon: partyIcons["c"]})
	.bindPopup("4. <b>Lennart Wassenius</b><br>Ingenjör<br>Lerum");
    var cGunnyKron = L.marker([57.8289667,12.3745345], {icon: partyIcons["c"]})
	.bindPopup("5. <b>Gunny Kron</b><br>Företagare marknadskommunikation<br>Floda");
    var cJonatanSkagerberg = L.marker([57.7657502,12.2688322], {icon: partyIcons["c"]})
	.bindPopup("6. <b>Jonatan Skagerberg</b><br>Studerande<br>Lerum");
    var cChristopherHansson = L.marker([57.8036415,12.3627102], {icon: partyIcons["c"]})
	.bindPopup("7. <b>Christopher Hansson</b><br>Revisor<br>Floda");
    var cLernyHermansson = L.marker([57.9117095,12.3676478], {icon: partyIcons["c"]})
	.bindPopup("8. <b>Lerny Hermansson</b><br>Sektorschef<br>Sjövik");
    var cAnnMariTörnell = L.marker([57.7660551,12.257752], {icon: partyIcons["c"]})
	.bindPopup("9. <b>Ann-Mari Törnell</b><br>Fd. enhetschef arbetsmarknad<br>Lerum");
    var cClaesBerlin = L.marker([57.7551166,12.2360502], {icon: partyIcons["c"]})
	.bindPopup("10. <b>Claes Berlin</b><br>Rymdingenjör<br>Aspen");
    var cIngvarRinghage = L.marker([57.7994194,12.3557104], {icon: partyIcons["c"]})
        .bindPopup("11. <b>Ingvar Ringhage</b><br>Byggnadsarbetare<br>Floda");
    var cMariaVallin = L.marker([57.7533296,12.2532026], {icon: partyIcons["c"]})
        .bindPopup("12. <b>Maria Vallin</b><br>Socionom<br>Lerum");
    var cMikaelDockered = L.marker([57.875255,12.3271488], {icon: partyIcons["c"]})
        .bindPopup("13. <b>Mikael Dockered</b><br>Affärsutvecklare<br>Björboholm");

    return L.layerGroup([cClaesBerlin,
			 cAnnMariTörnell,
			 cLernyHermansson,
			 cChristopherHansson,
			 cJonatanSkagerberg,
			 cGunnyKron,
			 cLennartWassenius,
			 cIngelaGyllesten,
			 cRobertBlomberg,
			 cEvaAndersson,
			 cIngvarRinghage,
			 cMariaVallin,
			 cMikaelDockered
			]);
}
