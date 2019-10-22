# WL Seeder & WL Getter
WebeLive Seeder &amp; Getter (Powered by WebTorrent)  
  
![seeder-getter simple]()  
  
    
The following lines of code are real working code to create a P2P Server (seeder) to serve (seed the file "hello.txt" to any P2P client (getter/downloader):  
  

```  
var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

// This file will be seeded (served)...
var file = 'hello.txt';

client.seed(file, function (torrent) {
	// print the magnet URI of the file 'hello.txt'
	console.log('seeding torrent ', torrent.magnetURI);
})
```  
  
  

The following lines are a real working code to P2P download (get) a file from a P2P seeder (server):  
  
```  
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
  
Above scripts are inside the "js-simple" folder.
  

The following pictures illustrate how both process works.  
  
![howto 1]()  

![howto 2]()  

![howto 3]()  

![howto 4]()  

![howto 5]()  


![javascript 1]()  
  
The samples are working on 3 different modes: inside Web Browser, at command line and with Electron Graphical User Interface.  
  
Since it uses JavaScript, it should be easier to understand and adapt it to more elaborated stuff...  
  
![javascript 2]()  
  
JavaScript language is UNIQUE in the sense that it runs inside the Web Browser, it runs as command line interface (CLI) and also, with Electron, it offers GUI (Graphical User Interface) programming choice. And, because JavaScript is relative simple and easy language to learn and use, even beginners can start to take advantage of it in all these ways...  
  

**Web Browser HTML/JavaScript version**  
  
The following picture is the HTML/JavaScript version of the Seeder Sample running on Firefox:  
  
The following picture is the HTML/JavaScript version of the Getter Sample running on Firefox:  
  
Scripts are inside the "scripts-javascript" folder.  
  
**NodeJS (JavaScript) version**  
  
The following code is a real working code for the seeder:  
  
The following code is a real working code for the getter:  
  
Both code sample are very short and simple, and yet IT IS EVERYTHING THAT YOU NEED!  
  
Scripts are inside the "script-nodejs" folder.  
  
  
**Electron G.U.I. version**  
  
The Electron version uses the scripts as the other two versions, and make uses of the Electron Platform as the Graphical User Interface, so, combining the graphical aspect of the first version (browser) with the command line programming aspect of the second version (NodeJS).  
  
To avoid the download size of the entire binary (scripts + Elecron), I will provide here instructions to download Electron and assemble the entire sample into a final Graphical version of the sample...  
  
  
**User Custom version**  
I also have "user custom versions", showing how to have more control of the whole process. It is the same samples with more instructions...  
  
For this present version, my goal was simplicity: less number of lines of code, better!  
  
  
  
**About "WebeLive" word**  
![WebeLive]()  
  
When I started playing with Web Real Time stuff I was using the term "Web Live" to refer to the things that uses the notion of a web in "live" fashion (meaning "real time")...
But, slowly I realized that there is much more than just making real time communication on the Internet, there are lots and lots of tools that we can use to explore the notion of "live" and Internet together...
My perception has changed and I was still refering to it as "Web Live", then I decide to change the term (word) that I was using, so to tell me (and others) that it is more than just a real time web, but I did not want something to much removed from the "web live" aspect... so I decide to create a new term, "WebeLive" and attach the following meaning to it...  
  
  
a) Web Live  
b) Web ALive  
c) Web Believe  
  
