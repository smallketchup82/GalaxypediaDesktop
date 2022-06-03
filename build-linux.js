// Build for Linux. Unstable
console.log("Linux is not supported. If you are building it yourself be weary of errors. Use at your own risk.\nTo cancel, terminate the script within the next 5 seconds")
setTimeout(() => {
  console.log("Building Galaxypedia Desktop App for Linux...")
  var nativefier = require('nativefier').default;

  var options = {
    name: 'Galaxypedia',
    targetUrl: 'https://robloxgalaxy.wiki',
    platform: 'linux',
    arch: 'x64',
    out: '.',
  };

  nativefier(options, function (error, appPath) {
    if (error) {
      console.error(error);
      return;
    }
    console.log('GalaxypediaDesktop Linux has been nativefied to', appPath);
  });

}, 5000);