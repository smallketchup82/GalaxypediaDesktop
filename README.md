# GalaxypediaDesktop
Experimental Desktop Apps for the [Galaxypedia](https://robloxgalaxy.wiki) built upon [nativefier](https://github.com/nativefier/nativefier). Having a desktop app for the Galaxypedia makes it easier to switch from the Galaxy game to the Galaxypedia. It's a simple alt+tab.

## Installation
Go to [Releases](https://github.com/smallketchup82/GalaxypediaDesktop/releases) and look for the latest release. Download the zip file according to your platform. Extract it and run the executeable.

### Portability
This is for more advanced users. Usually you don't have to worry about this and it will not affect your installation.

On Windows, you should be able to move the executeable to a different location and it should continue to work. Prebuilds will include additional files in case they are important, but you can delete them and try running the executeable without them. But for the general user, it's better to keep them.  
MacOS users don't have to worry about this since the entire application is packaged into the .app and is fully portable apart from the cache folder.

## Uninstallation
Remove the folder or the executeable (if you moved the executeable out of the folder). Also make sure you delete your cache folder to make sure your account doesn't get compromised, since your cache folder holds your user login token.

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
3. Each .js script in the repository builds the app for a specific platform. To run them use `node <file>`. To run builds for all platforms, run `node .`

### Developing
Make sure that you're familiar with the [Nativefier API docs](https://github.com/nativefier/nativefier/blob/master/API.md). Once you've got a good understanding of the Nativefier API, you can help develop by making pull requests where you see fit.
