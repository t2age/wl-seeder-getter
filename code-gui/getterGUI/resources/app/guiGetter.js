var WebTorrent = require('webtorrent')

var client = new WebTorrent()

var magnetURI = document.getElementById('magnetURI').value.trim();

function getTorrent() {
	var magnetURI = document.getElementById('magnetURI').value.trim();
		
	client.add(magnetURI, { path: './datain' }, function (torrent) {
		document.getElementById('torrentStatus').value ='Downloading torrent...';
		
		torrent.on('done', function () {
			console.log('torrent download finished')
			document.getElementById('torrentStatus').value ='Done!';
		})  
	})
}
