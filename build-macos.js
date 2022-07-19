/* eslint-disable no-useless-escape */
console.log("Building Galaxypedia Desktop App for MacOS...")
var nativefier = require("nativefier").default

var options = {
	name: "Galaxypedia",
	targetUrl: "https://robloxgalaxy.wiki",
	platform: "osx",
	out: ".",
	fastQuit: true,
	internalUrls: "http.:\/\/robloxgalaxy\.wiki",
	strictInternalUrls: true,
	showMenuBar: true
}

nativefier(options, function (error, appPath) {
	if (error) {
		throw error.message
	}
	console.log("Galaxypedia has been nativefied to", appPath)
})
