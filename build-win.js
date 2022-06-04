console.log("Building Galaxypedia Desktop App for Windows...")
var nativefier = require('nativefier').default;

var options = {
	name: 'Galaxypedia',
	targetUrl: 'https://robloxgalaxy.wiki',
	platform: 'windows',
	arch: 'x64',
	out: '.',
};

nativefier(options, function (error, appPath) {
	if (error) {
		console.error(error);
		return;
	}
	console.log('Galaxypedia has been nativefied to', appPath);
});
