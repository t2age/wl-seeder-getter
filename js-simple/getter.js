// Need to install NodeJS and run "npm install webtorrent-hybrid"

var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

// This is the magnet URI of the file 'hello.txt'
var magnetURI = 'magnet:?xt=urn:btih:7b5e918f364908afab937ecdd84059dfb61102b7&dn=hello.txt&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'

client.add(magnetURI, { path: './INBOX' }, function (torrent) {
  console.log('downloading torrent ', magnetURI);
  
  torrent.on('done', function () {
    console.log('...torrent download finished to [INBOX] folder')
  })
})

