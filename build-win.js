console.log("Building Galaxypedia Desktop App for Windows...")
var nativefier = require('nativefier').default;

var options = {
	name: 'Galaxypedia',
	targetUrl: 'https://robloxgalaxy.wiki',
	platform: 'windows',
	arch: 'x64',
	out: '.',
	internalUrls: 'http.:\/\/robloxgalaxy\.wiki',
	strictInternalUrls: true,
	showMenuBar: true
};

nativefier(options, function (error, appPath) {
	if (error) {
		throw error.message
	}
	console.log('Galaxypedia has been nativefied to', appPath);
});
