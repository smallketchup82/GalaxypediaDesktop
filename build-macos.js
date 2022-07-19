console.log("Building Galaxypedia Desktop App for MacOS...")
var nativefier = require('nativefier').default;

var options = {
	name: 'Galaxypedia',
	targetUrl: 'https://robloxgalaxy.wiki',
	platform: 'darwin',
	out: './Galaxypedia-macOS-x64',
	fastQuit: true,
	internalUrls: 'http.:\/\/robloxgalaxy\.wiki',
	strictInternalUrls: true,
	showMenuBar: true
};

nativefier(options, function (error, appPath) {
	if (error) {
		console.error(error);
		return;
	}
	console.log('Galaxypedia has been nativefied to', appPath);
});
