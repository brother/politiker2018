function loadMarkersForM() {
	var mAnnCharlotteStenkil = L.marker([57.11061,12.25576], {icon: partyIcons["m"]})
		.bindPopup("<b>Ann-Charlotte Stenkil</b>, 64<br>Civilekonom<br>Varberg");
	var mPeterSjoholm = L.marker([57.1459,12.4591], {icon: partyIcons["m"]})
		.bindPopup("<b>Peter Sjöholm</b>, 61<br>Företagare<br>Rolfstorp");
	var mHannaNetterberg = L.marker([57.2134,12.3082], {icon: partyIcons["m"]})
		.bindPopup("<b>Hanna Netterberg</b>, 35<br>Planeringscontroller<br>Derome");
	var mErlandLinjer = L.marker([57.1111,12.2568], {icon: partyIcons["m"]})
		.bindPopup("<b>Erland Linjer</b>, 70<br>Med. dr.<br>Varberg");
	var mMicaelAkesson = L.marker([57.2985,12.2178], {icon: partyIcons["m"]})
		.bindPopup("<b>Micael Åkesson</b>, 53<br>Försäkringstjänsteman<br>Stråvalla");
	var mAnetteLofjard = L.marker([57.1207,12.22], {icon: partyIcons["m"]})
		.bindPopup("<b>Anette Lofjärd</b>, 55<br>Ekonom<br>Getterön");
	var mReineAntoner = L.marker([57.142,12.2867], {icon: partyIcons["m"]})
		.bindPopup("<b>Reine Antonér</b>, 62<br>Egenföretagare<br>Trönninge");
	var mAnneTano = L.marker([57.0941,12.2521], {icon: partyIcons["m"]})
		.bindPopup("<b>Anne Tano</b>, 54<br>Verksamhetschef<br>Varberg");
	var mUlrikaEricsson = L.marker([57.1121,12.2576], {icon: partyIcons["m"]})
		.bindPopup("<b>Ulrika Ericsson</b>, 52<br>Projektledare<br>Varberg");
	var mSvenAndersson = L.marker([57.1069,12.2504], {icon: partyIcons["m"]})
		.bindPopup("<b>Sven Andersson</b>, 59<br>Fil. mag.<br>Varberg");
	var mNevrieBSuleyman = L.marker([57.1554,12.2557], {icon: partyIcons["m"]})
		.bindPopup("<b>Nevrie B. Suleyman</b>, 43<br>Civilekonom<br>Bläshammar");
	var mAndreasBjorklund = L.marker([57.098,12.2579], {icon: partyIcons["m"]})
		.bindPopup("<b>Andreas Björklund</b>, 43<br>Civilekonom<br>Varberg");
	var mGostaBergenheim = L.marker([57.1042,12.2549], {icon: partyIcons["m"]})
		.bindPopup("<b>Gösta Bergenheim</b>, 69<br>Fd. kriminalinpektör<br>Varberg");
	var mHannahBjornerhag = L.marker([57.1125,12.2965], {icon: partyIcons["m"]})
		.bindPopup("<b>Hannah Björnerhag</b>, 20<br>Studerande<br>Varberg");
	var mDavidSandren = L.marker([57.0985,12.2893], {icon: partyIcons["m"]})
		.bindPopup("<b>David Sandrén</b>, 36<br>HR-specialist<br>Varberg");
	var mAnnsofiAurell = L.marker([57.10482,12.25243], {icon: partyIcons["m"]})
		.bindPopup("<b>Annsofi Aurell</b>, 72<br>Leg. sjukgymnast<br>Varberg");
	var mMadeleneThomsen = L.marker([57.0543,12.2836], {icon: partyIcons["m"]})
		.bindPopup("<b>Madelene Thomsen</b>, 47<br>Socialpedagog<br>Träslövsläge");

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
