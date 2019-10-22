// Need to install NodeJS and run "npm install webtorrent-hybrid"

var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

// Get command line argument/parameter
var file = process.argv[2];
if (typeof file === 'undefined') {
	console.log('Need FILE as argument:');
	console.log('>node nodeSeeder.js "thisFile.txt"');
	process.exit();
} 

client.seed(file, function (torrent) {
  console.log('seeding torrent ', torrent.magnetURI);
})

