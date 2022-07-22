# GalaxypediaDesktop
Desktop App for the [Galaxypedia](https://robloxgalaxy.wiki) built upon [nativefier](https://github.com/nativefier/nativefier). Having a desktop app for the Galaxypedia makes it easier to switch from the game to the Galaxypedia. It's a simple alt+tab.

## Installation
Go to [Releases](https://github.com/smallketchup82/GalaxypediaDesktop/releases) and look for the latest release. Download the zip file according to your platform. Extract it and run the executeable.

## Uninstallation
To uninstall the application, simply delete the folder. On MacOS, drag the .app into the trash can.

Make sure you delete the cache folders too!
On Windows, make sure you delete the cache folder from your AppData's roaming folder (`C:\Users\USER\AppData\Roaming\galaxypedia-nativefier-ed64a5`)  
On MacOS, remove the cache folder located in `~/Library/Application Support`

## Platforms
The app currently works on Windows and MacOS. Prebuilds for Linux are not provided, you must clone the repository and build it yourself. Do note that Linux builds can be unstable

Windows releases are usually named "win32-x64"  
MacOS releases are usually named "darwin-x64"

## Development
Pull requests are welcome! Feel free to help with creating a desktop application for the Galaxypedia

### Building
1. Clone the repository
2. Install dependencies `npm install`
3. Run `node .` for an interactive terminal which you can use to select the platforms to build.

### Developing
Make sure that you're familiar with the [Nativefier API docs](https://github.com/nativefier/nativefier/blob/master/API.md). Once you've got a good understanding of the Nativefier API, you can help develop by making pull requests where you see fit.
