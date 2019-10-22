// Need to install NodeJS and run "npm install webtorrent-hybrid"

var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

// Get command line argument/parameter
magnetURI = process.argv[2];
if (typeof magnetURI === 'undefined') {
	console.log('Need magnetURI as argument:');
	console.log('>node nodeGetter.js "bla bla bla..."');
	process.exit();
} 

client.add(magnetURI, { path: './INBOX' }, function (torrent) {
  console.log('Downloading ...');
  
  torrent.on('done', function () {
    console.log('... torrent download finished to INBOX')
  })  
})

