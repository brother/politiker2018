function loadMarkersForM() {
	var mAnnCharlotteStenkil = L.marker([57.11061,12.25576], {icon: partyIcons["m"]})
		.bindPopup("1. <b>Ann-Charlotte Stenkil</b>, 64<br>Civilekonom<br>Varberg");
	var mPeterSjoholm = L.marker([57.1460,12.457], {icon: partyIcons["m"]})
		.bindPopup("2. <b>Peter Sjöholm</b>, 61<br>Företagare<br>Rolfstorp");
	var mHannaNetterberg = L.marker([57.2134,12.3082], {icon: partyIcons["m"]})
		.bindPopup("3. <b>Hanna Netterberg</b>, 35<br>Planeringscontroller<br>Derome");
	var mErlandLinjer = L.marker([57.1100,12.25576], {icon: partyIcons["m"]})
		.bindPopup("4. <b>Erland Linjer</b>, 70<br>Med. dr.<br>Varberg");
	var mMicaelAkesson = L.marker([57.2980,12.2178], {icon: partyIcons["m"]})
		.bindPopup("5. <b>Micael Åkesson</b>, 53<br>Försäkringstjänsteman<br>Stråvalla");
	var mAnetteLofjard = L.marker([57.12,12.22], {icon: partyIcons["m"]})
		.bindPopup("6. <b>Anette Lofjärd</b>, 55<br>Ekonom<br>Getterön");
	var mReineAntoner = L.marker([57.142,12.2867], {icon: partyIcons["m"]})
		.bindPopup("7. <b>Reine Antonér</b>, 62<br>Egenföretagare<br>Trönninge");
	var mAnneTano = L.marker([57.0941,12.2521], {icon: partyIcons["m"]})
		.bindPopup("8. <b>Anne Tano</b>, 54<br>Verksamhetschef<br>Varberg");
	var mUlrikaEricsson = L.marker([57.1111,12.25576], {icon: partyIcons["m"]})
		.bindPopup("9. <b>Ulrika Ericsson</b>, 52<br>Projektledare<br>Varberg");
	var mSvenAndersson = L.marker([57.1069,12.2504], {icon: partyIcons["m"]})
		.bindPopup("10. <b>Sven Andersson</b>, 59<br>Fil. mag.<br>Varberg");
	var mNevrieBSuleyman = L.marker([57.1554,12.2557], {icon: partyIcons["m"]})
		.bindPopup("11. <b>Nevrie B. Suleyman</b>, 43<br>Civilekonom<br>Bläshammar");
	var mAndreasBjorklund = L.marker([57.098,12.2579], {icon: partyIcons["m"]})
		.bindPopup("12. <b>Andreas Björklund</b>, 43<br>Civilekonom<br>Varberg");
	var mGostaBergenheim = L.marker([57.1042,12.2549], {icon: partyIcons["m"]})
		.bindPopup("13. <b>Gösta Bergenheim</b>, 69<br>Fd. kriminalinpektör<br>Varberg");
	var mHannahBjornerhag = L.marker([57.1125,12.2965], {icon: partyIcons["m"]})
		.bindPopup("14. <b>Hannah Björnerhag</b>, 20<br>Studerande<br>Varberg");
	var mDavidSandren = L.marker([57.0985,12.2893], {icon: partyIcons["m"]})
		.bindPopup("15. <b>David Sandrén</b>, 36<br>HR-specialist<br>Varberg");
	var mAnnsofiAurell = L.marker([57.10482,12.25243], {icon: partyIcons["m"]})
		.bindPopup("16. <b>Annsofi Aurell</b>, 72<br>Leg. sjukgymnast<br>Varberg");
	var mMadeleneThomsen = L.marker([57.0569,12.2836], {icon: partyIcons["m"]})
		.bindPopup("17. <b>Madelene Thomsen</b>, 47<br>Socialpedagog<br>Träslövsläge");

	return L.layerGroup([mAnnCharlotteStenkil,
						 mPeterSjoholm,
						 mHannaNetterberg,
						 mErlandLinjer,
						 mMicaelAkesson,
						 mAnetteLofjard,
						 mReineAntoner,
						 mAnneTano,
						 mUlrikaEricsson,
						 mSvenAndersson,
						 mNevrieBSuleyman,
						 mAndreasBjorklund,
						 mGostaBergenheim,
						 mHannahBjornerhag,
						 mDavidSandren,
						 mAnnsofiAurell,
						 mMadeleneThomsen
					   ]);

}
