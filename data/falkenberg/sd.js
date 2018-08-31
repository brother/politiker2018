/*
Number 8 and 9 on the ballot have not accepted the nomination.
I've not included those, the effect in the election is that they will
not be elected. Seat number eight goes to person in spot 10. I've
added him to the list.

There are also two persons who have added them selves after the list
was submitted by the party. As the method takes the current number (6)
and three after that SD should have 9 in total. With the two withdrawn
persons the list is eight persons long and I can not pick between the
two new persons and will just leave them out of the list.

Omitted persons, eligable persons
    Nilsson, Lennart, Falkenberg
    Torpman, Niklas, Falkenberg
*/

function loadMarkersForSD() {
	var sdSaraLenaBjalko = L.marker([56.9492,12.7856], {icon: partyIcons["sd"]})
		.bindPopup("1. <b>Sara-Lena Bjälkö</b>, 42<br>Företagare");
	var sdStefanJohansson = L.marker([56.8400,12.6963], {icon: partyIcons["sd"]})
		.bindPopup("2. <b>Stefan Johansson</b>, 57<br>Plåtslagare");
	var sdKerstinKlang = L.marker([56.8893,12.5121], {icon: partyIcons["sd"]})
		.bindPopup("3. <b>Kerstin Klang</b>, 68<br>Pensionär");
	var sdAndersJansson = L.marker([56.8956,12.5257], {icon: partyIcons["sd"]})
		.bindPopup("4. <b>nders Jansson</b>, 45<br>Målarmästare");
	var sdDanielBackman = L.marker([56.9052,12.5161], {icon: partyIcons["sd"]})
		.bindPopup("5. <b>Daniel Bäckman</b>, 40<br>Behandlingsassistent");
	var sdChristerHedin = L.marker([56.8999,12.4814], {icon: partyIcons["sd"]})
		.bindPopup("6. <b>Christer Hedin</b>, 53<br>Fritidsledare");
	var sdJosefinHedin = L.marker([56.9083,12.6823], {icon: partyIcons["sd"]})
		.bindPopup("7. <b>Josefine Hedin</b>, 35<br>Undersköterska");
	var sdStenThid = L.marker([56.9083,12.6843], {icon: partyIcons["sd"]})
		.bindPopup("8. <b>Sten Thid</b>, 73");

	return L.layerGroup([sdSaraLenaBjalko,
						 sdStefanJohansson,
						 sdKerstinKlang,
						 sdAndersJansson,
						 sdDanielBackman,
						 sdChristerHedin,
						 sdJosefinHedin,
						 sdStenThid
						 ]);
}
