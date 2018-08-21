function loadMarkersForM() {
	var mJonasBergman = L.marker([56.7306,12.6638], {icon: partyIcons["m"]})
		.bindPopup("1. <b>Jonas Bergman</b>, 45<br>Systemutvecklare<br>Haverdal");
	var mCarlJohanBerthilsson = L.marker([56.6786,12.8453], {icon: partyIcons["m"]})
		.bindPopup("2. <b>Carl-Johan Berthilsson</b>, 50<br>Företagare<br>Halmstad");
	var mMikaelaWaltersson = L.marker([56.7800,12.8305], {icon: partyIcons["m"]})
		.bindPopup("3. <b>Mikaela Waltersson</b>, 45<br>Områdeschef<br>Kvibille");
	var mAnnCharlottMankell = L.marker([56.6748,12.8535], {icon: partyIcons["m"]})
		.bindPopup("4. <b>Ann-Charlott Mankell</b>, 59<br>Rekryterare<br>Halmstad");
	var mChristoferLundholm = L.marker([56.6655,12.8743], {icon: partyIcons["m"]})
		.bindPopup("5. <b>Christofer Lundholm</b>, 31<br>Gymnasielärare<br>Halmstad");
	var mDagHultefors = L.marker([56.6774,12.8667], {icon: partyIcons["m"]})
		.bindPopup("6. <b>Dag Hultefors</b>, 64<br>Länsveterinär<br>Halmstad");
	var mJosefinGreen = L.marker([56.6854,12.8637], {icon: partyIcons["m"]})
		.bindPopup("7. <b>Josefin Green</b>, 48<br>Verksamhetschef<br>Halmstad");
	var mLouiseUvenfeldt = L.marker([56.7719,12.6266], {icon: partyIcons["m"]})
		.bindPopup("8. <b>Louise Uvenfeldt</b>, 45<br>Politices magister<br>Steninge");
	var mLarsPuss = L.marker([56.6945,12.6981], {icon: partyIcons["m"]})
		.bindPopup("9. <b>Lars Püss</b>, 52<br>Civilekonom<br>Villshärad");
	var mAdrianMazreku = L.marker([56.6701,12.8205], {icon: partyIcons["m"]})
		.bindPopup("10. <b>Ardian Mazreku</b>, 39<br>Statsvetare<br>Halmstad");
	var mCamillaBerthilsson = L.marker([56.6786,12.8463], {icon: partyIcons["m"]})
		.bindPopup("11. <b>Camilla Berthilsson</b>, 48<br>VD<br>Halmstad");
	var mJennyPetersson = L.marker([56.6656,12.8741], {icon: partyIcons["m"]})
		.bindPopup("12. <b>Jenny Petersson</b>, 37<br>Riksdagsledamot<br>Halmstad");
	var mAndreasBergman = L.marker([56.6737,12.8528], {icon: partyIcons["m"]})
		.bindPopup("13. <b>Andreas Bergman</b>, 38<br>Åklagare<br>Halmstad");
	var mConnyHansen = L.marker([56.6405,13.0435], {icon: partyIcons["m"]})
		.bindPopup("14. <b>Conny Hansen</b>, 50<br>Överstelöjtnant<br>Halmstad");
	var mAnnaFallkvist = L.marker([56.7465,12.7326], {icon: partyIcons["m"]})
		.bindPopup("15. <b>Anna Fallkvist</b>, 51<br>Administratör<br>Harplinge");
	var mHoudaAxelsson = L.marker([56.6786,12.8675], {icon: partyIcons["m"]})
		.bindPopup("16. <b>Houda Axelsson</b>, 39<br>VD<br>Halmstad");
	var mSebastianStenbeck = L.marker([56.6796,12.8544], {icon: partyIcons["m"]})
		.bindPopup("17. <b>Sebastian Stenbeck</b>, 22<br>Försäljare<br>Halmstad");
	var mJohannaJansson = L.marker([56.6780,12.8423], {icon: partyIcons["m"]})
		.bindPopup("18. <b>Johanna Jansson</b>, 42<br>Universitetsadjunkt<br>Halmstad");
	var mMadelenRossköld = L.marker([56.7804,12.6254], {icon: partyIcons["m"]})
		.bindPopup("19. <b>Madelen Rossköld</b>, 31<br>Civilekonom<br>Steninge");

	return L.layerGroup([mJonasBergman,
						 mCarlJohanBerthilsson,
						 mMikaelaWaltersson,
						 mAnnCharlottMankell,
						 mChristoferLundholm,
						 mDagHultefors,
						 mJosefinGreen,
						 mLouiseUvenfeldt,
						 mLarsPuss,
						 mAdrianMazreku,
						 mCamillaBerthilsson,
						 mJennyPetersson,
						 mAndreasBergman,
						 mConnyHansen,
						 mAnnaFallkvist,
						 mHoudaAxelsson,
						 mSebastianStenbeck,
						 mJohannaJansson,
						 mMadelenRossköld
					   ]);
}
