function loadMarkersForC() {
    var cEvaAndersson = L.marker([57.8455,12.3427], {icon: partyIcons["c"]})
	.bindPopup("1. <b>Eva Andersson</b>, 43<br>Kommunalråd<br>Gråbo");
    var cRobertBlomberg = L.marker([57.7848634,12.2722966], {icon: partyIcons["c"]})
	.bindPopup("2. <b>Robert Blomberg</b>, 52<br>Dataingenjör<br>Lerum");
    var cIngelaGyllesten = L.marker([57.9140046,12.3640592], {icon: partyIcons["c"]})
	.bindPopup("3. <b>Ingela Gyllesten</b>, 65<br>Biståndshandläggare<br>Sjövik");
    var cLennartWassenius = L.marker([57.7715635,12.2709849], {icon: partyIcons["c"]})
	.bindPopup("4. <b>Lennart Wassenius</b>, 44<br>Ingenjör<br>Lerum");
    var cGunnyKron = L.marker([57.8289667,12.3745345], {icon: partyIcons["c"]})
	.bindPopup("5. <b>Gunny Kron</b>, 52<br>Företagare marknadskommunikation<br>Floda");
    var cJonatanSkagerberg = L.marker([57.7657502,12.2688322], {icon: partyIcons["c"]})
	.bindPopup("6. <b>Jonatan Skagerberg</b>, 62<br>Studerande<br>Lerum");
    var cChristopherHansson = L.marker([57.8036415,12.3627102], {icon: partyIcons["c"]})
	.bindPopup("7. <b>Christopher Hansson</b>, 49<br>Revisor<br>Floda");
    var cLernyHermansson = L.marker([57.8194433,12.0779935], {icon: partyIcons["c"]})
	.bindPopup("8. <b>Lerny Hermansson</b>, 75<br>Sektorschef<br>Sjövik");
    var cAnnMariTörnell = L.marker([57.7660551,12.257752], {icon: partyIcons["c"]})
	.bindPopup("9. <b>Ann-Mari Törnell</b>, 49<br>Fd. enhetschef arbetsmarknad<br>Lerum");
    var cClaesBerlin = L.marker([57.7551166,12.2360502], {icon: partyIcons["c"]})
	.bindPopup("10. <b>Claes Berling</b>, 58<br>Rymdingenjör<br>Aspen");

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
			    ]);
}
