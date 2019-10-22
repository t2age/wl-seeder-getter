var file;

function openFile() {
	const {dialog} = require('electron').remote;
	dialog.showOpenDialog(function (args) {
		file = args;
	});
}

function createTorrent() {
	var WebTorrent = require('webtorrent')
	const path = require('path')
	var client = new WebTorrent()
	
	client.seed(file, function (torrent) {
		document.getElementById('magnetURI').value = torrent.magnetURI;
	})
}

