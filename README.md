# GalaxypediaDesktop
Experimental Desktop App for the [Galaxypedia](https://robloxgalaxy.wiki) built upon [nativefier](https://github.com/nativefier/nativefier). Having a desktop app for the Galaxypedia makes it easier to switch from the game to the Galaxypedia. It's a simple alt+tab.

## Installation
Go to [Releases](https://github.com/smallketchup82/GalaxypediaDesktop/releases) and look for the latest release. Download the zip file according to your platform. Extract it and run the executeable.

## Uninstallation
On recent versions of the application, a menu bar should be present on the application. There should be an option to clear app data. Make sure you press this. If the menu bar is not present, that's fine and it shouldn't be a big deal. However you should consider upgrading to the latest release.

Remove the folder or the executeable (.app on MacOS). Also make sure you delete your cache folder to make sure your account doesn't get compromised, since your cache folder holds your user login token.

On Windows, make sure you delete the cache folder from your AppData folder. It might take a bit of time to find and remove it, but the cache folder starts with "Galaxypedia"  
On MacOS, remove the cache folder located in `~/Library/Application Support`

## Platforms
The app currently works on Windows and MacOS. Linux is no longer prebuilt. To run the Galaxypedia on linux you will have to build the program yourself by following the steps in Development. Do note that it might be unstable.

Windows releases are usually named "win32-x64"  
MacOS releases are usually named "darwin-x64"

## Development
Pull requests are welcome! Feel free to help with creating a desktop application for the Galaxypedia

### Manually Building
1. Clone the repository
2. Install dependencies `npm install`
3. Run `node .` for an interactive terminal which you can use to select the platforms to build.

### Developing
Make sure that you're familiar with the [Nativefier API docs](https://github.com/nativefier/nativefier/blob/master/API.md). Once you've got a good understanding of the Nativefier API, you can help develop by making pull requests where you see fit.