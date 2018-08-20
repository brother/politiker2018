var icons = [
	{
		"id": "c",
		"url": "gfx/logo_c.png",
		"size": [24, 25]
	},
	{
		"id": "fi",
		"url": "gfx/logo_fi.png",
		"size": [25, 25]
	},
	{
		"id": "kd",
		"url": "gfx/logo_kd.jpg",
		"size": [25, 23]
	},
	{
		"id": "l",
		"url": "gfx/logo_l.png",
		"size": [21, 25]
	},
	{
		"id": "mp",
		"url": "gfx/logo_mp.png",
		"size": [25, 22]
	},
	{
		"id": "m",
		"url": "gfx/logo_m.png",
		"size": [25, 17]
	},
	{
		"id": "s",
		"url": "gfx/logo_s.png",
		"size": [25, 26]
	},
	{
		"id": "sd",
		"url": "gfx/logo_sd.png",
		"size": [23, 25]
	},
	{
		"id": "v",
		"url": "gfx/logo_v.png",
		"size": [25, 25]
	},
];

var partyIcons = [];
icons.forEach(function(entry) {
	var partyIcon = L.icon({
		iconUrl: entry.url,
		iconSize: entry.size,
		iconAnchor:   [0, 0],
		popupAnchor:  [10, 10]
	});
	partyIcons[entry.id] = partyIcon;
});

