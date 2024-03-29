# WL Seeder & WL Getter
WebeLive Seeder &amp; Getter (Powered by WebTorrent)  
  
![seeder-getter simple](img/seeder-getter-howto-ICON.jpg)  
  
  
-----
The following lines of code are real working code to create a P2P Server (seeder) to serve (seed the file "hello.txt" to any P2P client (getter/downloader):  
  

```javascript  
var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

// This file will be seeded (served)...
var file = 'hello.txt';

client.seed(file, function (torrent) {
	// print the magnet URI of the file 'hello.txt'
	console.log('seeding torrent ', torrent.magnetURI);
})
```  
  
-----

The following lines are a real working code to P2P download (get) a file from a P2P seeder (server):  
  
```javascript  
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
```  
  
-----
  
Above scripts are inside the "js-simple" folder.
  

The following pictures illustrate how both process works.  
  

![howto 1](img/seeder-getter-001.jpg)  
Pict 1  
  
-----
![howto 2](img/seeder-getter-002.jpg)  
Pict 2  
  
-----
![howto 3](img/seeder-getter-003.jpg)  
Pict 3  
  
-----
![howto 4](img/seeder-getter-004.jpg)  
Pict 4  
  
-----
![howto 5](img/seeder-getter-005.jpg)  
Pict 5  
  
-----
**3 Ways to run Seeder / Getter**  
  
![javascript 1](img/js-power/javascript-power-001.jpg)  
  
The samples are working on 3 different modes: inside Web Browser, at command line and with Electron Graphical User Interface.  
  
Since it uses JavaScript, it should be easier to understand and adapt it to more elaborated stuff...  
  
![javascript 2](img/js-power/javascript-power-002.jpg)  
  
JavaScript language is UNIQUE in the sense that it runs inside the Web Browser, it runs as command line interface (CLI) and also, with Electron, it offers GUI (Graphical User Interface) programming choice. And, because JavaScript is relative simple and easy language to learn and use, even beginners can start to take advantage of it in all these ways...  
  
  
**Web Browser HTML/JavaScript version**  
  
The following picture is the HTML/JavaScript version of the Seeder Sample running on Firefox:  
  
![](img/wl-seeder.jpg)  

The following picture is the HTML/JavaScript version of the Getter Sample running on Firefox:  
  
![](img/wl-getter.jpg)  
  
Scripts are inside the "code-browser" folder.  
  
**NodeJS (JavaScript) version**  
  
The following code is a real working code for the seeder:  
  
```javascript  
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
```  
  
-----
  
The following code is a real working code for the getter:  
  
```javascript  
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
```  
  
-----
  
Both code sample are very short and simple, and yet IT IS EVERYTHING THAT YOU NEED!  
  
Scripts are inside the "code-nodejs" folder.  
  
  
**Electron G.U.I. version**  
  
The Electron version uses the scripts as the other two versions, and make uses of the Electron Platform as the Graphical User Interface, so, combining the graphical aspect of the first version (browser) with the command line programming aspect of the second version (NodeJS).  
  
To avoid the download size of the entire binary (scripts + Elecron), I will provide here instructions to download Electron and assemble the entire sample into a final Graphical version of the sample...  
  
  
**User Custom version**  
I also have "user custom versions", showing how to have more control of the whole process. It is the same samples with more instructions...  
  
For this present version, my goal was simplicity: less number of lines of code, better!  
  
  
  
**About "WL (WebeLive)" word**  
Basically it means Web in live (real time) fashion, but with more meaning added to it, such as:  
  
a) Web Live (Tools)  
b) Web (Which is) Alive  
c) Web (That We Can) Believe  
  
[Details here: https://github.com/t2age/webelive](https://github.com/t2age/webelive)
