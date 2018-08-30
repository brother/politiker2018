/*
1. Michael Svensson, 61 år, Riksdagsledamot, Falkenberg
...
13. Johan Palmgren, 47 år, Fastighetschef, Slöinge

The M ballot was set as all others in April. In mid August it was
found that Michael Svensson had not done his travel expenses for the
Riksdag correct and he announced that he resigned from the ballot. At
the time of writing he is still listed as a candidate at the ballot
but I assume that will change soon and I have removed his name from
the ballot and shifted all the others one step up. The number in front
of the name is the natural number not the ballot number as has been
the case earlier. Because of this number 13 is included as number 12
just to have a more current display of the candidates.
*/
function loadMarkersForM() {
	var mNinniGustavsson = L.marker([57.1120,12.6993], {icon: partyIcons["m"]})
		.bindPopup("1. <b>Ninni Gustavsson</b>, 58<br>Inköpare<br>Ullared");
	var mRieBoulund = L.marker([56.8759,12.5992], {icon: partyIcons["m"]})
		.bindPopup("2. <b>Rie Boulund</b>, 62<br>Kulturvetare<br>Boberg");
	var mKarinLundberg = L.marker([56.9010,12.4930], {icon: partyIcons["m"]})
		.bindPopup("3. <b>Karin Lundberg</b>, 54<br>Förstelärare<br>Falkenberg");
	var mGoranJanko = L.marker([56.8749,12.5217], {icon: partyIcons["m"]})
		.bindPopup("4. <b>Göran Janko</b>, 65<br>Försäljningschef<br>Falkenberg");
	var mCharlottaJonson = L.marker([56.9000,12.4930], {icon: partyIcons["m"]})
		.bindPopup("5. <b>Charlotta Jonson</b>, 31<br>Förskollärare<br>Falkenberg");
	var mFilipBertilsson = L.marker([56.8749,12.5237], {icon: partyIcons["m"]})
		.bindPopup("6. <b>Filip Bertilsson</b>, 23<br>Stadsplanerare<br>Skrea");
	var mGunMarieStenstrom = L.marker([56.8223,12.6143], {icon: partyIcons["m"]})
		.bindPopup("7. <b>Gun Marie Stenström</b>, 67<br>Kurator<br>Ugglarp");
	var mGertPersson = L.marker([56.9031,12.4903], {icon: partyIcons["m"]})
		.bindPopup("8. <b>Gert Persson</b>, 61<br>Assistent<br>Falkenberg");
	var mBoGustafsson = L.marker([56.9147,12.5393], {icon: partyIcons["m"]})
		.bindPopup("9. <b>Bo Gustafsson</b>, 69<br>Civilekonom<br>Tröinge");
	var mLarsAgbrant = L.marker([56.9053,12.4765], {icon: partyIcons["m"]})
		.bindPopup("10. <b>Lars Agbrant</b>, 62<br>Konsult<br>Falkenberg");
	var mNiklasLiljeroth = L.marker([56.8645,12.6216], {icon: partyIcons["m"]})
		.bindPopup("11. <b>Niklas Liljeroth</b>, 52<br>Verksamhetschef<br>Heberg");
	var mJohanPalmgren = L.marker([56.8676,12.6987], {icon: partyIcons["m"]})
		.bindPopup("12. <b>Johan Palmgren</b>, 47<br>Fastighetschef<br>Slöinge");

	return L.layerGroup([mNinniGustavsson,
						 mRieBoulund,
						 mKarinLundberg,
						 mGoranJanko,
						 mCharlottaJonson,
						 mFilipBertilsson,
						 mGunMarieStenstrom,
						 mGertPersson,
						 mBoGustafsson,
						 mLarsAgbrant,
						 mNiklasLiljeroth,
						 mJohanPalmgren
						]);
}
