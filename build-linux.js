/* eslint-disable no-useless-escape */
var nativefier = require("nativefier").default
const chalk = require("chalk")

var options = {
	name: "Galaxypedia",
	targetUrl: "https://robloxgalaxy.wiki",
	platform: "linux",
	arch: "x64",
	out: ".",
	internalUrls: "http.:\/\/robloxgalaxy\.wiki",
	strictInternalUrls: true,
	showMenuBar: true
}

console.log(chalk.redBright("Linux support is unstable and may have errors. Use at your own risk\nTo cancel, terminate the script within the next 5 seconds"))

setTimeout(() => {
	console.log("Building Galaxypedia Desktop App for Linux...")

	nativefier(options, function (error, appPath) {
		if (error) {
			throw error.message
		}
		console.log("GalaxypediaDesktop Linux has been nativefied to", appPath)
	})

}, 5000)