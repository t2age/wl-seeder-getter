// Need to install NodeJS and run "npm install webtorrent-hybrid"

var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

// This file will be seeded (served)...
var file = 'hello.txt';

client.seed(file, function (torrent) {
	// print the magnet URI of the file 'hello.txt'
	console.log('seeding torrent ', torrent.magnetURI);
})

